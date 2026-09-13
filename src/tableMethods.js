function cmp(func, factor=1) {
    return (a, b) => func(a) == func(b) ? 0 : func(a) < func(b) ? -1 * factor : 1 * factor;
}

function cmpAll(cmps) {
	return (a, b) => {
		let result = 0;
		for (const func of cmps)
			if ((result = func(a, b)))
				return result;
		return 0;
	}
}

function getLevelUpMoveRowMove(row) {
	return row?.move ?? row?.[0] ?? {name: '', type: 0, split: 0, power: 0, accuracy: 0};
}

function getLevelUpMoveRowLevel(row) {
	return row?.level ?? row?.[1] ?? 0;
}

function setupTables() {
	for (const name of [
		//'speciesLearnsetPrevoExclusiveTable',
		'speciesLearnsetLevelUpTable'
	]) {
		setupTable(name, displayLevelUpMovesRow, Object.keys(moves).length,
			{
				'Lvl': cmp(x => getLevelUpMoveRowLevel(x)),
				'Name': cmp(x => getLevelUpMoveRowMove(x).name),
				'Type': cmp(x => types[getLevelUpMoveRowMove(x).type].name),
				'Category': cmp(x => getLevelUpMoveRowMove(x).split),
				'Power': cmp(x => getLevelUpMoveRowMove(x).power, -1),
				'Acc': cmp(x => getLevelUpMoveRowMove(x).accuracy, -1),
				'Description': null
			},
			[cmp(x => getLevelUpMoveRowLevel(x)), cmp(x => getLevelUpMoveRowMove(x).name)]
		);
	}
	
	for (const name of [
		'speciesLearnsetTMHMTable',
		'speciesLearnsetTutorTable',
		'speciesLearnsetEggMovesTable',
		//'speciesLearnsetEventTable'
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

	setupTable('speciesTable', displaySpeciesRow, 50,
		{
			'': null,
			'#': cmp(x => x.dexID),
			'Sprite': null,
			'Name': cmp(x => x.name),
			'Type': null,
			'Abilities': cmp(x => getAbilityName(x.abilities[1], x.ID)),
			'HP': cmp(x => x.stats[0], -1),
			'Atk': cmp(x => x.stats[1], -1),
			'Def': cmp(x => x.stats[2], -1),
			'SpA': cmp(x => x.stats[4], -1),
			'SpD': cmp(x => x.stats[5], -1),
			'Spe': cmp(x => x.stats[3], -1),
			'BST': cmp(x => x.stats.reduce((total, y) => total += y, 0), -1)
		},
		[cmp(x => x.dexID), cmp(x => x.order)]
	);
	
	renderSpeciesResults(Object.values(species));
	
	window.onscroll = function(ev) {
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
			loadChunk(trackers['speciesTable'], false);
		}
	};
}

function setupTable(name, displayMethod, maxRows, columns, tieBreaker) {
	let wrapper = document.getElementById(name);
	if (!wrapper) {
		console.log(`Table ${name} could not be created, wrapper missing.`);
		return;
	}
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	table.className = 'align-middle table table-striped table-dark table-hover';
	table.append(thead);
	table.append(tbody);
	wrapper.append(table);
	
	trackers[name] = {};
	let tracker = trackers[name];
	tracker.body = tbody;
	tracker.displayMethod = displayMethod;
	tracker.maxRows = maxRows;
	
	let sortControls = document.createElement('tr');
	sortControls.className = 'sortControls';
	thead.append(sortControls);
	
	for (const [label, compare] of Object.entries(columns)) {
		let sortOption = document.createElement('th');
		sortControls.append(sortOption);
		sortOption.innerText = label;
		sortOption.className = 'sortLocked';
		if (compare === null)
			continue;
		sortOption.className = 'sortOption';
		sortOption.onclick = function () {
			sortTracker(this, trackers[name], cmpAll([compare].concat(tieBreaker)));
		};
	}
	tracker.sortControls = sortControls.getElementsByClassName('sortOption');
}

function populateTable(name, data) {
	let tracker = trackers[name];
	if (!tracker) {
		console.log(`Tracker ${name} does not exist; cannot populate.`);
		return;
	}
	
	tracker.data = data;
	for (const control of tracker.sortControls)
		control.className = 'sortOption';
	scrollIntoView = false;
	tracker.sortControls[0].click();
	scrollIntoView = true;
}

function renderSpeciesResults(data) {
	const groupedWrapper = document.getElementById('speciesLocationGroups');
	const tableWrapper = document.getElementById('speciesTable');
	const useLocationBaseOrder = typeof isLocationBaseOrderEnabled === 'function' && isLocationBaseOrderEnabled();
	const matchedLocationNames = useLocationBaseOrder && typeof getActiveLocationRenderNames === 'function'
		? getActiveLocationRenderNames()
		: null;

	if (useLocationBaseOrder && typeof renderSpeciesLocationGroups === 'function') {
		tableWrapper?.classList.add('hide');
		groupedWrapper?.classList.remove('hide');
		renderSpeciesLocationGroups(data, matchedLocationNames);
		return;
	}

	groupedWrapper?.classList.add('hide');
	tableWrapper?.classList.remove('hide');
	populateTable('speciesTable', data);
}

function sortTracker(selectedOption, tracker, compare) {
	let prevClass = selectedOption.className;
	
	for (const option of tracker.sortControls)
		option.className = 'sortOption';
	
	selectedOption.className = 'sortOption active sortAscending';
	
	if (prevClass === 'sortOption') {
		tracker.data.sort(compare);
	}
	else {
		if (prevClass === 'sortOption active sortAscending') {
			selectedOption.className = 'sortOption active sortDescending';
		}
	
		tracker.data.reverse();
	}
	
	loadChunk(tracker, true);
}
