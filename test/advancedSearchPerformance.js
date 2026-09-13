(function bootstrapAdvancedSearchPerformance(global) {
	'use strict';

	if (global.__advancedSearchPerf?.version === '1.0.0') {
		return;
	}

	const BENCHMARK_VERSION = '1.0.0';
	const BENCHMARK_SCRIPT_SRC = document.currentScript?.src
		|| new URL('test/advancedSearchPerformance.js', global.location.href).toString();
	const DEFAULT_QUERIES = [
		"bst >= 500",
		"ability ~ ('huge power','feline prowess') and available",
		"move = 'u-turn' and spe >= 90",
		"location = 'route 2'",
		"location ~ 'route 2'",
		"originalpokemon ~ ('Carnivine','Eiscue','Farfetch')"
	];
	const DEFAULT_SCENARIOS = [
		{ name: 'table-view', locationBaseOrder: false, availableOnly: false },
		{ name: 'location-view', locationBaseOrder: true, availableOnly: false }
	];
	const DEFAULT_CONFIG = {
		queries: DEFAULT_QUERIES,
		scenarios: DEFAULT_SCENARIOS,
		warmupIterations: 2,
		measuredIterations: 5,
		includeLogicBenchmark: true,
		includeRenderBenchmark: true,
		timeoutMs: 30000
	};

	// Returns a bounded integer so benchmark config stays predictable.
	function clampInteger(value, minimum, maximum, fallback) {
		const numericValue = Number(value);
		if (!Number.isFinite(numericValue)) {
			return fallback;
		}

		return Math.min(maximum, Math.max(minimum, Math.floor(numericValue)));
	}

	// Normalizes the caller config into a fully-populated benchmark plan.
	function normalizeBenchmarkConfig(userConfig = {}) {
		const queries = Array.isArray(userConfig.queries) && userConfig.queries.length
			? userConfig.queries.map(query => String(query || '').trim()).filter(Boolean)
			: DEFAULT_CONFIG.queries.slice();
		const scenarios = Array.isArray(userConfig.scenarios) && userConfig.scenarios.length
			? userConfig.scenarios.map((scenario, index) => ({
				name: String(scenario?.name || `scenario-${index + 1}`),
				locationBaseOrder: scenario?.locationBaseOrder === true,
				availableOnly: scenario?.availableOnly === true
			}))
			: DEFAULT_CONFIG.scenarios.map(scenario => ({ ...scenario }));

		return {
			queries,
			scenarios,
			warmupIterations: clampInteger(userConfig.warmupIterations, 0, 25, DEFAULT_CONFIG.warmupIterations),
			measuredIterations: clampInteger(userConfig.measuredIterations, 1, 100, DEFAULT_CONFIG.measuredIterations),
			includeLogicBenchmark: userConfig.includeLogicBenchmark !== false,
			includeRenderBenchmark: userConfig.includeRenderBenchmark !== false,
			timeoutMs: clampInteger(userConfig.timeoutMs, 5000, 120000, DEFAULT_CONFIG.timeoutMs)
		};
	}

	// Lists the globals the benchmark expects from the RR Dex runtime.
	function getMissingPrerequisites(targetWindow = global) {
		const requiredNames = [
			'species',
			'saveData',
			'parseAdvancedSearchWithFallback',
			'evaluateAdvancedSearch',
			'refreshSpeciesResults',
			'getFilteredSpeciesResults',
			'setSearchMode',
			'setLocationBaseOrderEnabled',
			'setAvailableOnlyEnabled',
			'clearAdvancedSearchPredicateState',
			'hideAdvancedSearchAutocomplete'
		];

		return requiredNames.filter(name => typeof targetWindow[name] === 'undefined');
	}

	// Waits until the app has loaded species data and the main UI is ready.
	async function waitForAppReady(targetWindow = global, timeoutMs = DEFAULT_CONFIG.timeoutMs) {
		const startedAt = Date.now();
		while (Date.now() - startedAt <= timeoutMs) {
			const main = targetWindow.document?.querySelector('main');
			const hasSpecies = !!targetWindow.species && Object.keys(targetWindow.species).length > 0;
			const missingPrerequisites = getMissingPrerequisites(targetWindow);
			if (hasSpecies && main && !main.classList.contains('hide') && missingPrerequisites.length === 0) {
				return;
			}

			await new Promise(resolve => setTimeout(resolve, 50));
		}

		throw new Error(`Advanced search benchmark timed out after ${timeoutMs} ms while waiting for the app to load.`);
	}

	// Waits for two animation frames so DOM work and paint have both settled.
	function waitForNextPaint(targetWindow = global) {
		return new Promise(resolve => {
			targetWindow.requestAnimationFrame(() => {
				targetWindow.requestAnimationFrame(resolve);
			});
		});
	}

	// Builds one percentile from a numeric sample list using nearest-rank selection.
	function getPercentile(samples, percentile) {
		if (!samples.length) {
			return 0;
		}

		const sorted = [...samples].sort((left, right) => left - right);
		const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil((percentile / 100) * sorted.length) - 1));
		return sorted[index];
	}

	// Rounds one numeric metric for cleaner console output and JSON reports.
	function formatMetric(value) {
		return Number(value.toFixed(3));
	}

	// Summarizes a sample list into the most useful benchmark statistics.
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

	// Returns the current benchmark context so reports capture save/randomizer state.
	function buildBenchmarkContext(targetWindow = global) {
		const speciesCount = Object.keys(targetWindow.species || {}).length;
		const currentSave = targetWindow.saveData;
		return {
			url: targetWindow.location.href,
			speciesCount,
			saveLoaded: !!currentSave,
			randomizedSpecies: currentSave?.random?.normalSpecies === true,
			randomizedAbilities: currentSave?.random?.abilities === true,
			randomizedLearnset: currentSave?.random?.learnset === true,
			hardmode: currentSave?.hardmode === true,
			restricted: currentSave?.restricted === true
		};
	}

	// Builds one parsed predicate exactly the same way advanced search does at runtime.
	function buildPredicateFromQuery(query) {
		const ast = parseAdvancedSearchWithFallback(query);
		const predicate = mon => evaluateAdvancedSearch(ast, mon);
		const firstSpecies = Object.values(species || {})[0];
		if (firstSpecies) {
			predicate(firstSpecies);
		}

		return { ast, predicate };
	}

	// Measures parsing and filtering work without any UI rendering.
	function measureAdvancedSearchLogic(query) {
		const allSpecies = Object.values(species || {});
		const parseStartedAt = performance.now();
		const { ast, predicate } = buildPredicateFromQuery(query);
		const parseMs = performance.now() - parseStartedAt;

		const filterStartedAt = performance.now();
		const matchingSpecies = allSpecies.filter(predicate);
		const filterMs = performance.now() - filterStartedAt;

		return {
			ast,
			parseMs,
			filterMs,
			resultCount: matchingSpecies.length
		};
	}

	// Applies one scenario toggle set without persisting it back to localStorage.
	function applyBenchmarkScenario(scenario) {
		setSearchMode('advanced', false);
		setLocationBaseOrderEnabled(scenario.locationBaseOrder === true, false);
		setAvailableOnlyEnabled(scenario.availableOnly === true, false);
		if (typeof setAdvancedSearchValueSuggestionsDisabled === 'function') {
			setAdvancedSearchValueSuggestionsDisabled(true, false);
		}
	}

	// Applies one query through the real advanced-search render path without writing history.
	function applyBenchmarkQuery(query) {
		const input = document.getElementById('advancedSearchInput');
		if (!input) {
			throw new Error('Advanced search input was not found.');
		}

		const { ast, predicate } = buildPredicateFromQuery(query);
		input.value = query;
		advancedSearchAst = ast;
		advancedSearchPredicate = predicate;
		advancedSearchQuery = query;
		advancedSearchLastInputValue = input.value;
		hideAdvancedSearchAutocomplete();
		refreshSpeciesResults();

		return getFilteredSpeciesResults().length;
	}

	// Captures the current UI result counts after one benchmarked render finishes.
	function captureRenderedState() {
		return {
			resultCount: getFilteredSpeciesResults().length,
			locationGroupCount: document.querySelectorAll('.locationSpeciesGroupTitle').length,
			tableRowCount: document.querySelectorAll('.speciesRow').length,
			statusText: document.getElementById('advancedSearchStatus')?.textContent?.trim() || ''
		};
	}

	// Measures the full apply-and-render path for one query and one scenario.
	async function measureAdvancedSearchRender(query, scenario) {
		applyBenchmarkScenario(scenario);
		await waitForNextPaint();

		const renderStartedAt = performance.now();
		const resultCount = applyBenchmarkQuery(query);
		await waitForNextPaint();
		const renderMs = performance.now() - renderStartedAt;
		const renderedState = captureRenderedState();

		return {
			renderMs,
			resultCount,
			locationGroupCount: renderedState.locationGroupCount,
			tableRowCount: renderedState.tableRowCount,
			statusText: renderedState.statusText
		};
	}

	// Converts raw samples for one query into a compact report row.
	function buildBenchmarkRow(query, scenario, parseSamples, filterSamples, renderSamples, lastSnapshot) {
		const parseSummary = summarizeSamples(parseSamples);
		const filterSummary = summarizeSamples(filterSamples);
		const renderSummary = summarizeSamples(renderSamples);

		return {
			scenario: scenario.name,
			query,
			parseAvgMs: parseSummary.avgMs,
			parseP95Ms: parseSummary.p95Ms,
			filterAvgMs: filterSummary.avgMs,
			filterP95Ms: filterSummary.p95Ms,
			renderAvgMs: renderSummary.avgMs,
			renderP95Ms: renderSummary.p95Ms,
			logicAvgMs: formatMetric(parseSummary.avgMs + filterSummary.avgMs),
			resultCount: lastSnapshot?.resultCount || 0,
			locationGroupCount: lastSnapshot?.locationGroupCount || 0,
			tableRowCount: lastSnapshot?.tableRowCount || 0
		};
	}

	// Runs the configured query suite for one scenario and returns all query rows.
	async function runScenarioBenchmark(config, scenario) {
		const rows = [];
		applyBenchmarkScenario(scenario);
		await waitForNextPaint();

		for (const query of config.queries) {
			const parseSamples = [];
			const filterSamples = [];
			const renderSamples = [];
			let lastSnapshot = null;

			for (let iteration = 0; iteration < config.warmupIterations; iteration += 1) {
				if (config.includeLogicBenchmark) {
					measureAdvancedSearchLogic(query);
				}
				if (config.includeRenderBenchmark) {
					await measureAdvancedSearchRender(query, scenario);
				}
			}

			for (let iteration = 0; iteration < config.measuredIterations; iteration += 1) {
				if (config.includeLogicBenchmark) {
					const logicResult = measureAdvancedSearchLogic(query);
					parseSamples.push(logicResult.parseMs);
					filterSamples.push(logicResult.filterMs);
					lastSnapshot = {
						...(lastSnapshot || {}),
						resultCount: logicResult.resultCount
					};
				}

				if (config.includeRenderBenchmark) {
					const renderResult = await measureAdvancedSearchRender(query, scenario);
					renderSamples.push(renderResult.renderMs);
					lastSnapshot = renderResult;
				}
			}

			rows.push(buildBenchmarkRow(query, scenario, parseSamples, filterSamples, renderSamples, lastSnapshot));
		}

		return rows;
	}

	// Builds one scenario-level summary row from all query results in that scenario.
	function summarizeScenarioRows(rows) {
		const renderValues = rows.map(row => row.renderAvgMs);
		const logicValues = rows.map(row => row.logicAvgMs);
		return {
			scenario: rows[0]?.scenario || 'unknown',
			queryCount: rows.length,
			avgRenderMs: summarizeSamples(renderValues).avgMs,
			avgLogicMs: summarizeSamples(logicValues).avgMs
		};
	}

	// Prints the benchmark report in a console-friendly table layout.
	function printBenchmarkReport(report) {
		console.groupCollapsed(`[advanced-search-perf] ${report.rows.length} query rows across ${report.scenarioSummaries.length} scenarios`);
		console.table(report.rows);
		console.table(report.scenarioSummaries);
		console.log(report);
		console.groupEnd();
	}

	// Runs the benchmark inside the current window context and returns the report object.
	async function runBenchmarkInWindow(userConfig = {}) {
		await waitForAppReady(global, userConfig.timeoutMs || DEFAULT_CONFIG.timeoutMs);
		const config = normalizeBenchmarkConfig(userConfig);
		const report = {
			version: BENCHMARK_VERSION,
			generatedAt: new Date().toISOString(),
			mode: 'in-place',
			context: buildBenchmarkContext(global),
			config,
			rows: [],
			scenarioSummaries: []
		};

		for (const scenario of config.scenarios) {
			const rows = await runScenarioBenchmark(config, scenario);
			report.rows.push(...rows);
			report.scenarioSummaries.push(summarizeScenarioRows(rows));
		}

		if (typeof clearAdvancedSearchPredicateState === 'function') {
			clearAdvancedSearchPredicateState();
		}
		if (typeof refreshSpeciesResults === 'function') {
			refreshSpeciesResults();
		}

		global.__lastAdvancedSearchPerformanceReport = report;
		printBenchmarkReport(report);
		return report;
	}

	// Injects the benchmark script into a same-origin iframe so it can access page globals there.
	function loadBenchmarkScriptIntoFrame(frameWindow) {
		return new Promise((resolve, reject) => {
			const script = frameWindow.document.createElement('script');
			script.src = BENCHMARK_SCRIPT_SRC;
			script.async = false;
			script.onload = resolve;
			script.onerror = () => reject(new Error(`Failed to load benchmark script from ${BENCHMARK_SCRIPT_SRC}.`));
			frameWindow.document.head.appendChild(script);
		});
	}

	// Creates one hidden iframe that runs the benchmark without disturbing the visible page.
	async function runIsolatedBenchmark(userConfig = {}) {
		const config = normalizeBenchmarkConfig(userConfig);
		const iframe = document.createElement('iframe');
		iframe.setAttribute('aria-hidden', 'true');
		iframe.style.position = 'fixed';
		iframe.style.width = '1280px';
		iframe.style.height = '720px';
		iframe.style.left = '-200vw';
		iframe.style.top = '0';
		iframe.style.opacity = '0';
		iframe.style.pointerEvents = 'none';
		iframe.src = new URL('index.html', global.location.href).toString();
		document.body.appendChild(iframe);

		try {
			await new Promise((resolve, reject) => {
				iframe.addEventListener('load', resolve, { once: true });
				iframe.addEventListener('error', () => reject(new Error('Failed to load isolated benchmark iframe.')), { once: true });
			});

			const frameWindow = iframe.contentWindow;
			await waitForAppReady(frameWindow, config.timeoutMs);
			await loadBenchmarkScriptIntoFrame(frameWindow);
			await frameWindow.__advancedSearchPerf.waitForAppReady(frameWindow, config.timeoutMs);

			const report = await frameWindow.__advancedSearchPerf.runBenchmarkInWindow(config);
			report.mode = 'isolated';
			report.context.url = global.location.href;
			global.__lastAdvancedSearchPerformanceReport = report;
			return report;
		}
		finally {
			iframe.remove();
		}
	}

	const api = {
		version: BENCHMARK_VERSION,
		defaultConfig: DEFAULT_CONFIG,
		defaultQueries: DEFAULT_QUERIES.slice(),
		defaultScenarios: DEFAULT_SCENARIOS.map(scenario => ({ ...scenario })),
		normalizeBenchmarkConfig,
		waitForAppReady,
		runBenchmarkInWindow,
		runIsolatedBenchmark,
		printBenchmarkReport
	};

	global.__advancedSearchPerf = api;
	global.runAdvancedSearchPerformanceBenchmark = function runAdvancedSearchPerformanceBenchmark(userConfig = {}) {
		return api.runIsolatedBenchmark(userConfig);
	};
	global.runAdvancedSearchPerformanceBenchmarkInPlace = function runAdvancedSearchPerformanceBenchmarkInPlace(userConfig = {}) {
		return api.runBenchmarkInWindow(userConfig);
	};

	console.info('[advanced-search-perf] Loaded. Run runAdvancedSearchPerformanceBenchmark() to benchmark advanced search in an isolated iframe.');
})(window);
