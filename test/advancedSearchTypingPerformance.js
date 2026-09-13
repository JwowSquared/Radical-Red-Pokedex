(function bootstrapAdvancedSearchTypingPerformance(global) {
	'use strict';

	if (global.__advancedSearchTypingPerf?.version === '1.0.0') {
		return;
	}

	const VERSION = '1.0.0';
	const SCRIPT_SRC = document.currentScript?.src
		|| new URL('test/advancedSearchTypingPerformance.js', global.location.href).toString();
	const DEFAULT_APP_URL = new URL('../index.html', SCRIPT_SRC).toString();
	const DEFAULT_QUERIES = [
		{ level: 1, label: 'Free text fallback', query: 'char' },
		{ level: 2, label: 'Exact name', query: "name = 'charizard'" },
		{ level: 3, label: 'Single numeric filter', query: 'bst >= 500' },
		{ level: 4, label: 'Numeric with boolean', query: 'bst >= 500 and available' },
		{ level: 5, label: 'Single ability exact match', query: "ability = 'huge power'" },
		{ level: 6, label: 'Move plus stat threshold', query: "move = 'u-turn' and spe >= 90" },
		{ level: 7, label: 'Exact location', query: "location = 'route 2'" },
		{ level: 8, label: 'Location substring with availability', query: "location ~ 'route 2' and available" },
		{ level: 9, label: 'Power ability sweep query', query: "((ability ~ ('huge power','feline prowess','sage power')) and (atk >= 95 or spa >= 95)) and bst >= 520" },
		{ level: 10, label: 'Nested mixed query', query: "((location ~ 'route 2' or location ~ 'route 3') and available and not 'arceus') and ((ability ~ ('protean','libero','galvanize') and spe >= 100) or (ability ~ ('fur coat','fluffy','ice scales') and hp >= 80 and def >= 90))" }
	];
	const DEFAULT_CONFIG = {
		queries: DEFAULT_QUERIES,
		warmupIterations: 1,
		measuredIterations: 3,
		interKeyDelayMs: 0,
		postKeyFrames: 0,
		postSubmitFrames: 1,
		timeoutMs: 30000
	};

	// Clamps an input to a predictable integer range for the benchmark config.
	function clampInteger(value, minimum, maximum, fallback) {
		const numericValue = Number(value);
		if (!Number.isFinite(numericValue)) {
			return fallback;
		}

		return Math.min(maximum, Math.max(minimum, Math.floor(numericValue)));
	}

	// Normalizes caller-supplied query objects into labeled benchmark rows.
	function normalizeQueries(queries) {
		if (!Array.isArray(queries) || queries.length === 0) {
			return DEFAULT_QUERIES.map(query => ({ ...query }));
		}

		return queries
			.map((query, index) => {
				if (typeof query === 'string') {
					return {
						level: index + 1,
						label: `Query ${index + 1}`,
						query: query.trim()
					};
				}

				return {
					level: clampInteger(query?.level, 1, 999, index + 1),
					label: String(query?.label || `Query ${index + 1}`),
					query: String(query?.query || '').trim()
				};
			})
			.filter(query => query.query);
	}

	// Expands user config into a full typing-benchmark plan with safe defaults.
	function normalizeConfig(userConfig = {}) {
		return {
			queries: normalizeQueries(userConfig.queries),
			warmupIterations: clampInteger(userConfig.warmupIterations, 0, 10, DEFAULT_CONFIG.warmupIterations),
			measuredIterations: clampInteger(userConfig.measuredIterations, 1, 25, DEFAULT_CONFIG.measuredIterations),
			interKeyDelayMs: clampInteger(userConfig.interKeyDelayMs, 0, 1000, DEFAULT_CONFIG.interKeyDelayMs),
			postKeyFrames: clampInteger(userConfig.postKeyFrames, 0, 4, DEFAULT_CONFIG.postKeyFrames),
			postSubmitFrames: clampInteger(userConfig.postSubmitFrames, 0, 4, DEFAULT_CONFIG.postSubmitFrames),
			timeoutMs: clampInteger(userConfig.timeoutMs, 5000, 120000, DEFAULT_CONFIG.timeoutMs),
			appUrl: String(userConfig.appUrl || DEFAULT_APP_URL)
		};
	}

	// Waits for one or more animation frames so DOM changes can settle when desired.
	function waitForFrames(targetWindow = global, frameCount = 1) {
		if (frameCount <= 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const nextFrame = remaining => {
				if (remaining <= 0) {
					resolve();
					return;
				}

				targetWindow.requestAnimationFrame(() => nextFrame(remaining - 1));
			};

			nextFrame(frameCount);
		});
	}

	// Sleeps for a fixed number of milliseconds to emulate human pauses between keys.
	function sleep(targetWindow = global, delayMs = 0) {
		return new Promise(resolve => targetWindow.setTimeout(resolve, delayMs));
	}

	// Returns the globals the typing benchmark needs before it can start.
	function getMissingPrerequisites(targetWindow = global) {
		const requiredNames = [
			'species',
			'setSearchMode',
			'clearAdvancedSearch',
			'getFilteredSpeciesResults',
			'removeFilters'
		];

		return requiredNames.filter(name => typeof targetWindow[name] === 'undefined');
	}

	// Waits until the RR Dex page is fully interactive inside the target window.
	async function waitForAppReady(targetWindow = global, timeoutMs = DEFAULT_CONFIG.timeoutMs) {
		const startedAt = Date.now();
		while (Date.now() - startedAt <= timeoutMs) {
			const main = targetWindow.document?.querySelector('main');
			const hasSpecies = !!targetWindow.species && Object.keys(targetWindow.species).length > 0;
			const missingPrerequisites = getMissingPrerequisites(targetWindow);
			if (hasSpecies && main && !main.classList.contains('hide') && missingPrerequisites.length === 0) {
				return;
			}

			await sleep(targetWindow, 50);
		}

		throw new Error(`Typing benchmark timed out after ${timeoutMs} ms while waiting for the app to load.`);
	}

	// Uses the native value setter so the browser input behaves like a real user edit target.
	function setNativeInputValue(targetWindow, input, value) {
		const descriptor = Object.getOwnPropertyDescriptor(targetWindow.HTMLInputElement.prototype, 'value');
		descriptor.set.call(input, value);
	}

	// Dispatches one synthetic keyboard event into the target input element.
	function dispatchKeyboardEvent(targetWindow, input, type, key) {
		const event = new targetWindow.KeyboardEvent(type, {
			key,
			bubbles: true,
			cancelable: true
		});
		input.dispatchEvent(event);
	}

	// Dispatches one synthetic input event so advanced search processes the typed text.
	function dispatchInputEvent(targetWindow, input, inputType, data) {
		let event;
		try {
			event = new targetWindow.InputEvent('input', {
				bubbles: true,
				cancelable: false,
				inputType,
				data
			});
		}
		catch {
			event = new targetWindow.Event('input', {
				bubbles: true,
				cancelable: false
			});
			event.inputType = inputType;
			event.data = data;
		}

		input.dispatchEvent(event);
	}

	// Returns the advanced-search textbox or throws early when the page is not ready.
	function getAdvancedSearchInput(targetWindow = global) {
		const input = targetWindow.document.getElementById('advancedSearchInput');
		if (!input) {
			throw new Error('Advanced search input was not found.');
		}

		return input;
	}

	// Captures the visible search state after typing or submitting one query.
	function captureSearchState(targetWindow = global) {
		return {
			statusText: targetWindow.document.getElementById('advancedSearchStatus')?.textContent?.trim() || '',
			statusClass: targetWindow.document.getElementById('advancedSearchStatus')?.className || '',
			resultCount: typeof targetWindow.getFilteredSpeciesResults === 'function'
				? targetWindow.getFilteredSpeciesResults().length
				: 0,
			suggestionCount: targetWindow.document.querySelectorAll('#advancedSearchAutocompleteDropdown li').length,
			locationGroupCount: targetWindow.document.querySelectorAll('.locationSpeciesGroupTitle').length,
			tableRowCount: targetWindow.document.querySelectorAll('.speciesRow').length
		};
	}

	// Resets the advanced-search UI to a clean empty state before each typing run.
	async function resetAdvancedSearchState(targetWindow = global) {
		targetWindow.setSearchMode('advanced', false);
		targetWindow.removeFilters();
		targetWindow.clearAdvancedSearch();

		const input = getAdvancedSearchInput(targetWindow);
		input.focus();
		await waitForFrames(targetWindow, 1);
		return input;
	}

	// Types one character exactly as a user would: keydown, value edit, input, then keyup.
	async function typeSingleCharacter(targetWindow, input, nextCharacter, config) {
		const previousValue = input.value;
		const nextValue = previousValue + nextCharacter;
		const startedAt = targetWindow.performance.now();

		dispatchKeyboardEvent(targetWindow, input, 'keydown', nextCharacter);
		setNativeInputValue(targetWindow, input, nextValue);
		if (typeof input.setSelectionRange === 'function') {
			input.setSelectionRange(nextValue.length, nextValue.length);
		}
		dispatchInputEvent(targetWindow, input, 'insertText', nextCharacter);
		dispatchKeyboardEvent(targetWindow, input, 'keyup', nextCharacter);

		if (config.interKeyDelayMs > 0) {
			await sleep(targetWindow, config.interKeyDelayMs);
		}
		if (config.postKeyFrames > 0) {
			await waitForFrames(targetWindow, config.postKeyFrames);
		}

		const durationMs = targetWindow.performance.now() - startedAt;
		return {
			character: nextCharacter,
			value: nextValue,
			durationMs,
			suggestionCount: targetWindow.document.querySelectorAll('#advancedSearchAutocompleteDropdown li').length
		};
	}

	// Types a full query from left to right and records per-keystroke timings.
	async function typeQueryManually(targetWindow, query, config) {
		const input = await resetAdvancedSearchState(targetWindow);
		const keySamples = [];
		const keyTimeline = [];

		for (const [index, character] of Array.from(query).entries()) {
			const sample = await typeSingleCharacter(targetWindow, input, character, config);
			keySamples.push(sample.durationMs);
			keyTimeline.push({
				index: index + 1,
				character,
				durationMs: formatMetric(sample.durationMs),
				suggestionCount: sample.suggestionCount
			});
		}

		return {
			input,
			keySamples,
			keyTimeline,
			typedValue: input.value,
			totalTypingMs: keySamples.reduce((sum, sample) => sum + sample, 0)
		};
	}

	// Submits the current query by pressing Enter and captures the resulting render state.
	async function submitQueryWithEnter(targetWindow, input, config) {
		const startedAt = targetWindow.performance.now();

		dispatchKeyboardEvent(targetWindow, input, 'keydown', 'Enter');
		dispatchKeyboardEvent(targetWindow, input, 'keyup', 'Enter');
		if (config.postSubmitFrames > 0) {
			await waitForFrames(targetWindow, config.postSubmitFrames);
		}

		return {
			submitMs: targetWindow.performance.now() - startedAt,
			...captureSearchState(targetWindow)
		};
	}

	// Rounds timing numbers so console output stays compact and readable.
	function formatMetric(value) {
		return Number(value.toFixed(3));
	}

	// Returns one nearest-rank percentile for a list of numeric samples.
	function getPercentile(samples, percentile) {
		if (!samples.length) {
			return 0;
		}

		const sorted = [...samples].sort((left, right) => left - right);
		const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil((percentile / 100) * sorted.length) - 1));
		return sorted[index];
	}

	// Summarizes any timing sample list into min, max, average, median, and p95 values.
	function summarizeSamples(samples) {
		if (!samples.length) {
			return {
				minMs: 0,
				maxMs: 0,
				avgMs: 0,
				medianMs: 0,
				p95Ms: 0
			};
		}

		const total = samples.reduce((sum, sample) => sum + sample, 0);
		return {
			minMs: formatMetric(Math.min(...samples)),
			maxMs: formatMetric(Math.max(...samples)),
			avgMs: formatMetric(total / samples.length),
			medianMs: formatMetric(getPercentile(samples, 50)),
			p95Ms: formatMetric(getPercentile(samples, 95))
		};
	}

	// Measures one query end-to-end, including manual typing and Enter submission.
	async function runSingleQueryIteration(targetWindow, queryDefinition, config) {
		const typingResult = await typeQueryManually(targetWindow, queryDefinition.query, config);
		const submitResult = await submitQueryWithEnter(targetWindow, typingResult.input, config);
		return {
			keySamples: typingResult.keySamples,
			keyTimeline: typingResult.keyTimeline,
			totalTypingMs: typingResult.totalTypingMs,
			submitMs: submitResult.submitMs,
			endToEndMs: typingResult.totalTypingMs + submitResult.submitMs,
			resultCount: submitResult.resultCount,
			suggestionCount: submitResult.suggestionCount,
			locationGroupCount: submitResult.locationGroupCount,
			tableRowCount: submitResult.tableRowCount,
			statusText: submitResult.statusText,
			statusClass: submitResult.statusClass
		};
	}

	// Builds one compact summary row from the raw per-iteration timings for a query.
	function summarizeQueryIterations(queryDefinition, iterations) {
		const allKeySamples = iterations.flatMap(iteration => iteration.keySamples);
		const typingSamples = iterations.map(iteration => iteration.totalTypingMs);
		const submitSamples = iterations.map(iteration => iteration.submitMs);
		const totalSamples = iterations.map(iteration => iteration.endToEndMs);
		const lastIteration = iterations[iterations.length - 1] || null;
		const keySummary = summarizeSamples(allKeySamples);
		const typingSummary = summarizeSamples(typingSamples);
		const submitSummary = summarizeSamples(submitSamples);
		const totalSummary = summarizeSamples(totalSamples);

		return {
			level: queryDefinition.level,
			label: queryDefinition.label,
			query: queryDefinition.query,
			characters: Array.from(queryDefinition.query).length,
			avgKeyMs: keySummary.avgMs,
			p95KeyMs: keySummary.p95Ms,
			maxKeyMs: keySummary.maxMs,
			avgTypingMs: typingSummary.avgMs,
			p95TypingMs: typingSummary.p95Ms,
			avgSubmitMs: submitSummary.avgMs,
			p95SubmitMs: submitSummary.p95Ms,
			avgTotalMs: totalSummary.avgMs,
			p95TotalMs: totalSummary.p95Ms,
			resultCount: lastIteration?.resultCount || 0,
			suggestionsAfterSubmit: lastIteration?.suggestionCount || 0,
			locationGroups: lastIteration?.locationGroupCount || 0,
			tableRows: lastIteration?.tableRowCount || 0,
			status: lastIteration?.statusText || ''
		};
	}

	// Benchmarks one query through warmups plus measured iterations.
	async function runQueryBenchmark(targetWindow, queryDefinition, config) {
		for (let iteration = 0; iteration < config.warmupIterations; iteration += 1) {
			await runSingleQueryIteration(targetWindow, queryDefinition, config);
		}

		const iterations = [];
		for (let iteration = 0; iteration < config.measuredIterations; iteration += 1) {
			iterations.push(await runSingleQueryIteration(targetWindow, queryDefinition, config));
		}

		return {
			summary: summarizeQueryIterations(queryDefinition, iterations),
			iterations
		};
	}

	// Captures the current save/randomizer context so results are easier to interpret later.
	function buildBenchmarkContext(targetWindow = global) {
		const currentSave = targetWindow.saveData;
		return {
			url: targetWindow.location.href,
			speciesCount: Object.keys(targetWindow.species || {}).length,
			saveLoaded: !!currentSave,
			randomizedSpecies: currentSave?.random?.normalSpecies === true,
			randomizedAbilities: currentSave?.random?.abilities === true,
			randomizedLearnset: currentSave?.random?.learnset === true,
			hardmode: currentSave?.hardmode === true,
			restricted: currentSave?.restricted === true,
			disableValueSuggestions: targetWindow.appearanceSettings?.disableValueSuggestions === true,
			locationBaseOrder: targetWindow.appearanceSettings?.locationBaseOrder === true
		};
	}

	// Prints the benchmark rows in a console table and keeps the raw report available.
	function printBenchmarkReport(report) {
		console.groupCollapsed(`[advanced-search-typing-perf] ${report.rows.length} queries`);
		console.table(report.rows);
		console.log(report);
		console.groupEnd();
	}

	// Runs the typing benchmark in the current page context.
	async function runBenchmarkInWindow(userConfig = {}) {
		const config = normalizeConfig(userConfig);
		await waitForAppReady(global, config.timeoutMs);

		const report = {
			version: VERSION,
			generatedAt: new Date().toISOString(),
			mode: 'in-place',
			context: buildBenchmarkContext(global),
			config,
			rows: [],
			rawIterations: []
		};

		global.setSearchMode('advanced', false);
		for (const queryDefinition of config.queries) {
			const queryReport = await runQueryBenchmark(global, queryDefinition, config);
			report.rows.push(queryReport.summary);
			report.rawIterations.push({
				level: queryDefinition.level,
				label: queryDefinition.label,
				query: queryDefinition.query,
				iterations: queryReport.iterations
			});
		}

		global.clearAdvancedSearch();
		global.__lastAdvancedSearchTypingPerformanceReport = report;
		printBenchmarkReport(report);
		return report;
	}

	// Loads this exact typing-benchmark script into a same-origin iframe.
	function loadScriptIntoFrame(frameWindow) {
		return new Promise((resolve, reject) => {
			const script = frameWindow.document.createElement('script');
			script.src = SCRIPT_SRC;
			script.async = false;
			script.onload = resolve;
			script.onerror = () => reject(new Error(`Failed to load typing benchmark from ${SCRIPT_SRC}.`));
			frameWindow.document.head.appendChild(script);
		});
	}

	// Runs the typing benchmark in a hidden iframe so the visible page is not disturbed.
	async function runIsolatedBenchmark(userConfig = {}) {
		const config = normalizeConfig(userConfig);
		const iframe = document.createElement('iframe');
		iframe.setAttribute('aria-hidden', 'true');
		iframe.style.position = 'fixed';
		iframe.style.width = '1280px';
		iframe.style.height = '720px';
		iframe.style.left = '-200vw';
		iframe.style.top = '0';
		iframe.style.opacity = '0';
		iframe.style.pointerEvents = 'none';
		iframe.src = config.appUrl;
		document.body.appendChild(iframe);

		try {
			await new Promise((resolve, reject) => {
				iframe.addEventListener('load', resolve, { once: true });
				iframe.addEventListener('error', () => reject(new Error('Failed to load hidden typing benchmark iframe.')), { once: true });
			});

			const frameWindow = iframe.contentWindow;
			await waitForAppReady(frameWindow, config.timeoutMs);
			await loadScriptIntoFrame(frameWindow);
			await frameWindow.__advancedSearchTypingPerf.waitForAppReady(frameWindow, config.timeoutMs);

				const report = await frameWindow.__advancedSearchTypingPerf.runBenchmarkInWindow(config);
				report.mode = 'isolated';
				report.context.runnerUrl = global.location.href;
				report.context.url = config.appUrl;
				global.__lastAdvancedSearchTypingPerformanceReport = report;
				return report;
		}
		finally {
			iframe.remove();
		}
	}

	const api = {
		version: VERSION,
		defaultConfig: DEFAULT_CONFIG,
		defaultQueries: DEFAULT_QUERIES.map(query => ({ ...query })),
		normalizeConfig,
		waitForAppReady,
		runBenchmarkInWindow,
		runIsolatedBenchmark,
		printBenchmarkReport
	};

	global.__advancedSearchTypingPerf = api;
	global.runAdvancedSearchTypingPerformanceTest = function runAdvancedSearchTypingPerformanceTest(userConfig = {}) {
		return api.runIsolatedBenchmark(userConfig);
	};
	global.runAdvancedSearchTypingPerformanceTestInPlace = function runAdvancedSearchTypingPerformanceTestInPlace(userConfig = {}) {
		return api.runBenchmarkInWindow(userConfig);
	};

	console.info('[advanced-search-typing-perf] Loaded. Run runAdvancedSearchTypingPerformanceTest() to benchmark real typing behavior in a hidden iframe.');
})(window);
