function getTeamPageRandomizationFlags() {
	const flags = [];
	if (!saveData) {
		return flags;
	}

	if (saveData.random?.abilities) {
		flags.push("Random Abilities");
	}

	if (saveData.random?.learnset) {
		flags.push("Random Learnset");
	}

	if (saveData.hardmode) {
		flags.push("Hardcore");
	} else if (saveData.restricted) {
		flags.push("Restricted");
	}

	if (saveData.random?.normalSpecies) {
		flags.push("Species Randomizer");
	}

	return flags;
}

function buildTeamPageCurrentMoves(entry, mon) {
	const wrapper = document.createElement('div');
	wrapper.className = 'teamCurrentMoves';

	const currentMoves = (entry.moveIds || [])
		.map(moveId => getMove(moveId, mon.ID))
		.filter(Boolean);

	if (currentMoves.length === 0) {
		wrapper.append(buildWrapper('span', 'teamCurrentMove', 'No current moves'));
		return wrapper;
	}

	for (const move of currentMoves) {
		wrapper.append(buildWrapper('span', 'teamCurrentMove', move.name));
	}

	return wrapper;
}

function displayTeamMemberRow(tracker, entry) {
	const mon = species?.[entry.speciesId];
	if (!mon) {
		return;
	}

	let currentRow = document.createElement('tr');
	currentRow.className = 'speciesRow teamSpeciesRow';
	currentRow.onclick = function() {
		displaySpeciesPanel(mon, entry);
	};
	tracker.body.appendChild(currentRow);

	buildBackgroundColor(currentRow, mon);

	const nameWrapper = buildWrapper('td', 'speciesNameWrapper');
	nameWrapper.append(buildWrapper('div', 'teamSpeciesName', mon.key));
	if (entry.nickname && entry.nickname !== mon.key) {
		nameWrapper.append(buildWrapper('div', 'teamSpeciesNickname', `"${entry.nickname}"`));
	}
	
	currentRow.append(
		buildWrapper('td', 'speciesDexIDWrapper', entry.slot),
		buildWrapperSprite('td', 'speciesSprite', getSprite(mon.ID)),
		nameWrapper,
		buildWrapperTypes('td', 'speciesTypes', types[mon.type[0]], types[mon.type[1]]),
		buildWrapperAbilities('td', 'speciesAbilities', mon.abilities, mon.ID),
		buildWrapper('td', 'speciesStat', mon.stats[0]),
		buildWrapper('td', 'speciesStat', mon.stats[1]),
		buildWrapper('td', 'speciesStat', mon.stats[2]),
		buildWrapper('td', 'speciesStat', mon.stats[4]),
		buildWrapper('td', 'speciesStat', mon.stats[5]),
		buildWrapper('td', 'speciesStat', mon.stats[3]),
		buildWrapper('td', 'speciesStat', mon.stats.reduce((total, value) => total + value, 0)),
		buildWrapperCurrentMoves('td', 'teamCurrentMovesCell', entry, mon)
	);
}

function buildWrapperCurrentMoves(tag, className, entry, mon) {
	const wrapper = buildWrapper(tag, className + 'Wrapper');
	wrapper.append(buildTeamPageCurrentMoves(entry, mon));
	return wrapper;
}

function renderTeamPage() {
	const summary = document.getElementById('teamPageSummary');
	const emptyState = document.getElementById('teamPageEmptyState');
	const table = document.getElementById('teamTable');
	if (!summary || !emptyState || !table || !trackers['teamTable']) {
		return;
	}

	if (!species || !saveData || !Array.isArray(saveData.party) || saveData.party.length === 0) {
		summary.textContent = 'Upload a Radical Red save file to view your active team with your save randomizer seed applied.';
		emptyState.classList.remove('hide');
		table.classList.add('hide');
		populateTable('teamTable', []);
		return;
	}

	const teamEntries = saveData.party
		.map((entry, index) => ({
			...entry,
			slot: index + 1,
		}))
		.filter(entry => !!species?.[entry.speciesId]);

	if (teamEntries.length === 0) {
		summary.textContent = 'No readable team members were found in this save.';
		emptyState.classList.remove('hide');
		table.classList.add('hide');
		populateTable('teamTable', []);
		return;
	}

	const flags = getTeamPageRandomizationFlags();
	summary.textContent = flags.length > 0
		? `Showing ${teamEntries.length} current team Pokemon with ${flags.join(' / ')} applied. Click a row for full details.`
		: `Showing ${teamEntries.length} current team Pokemon from your save. Click a row for full details.`;
	emptyState.classList.add('hide');
	table.classList.remove('hide');
	populateTable('teamTable', teamEntries);
}

function setupTeamPageTables() {
	setupTable('teamTable', displayTeamMemberRow, 6,
		{
			'#': cmp(x => x.slot),
			'Sprite': null,
			'Name': cmp(x => species[x.speciesId]?.name || ''),
			'Type': null,
			'Abilities': cmp(x => getAbilityName(species[x.speciesId]?.abilities[1], x.speciesId) || ''),
			'HP': cmp(x => species[x.speciesId]?.stats[0] || 0, -1),
			'Atk': cmp(x => species[x.speciesId]?.stats[1] || 0, -1),
			'Def': cmp(x => species[x.speciesId]?.stats[2] || 0, -1),
			'SpA': cmp(x => species[x.speciesId]?.stats[4] || 0, -1),
			'SpD': cmp(x => species[x.speciesId]?.stats[5] || 0, -1),
			'Spe': cmp(x => species[x.speciesId]?.stats[3] || 0, -1),
			'BST': cmp(x => (species[x.speciesId]?.stats || []).reduce((total, value) => total + value, 0), -1),
			'Current Moves': null
		},
		[cmp(x => x.slot)]
	);

	for (const name of [
		'speciesLearnsetLevelUpTable'
	]) {
		setupTable(name, displayLevelUpMovesRow, Object.keys(moves).length,
			{
				'Lvl': cmp(x => x[1]),
				'Name': cmp(x => x[0].name),
				'Type': cmp(x => types[x[0].type].name),
				'Category': cmp(x => x[0].split),
				'Power': cmp(x => x[0].power, -1),
				'Acc': cmp(x => x[0].accuracy, -1),
				'Description': null
			},
			[cmp(x => x[1]), cmp(x => x[0].name)]
		);
	}

	for (const name of [
		'speciesLearnsetPrevoExclusiveTable',
		'speciesLearnsetTMHMTable',
		'speciesLearnsetTutorTable',
		'speciesLearnsetEggMovesTable',
		'speciesLearnsetEventTable'
	]) {
		setupTable(name, displayMovesRow, Object.keys(moves).length,
			{
				'Name': cmp(x => x.name),
				'Type': cmp(x => types[x.type].name),
				'Category': cmp(x => x.split),
				'Power': cmp(x => x.power, -1),
				'Acc': cmp(x => x.accuracy, -1),
				'Description': null
			},
			cmp(x => x.name)
		);
	}
}

async function fetchTeamPageData() {
	let request = new Request(`data.js`);
	let response = null;
	if (typeof caches !== "undefined") {
		const cache = await caches.open(version);
		response = await cache.match(request);
		if (!response) {
			response = await fetch(request);
			await cache.put(request, response);
		}
		response = await cache.match(request);
	} else {
		response = await fetch(request);
	}

	let data = await response.text();
	data = new Function("return " + data + ";")();

	species = data.species;
	moves = data.moves;
	abilities = data.abilities;
	items = data.items;
	areas = data.areas;
	tmMoves = data.tmMoves;
	tutorMoves = data.tutorMoves;
	trainers = data.trainers;
	natures = data.natures;
	eggGroups = data.eggGroups;
	types = data.types;
	splits = data.splits;
	evolutions = data.evolutions;
	scaledLevels = data.scaledLevels;
	caps = data.caps;
	sprites = data.sprites;
	await inlineMissingSpeciesSprites();

	buildHardcoreState();
	setupTeamPageTables();
	renderCurrentSavePokemon();
	renderTeamPage();
	document.getElementById('loadingScreen').className = 'hide';
	document.querySelector('main').className = '';
}

function onSaveDataProcessed() {
	renderTeamPage();
}

fetchTeamPageData();
