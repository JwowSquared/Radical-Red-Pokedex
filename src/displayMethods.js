function displayHelp() {
	$('#helpModal').modal('show');
}

function displaySpeciesRow(tracker, mon) {
	let currentRow = document.createElement('tr');
	currentRow.className = 'speciesRow';
	currentRow.onclick = function() {
		displaySpeciesPanel(mon);
	};
	tracker.body.appendChild(currentRow);
	
	buildBackgroundColor(currentRow, mon);
	
	currentRow.append(
		buildWrapperSpeciesFavoriteToggle('td', mon),
		buildWrapperSpeciesDexID('td', mon),
		buildWrapperSprite('td', 'speciesSprite', getSprite(mon.ID)),
		buildWrapper('td', 'speciesNameWrapper', mon.key),
		buildWrapperTypes('td', 'speciesTypes', types[mon.type[0]], types[mon.type[1]]),
		buildWrapperAbilities('td', 'speciesAbilities', mon.abilities, mon.ID),
		buildWrapperStat('td', 'speciesStat', 'HP', mon.stats[0]),
		buildWrapperStat('td', 'speciesStat', 'Atk', mon.stats[1]),
		buildWrapperStat('td', 'speciesStat', 'Def', mon.stats[2]),
		buildWrapperStat('td', 'speciesStat', 'SpA', mon.stats[4]),
		buildWrapperStat('td', 'speciesStat', 'SpD', mon.stats[5]),
		buildWrapperStat('td', 'speciesStat', 'Spe', mon.stats[3]),
		buildWrapperStat('td', 'speciesStat', 'BST', mon.stats.reduce((total, y) => total += y, 0))
	);
}

function displayLevelUpMovesRow(tracker, movePair) {
	let move = movePair?.move ?? movePair?.[0] ?? movePair;
	let level = movePair?.level ?? movePair?.[1];
	let currentRow = document.createElement('tr');
	currentRow.className = 'movesRow';
	tracker.body.appendChild(currentRow);
	
	currentRow.append(
		buildWrapper('td', 'moveLevelWrapper', level),
		buildWrapperMoveName('td', 'moveName', move),
		buildWrapperTypes('td', 'moveType', types[move.type]),
		buildWrapperSprite('td', 'moveSplit', getSprite(splits[move.split])),
		buildWrapper('td', 'movePowerWrapper', move.power),
		buildWrapper('td', 'moveAccuracyWrapper', move.accuracy),
		buildWrapper('td', 'moveDescriptionWrapper', move.description)
	);
}

function displayMovesRow(tracker, move) {
	move = move.move ?? move;
	let currentRow = document.createElement('tr');
	currentRow.className = 'movesRow';
	tracker.body.appendChild(currentRow);
	
	currentRow.append(
		buildWrapperMoveName('td', 'moveName', move),
		buildWrapperTypes('td', 'moveType', types[move.type]),
		buildWrapperSprite('td', 'moveSplit', getSprite(splits[move.split])),
		buildWrapper('td', 'movePowerWrapper', move.power),
		buildWrapper('td', 'moveAccuracyWrapper', move.accuracy),
		buildWrapper('td', 'moveDescriptionWrapper', move.description)
	);
}

function displaySpeciesPanel(mon, saveEntry = null) {
	let infoDisplay = document.getElementById('speciesPanelInfoDisplay');
	let speciesModalBody = document.querySelector('#speciesModal .modal-body');
	const filterMoveEntries = entries => entries?.filter(entry => entry !== undefined) || [];
	currentSpeciesPanelState = { mon, saveEntry };
	if (speciesModalBody) {
		speciesModalBody.querySelector('.speciesModalFavoritesToggle')?.remove();
		if (typeof createFavoritesToggle === 'function') {
			const modalToggle = createFavoritesToggle(mon, { className: 'speciesModalFavoritesToggle' });
			const closeButton = speciesModalBody.querySelector('.close');
			if (closeButton?.nextSibling) {
				speciesModalBody.insertBefore(modalToggle, closeButton.nextSibling);
			}
			else {
				speciesModalBody.append(modalToggle);
			}
		}
	}
	const infoChildren = [];
	let tables = [
		['speciesLearnsetPrevoExclusiveTable', filterMoveEntries(mon.prevoMoves?.map(x => buildSpeciesPanelMoveEntry(mon, x)))],
		['speciesLearnsetLevelUpTable', filterMoveEntries(mon.levelupMoves?.map(x => buildSpeciesPanelMoveEntry(mon, x[0], x[1])))],
		['speciesLearnsetTMHMTable', filterMoveEntries(mon.tmMoves?.map(x => buildSpeciesPanelMoveEntry(mon, tmMoves[x], null, true)))],
		['speciesLearnsetTutorTable', filterMoveEntries(mon.tutorMoves?.map(x => buildSpeciesPanelMoveEntry(mon, tutorMoves[x], null, true)))],
		['speciesLearnsetEggMovesTable', filterMoveEntries(mon.eggMoves?.map(x => buildSpeciesPanelMoveEntry(mon, x, null, true)))],
		['speciesLearnsetEventTable', filterMoveEntries(mon.eventMoves?.map(x => buildSpeciesPanelMoveEntry(mon, x, null, true)))],
	]
	
	infoDisplay.innerText = '';
	
	infoChildren.push(
		buildWrapperSprite('div', 'infoSprite', getSprite(mon.ID)),
		buildWrapper('div', 'infoNameName', mon.key),
		buildWrapper('div', 'infoDexIDWrapper',  '#' + mon.dexID),
		buildWrapperTypes('div', 'infoTypes', types[mon.type[0]], types[mon.type[1]]),
		buildWrapperAbilitiesFull('div', 'infoAbilities', mon.abilities, mon.ID)
	);
	infoDisplay.append(...infoChildren);
	
	let statWrapper = buildWrapper('div', 'infoStats');
	statWrapper.append(
		buildWrapperStatFull('div', 'infoStat', 'HP', mon.stats[0]),
		buildWrapperStatFull('div', 'infoStat', 'Atk', mon.stats[1]),
		buildWrapperStatFull('div', 'infoStat', 'Def', mon.stats[2]),
		buildWrapperStatFull('div', 'infoStat', 'SpA', mon.stats[4]),
		buildWrapperStatFull('div', 'infoStat', 'SpD', mon.stats[5]),
		buildWrapperStatFull('div', 'infoStat', 'Spe', mon.stats[3]),
		buildWrapperStat('div', 'infoStat', 'BST', mon.stats.reduce((total, y) => total += y, 0))
	);
	
	infoDisplay.append(
		statWrapper,
		buildWrapperCap('div', 'infoCap', mon.ID),
		buildWrapperCurrentMovesDetail('div', 'infoCurrentMoves', mon, saveEntry),
		buildWrapperChangelog('div', 'infoChangelog', mon),
		buildWrapperFamilyTree('div', 'infoFamilyTree', mon),
		buildWrapperCoverageDefensive('div', 'infoCoverage', mon.type[0], mon.type[1]),
		buildWrapperCoverageOffensive('div', 'infoCoverage', mon.type[0], mon.type[1]),
		buildWrapperHardcoreSummary('div', 'infoHardcore', mon),
		buildWrapperHeldItems('div', 'infoItems', mon.items),
		buildWrapperOriginalSpeciesDetail('div', 'infoOriginalSpecies', mon),
		//buildWrapperEggGroups('div', 'infoEggGroups', mon.eggGroup),
	);

	for (const [ID, data] of tables) {
		let table = document.getElementById(ID);
		table.className = 'tableWrapper';
		if (data.length > 0) {
			table.classList.remove('hide');
			populateTable(ID, data);
		}
		else {
			table.classList.add('hide');
		}
	}

	$('#speciesModal').modal('show');
}

// Rebuilds the currently open species modal after appearance settings change.
function rerenderCurrentSpeciesPanel() {
	const speciesModal = document.getElementById('speciesModal');
	if (!speciesModal?.classList.contains('show') || !currentSpeciesPanelState?.mon) {
		return;
	}

	displaySpeciesPanel(currentSpeciesPanelState.mon, currentSpeciesPanelState.saveEntry || null);
}

function buildWrapperCurrentMovesDetail(tag, className, mon, saveEntry = null) {
	let moveIds = saveEntry?.moveIds || [];
	if (!moveIds.length) {
		return buildWrapper(tag, className + 'Wrapper');
	}

	let wrapper = buildWrapper(tag, className + 'Wrapper');
	wrapper.append(buildWrapper('div', 'infoCurrentMovesLabel', 'Current Moves'));

	let moveList = buildWrapper('div', 'infoCurrentMovesList');
	for (const moveId of moveIds) {
		const move = moves?.[moveId];
		if (!move) {
			continue;
		}
		moveList.append(buildWrapperMoveName('div', 'infoCurrentMove', move));
	}

	if (!moveList.childElementCount) {
		return buildWrapper(tag, className + 'Wrapper');
	}

	wrapper.append(moveList);
	return wrapper;
}

function buildWrapper(tag, className, text=null) {
	let wrapper = document.createElement(tag);
	wrapper.className = className;
	if (text)
		wrapper.textContent = text;
	if (text === 0)
		wrapper.textContent = '-';
	
	return wrapper;
}

function buildWrapperSpeciesFavoriteToggle(tag, mon) {
	let wrapper = buildWrapper(tag, 'speciesFavoriteToggleWrapper');
	let toggle = typeof createFavoritesToggle === 'function'
		? createFavoritesToggle(mon)
		: buildWrapper('button', 'favoritesToggle');

	wrapper.append(toggle);
	return wrapper;
}

function buildWrapperSpeciesDexID(tag, mon) {
	let wrapper = buildWrapper(tag, 'speciesDexIDWrapper');
	wrapper.append(buildWrapper('span', 'speciesDexIDValue', mon.dexID));
	return wrapper;
}

function buildWrapperMoveName(tag, className, move) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	let nameWrapper = buildWrapper('div', className);
	if (move.hardcoreUnavailable)
		nameWrapper.classList.add('hardcoreUnavailableMoveName');
	nameWrapper.append(document.createTextNode(move.name));

	if (move.hardcoreUnavailable) {
		let marker = buildWrapper('span', 'hardcoreUnavailableMarker', '★');
		marker.title = 'Not available in Hardcore';
		nameWrapper.append(marker);
	}

	wrapper.append(nameWrapper);

	return wrapper;
}

function buildWrapperSprite(tag, className, src) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	let img = document.createElement('img');
	img.className = className;
	img.src = src;
	wrapper.append(img);
	
	return wrapper;
}

//function buildWrapperName(tag, className, mon) {
//	let wrapper = buildWrapper(tag, className + 'Wrapper');
//	
//	if (mon.family.variant)
//		wrapper.append(buildWrapper('div', className + 'Region', regions[mon.family.region].variant));
//	
//	wrapper.append(buildWrapper('div', className + 'Name', mon.name));
//
//	if (mon.family.form)
//		wrapper.append(buildWrapper('div', className + 'Form', mon.family.form));
//	
//	return wrapper;
//}

function buildWrapperTypes(tag, className, primary, secondary=null) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	let typeBlock = buildWrapper('div', 'typeWrapper', primary.name);
	typeBlock.style.backgroundColor = primary.color;
	wrapper.append(typeBlock);
	
	if (secondary) {
		typeBlock = buildWrapper('div', 'typeWrapper', secondary.name);
		typeBlock.style.backgroundColor = secondary.color;
		wrapper.append(typeBlock);
	}
	
	return wrapper;
}

function buildWrapperAbilities(tag, className, a, species) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	if ((name = getAbilityName(a[1], species)))
		wrapper.append(buildWrapper('div', className + 'Primary', name));
	
	if ((name = getAbilityName(a[2], species)))
		wrapper.append(buildWrapper('div', className + 'Secondary', name));
	
	if ((name = getAbilityName(a[0], species)))
		wrapper.append(buildWrapper('div', className + 'Hidden', name));
	
	return wrapper;
}

function buildWrapperAbilitiesFull(tag, className, a, species) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	let ability;
	if ((name = getAbilityName(a[1], species))) {
		ability = getMappedAbility(a[1], species);
		wrapper.append(buildWrapper('div', className + 'Primary', name + ' - ' + abilities[ability[0]].description));
	}

	if ((name = getAbilityName(a[2], species))) {
		ability = getMappedAbility(a[2], species);
		wrapper.append(buildWrapper('div', className + 'Secondary', name + ' - ' + abilities[ability[0]].description));
	}

	if ((name = getAbilityName(a[0], species))) {
		ability = getMappedAbility(a[0], species);
		wrapper.append(buildWrapper('div', className + 'Hidden', name + ' - ' + abilities[ability[0]].description));
	}

	return wrapper;
}

function buildWrapperStat(tag, className, label, value) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	wrapper.append(buildWrapper('div', className + 'Label', label));
	wrapper.append(buildWrapper('div', className + 'Value', value));
	
	return wrapper;
}

function buildWrapperStatFull(tag, className, label, value) {
	let wrapper = buildWrapperStat(tag, className, label, value);
	
	let rank = 6;
	if (value < 150)
		rank = 5;
	if (value < 120)
		rank = 4;
	if (value < 90)
		rank = 3;
	if (value < 60)
		rank = 2;
	if (value < 30)
		rank = 1;
	
	let bar = buildWrapper('div', 'infoStatBar rank' + rank);
	bar.style.width = `${(value / 255) * 300}px`;
	wrapper.append(bar);
	
	return wrapper;
}

function buildWrapperChangelog(tag, className, mon) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	if (!mon.changes)
		return wrapper;
	
	wrapper.append(buildWrapper('div', 'infoChangelogLabel', 'RR Changes'));
	
	if (mon.changes == 'new') {
		wrapper.append(buildWrapper('div', 'infoChangelogUnique', 'All New Pokemon!'));
		return wrapper;
	}
	
	if (mon.changes.type) {
		let typeWrapper = buildWrapper('div', 'infoChangelogTypesWrapper');
		typeWrapper.append(buildWrapperTypes('div', 'infoChangelogOldType', types[mon.changes.type[0]], types[mon.changes.type[1]]));
		typeWrapper.append(buildWrapper('div', className + 'ArrowWrapper', '→'));
		typeWrapper.append(buildWrapperTypes('div', 'infoChangelogNewType', types[mon.type[0]], types[mon.type[1]]));
		wrapper.append(typeWrapper);
	}
	
	if (mon.changes.abilities) {
		let abilityWrapper = buildWrapper('div', 'infoChangelogAbilityWrapper');
		for (const ability of [1, 2, 0]) {
			let oldAbility = mon.changes.abilities[ability];
			let newAbility = mon.abilities[ability];

			if (newAbility.equals(oldAbility))
				continue;
			if (typeof oldAbility !== 'string')
				oldAbility = getAbilityName(oldAbility, mon.ID, true);
			newAbility = getAbilityName(newAbility, mon.ID, true);
		
			if (oldAbility && newAbility)
				abilityWrapper.append(buildWrapper('div', 'infoChangelogAbility' + ability, oldAbility + ' → ' + newAbility));
			else if (newAbility)
				abilityWrapper.append(buildWrapper('div', 'infoChangelogAbility' + ability, 'None → ' + newAbility));
			else
				abilityWrapper.append(buildWrapper('div', 'infoChangelogAbility' + ability, oldAbility + ' → None'));
			}
		wrapper.append(abilityWrapper);
	}
	
	if (mon.changes.stats) {
		let statsWrapper = buildWrapper('div', className);
		
		for (const [idx, label] of Object.entries({HP:0, Atk:1, Def:2, SpA:4, SpD:5, Spe:3})) {
			if (mon.changes.stats[idx] === mon.stats[idx])
				continue;
			let statClass = mon.changes.stats[idx] < mon.stats[idx] ? 'infoChangelogBuff' : 'infoChangelogNerf';
			statsWrapper.append(buildWrapper('div', statClass, label + ' ' + mon.changes.stats[idx] + ' → ' + mon.stats[idx]));
		}
		wrapper.append(statsWrapper);
	}
	
	return wrapper;
}

function buildWrapperFamilyTree(tag, className, mon) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	wrapper.append(buildWrapper('div', 'infoTreeEvoLabel', 'Evolution Line'));
	let display = buildWrapper('div', 'infoEvolutionMethods');
	wrapper.append(familyTree(display, species[mon.ancestor]));
	wrapper.append(display);
	
	
	if (mon.order !== undefined) {
		let forms = Object.values(species).filter(x => x.dexID == mon.dexID).sort(cmp(x => x.order));
		wrapper.append(buildWrapper('div', 'infoTreeFormsLabel', 'Alternate Forms'));
		let formsWrapper = buildWrapper('div', 'infoFormsWrapper');
		for (const form of forms) {
			let spriteWrapper = buildWrapper('div', 'infoTreeSpriteWrapper');
			let img = document.createElement('img');
			img.src = getSprite(form.ID);
			img.className = 'infoTreeSprite';
			img.onclick = function () {
				displaySpeciesPanel(form);
			}
			spriteWrapper.append(img);
			formsWrapper.append(spriteWrapper);
		}
		wrapper.append(formsWrapper);
	}

	return wrapper;
}

function familyTree(display, mon, prevo=null, evo=null) {
	let wrapper = buildWrapper('div', 'infoTreeWrapper ' + mon.key);
	
	if (prevo) {
		wrapper.className += ' inner';
		let evoWrapper = buildWrapper('div', 'evoMethodWrapper');
		let arrow = buildWrapper('div', 'infoTreeArrow', `→`);
		
		let leftMon = prevo.key;
		let rightMon = mon.key;
		let description = eval(evolutions[evo[0]]);
		arrow.title = description;
		let method = buildWrapper('div', 'evoMethod');
		
		method.innerHTML = `<span>${leftMon}</span> → <span>${rightMon}</span> ${description}.`;
		display.append(method);
		
		evoWrapper.append(arrow);
		wrapper.append(evoWrapper);
	}
	else
		wrapper.className += ' outer';
	
	let spriteWrapper = buildWrapper('div', 'infoTreeSpriteWrapper');
	let img = document.createElement('img');
	img.src = getSprite(mon.ID);
	img.className = 'infoTreeSprite';
	img.onclick = function () {
		displaySpeciesPanel(mon);
	}
	spriteWrapper.append(img);
	wrapper.append(spriteWrapper);	
	if (mon.evolutions) {
		if (mon.evolutions.length === 1)
			wrapper.className += ' single';
		let branchWrapper = buildWrapper('div', 'infoTreeBranchWrapper');
		for (const evolution of mon.evolutions)
			branchWrapper.append(familyTree(display, species[evolution[2]], mon, evolution));
		wrapper.append(branchWrapper);
	}
	
	return wrapper;
}

function buildWrapperCoverageDefensive(tag, className, primary, secondary=undefined) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	let label = buildWrapper('div', 'coverageLabelWrapper', 'Weakness');
	let matchups = buildWrapper('div', 'coverageMatchupsWrapper');
	
	for (const type of Object.values(types)) {
		let matchup = 1;
		for (const speciesType of [primary, secondary]) {
			if (speciesType === undefined)
				continue;
			
			matchup *= getTypeMatchupMultiplier(type.ID, speciesType);
		}

		if (matchup === 1)
			continue;
		
		matchups.append(buildWrapperTypeMatchup(type, matchup));
	}
	
	wrapper.append(label, matchups);
	
	return wrapper;
}

// Converts one attacking-type-vs-defending-type chart entry into the multiplier shown in the UI.
function getTypeMatchupMultiplier(attackingType, defendingType) {
	switch (types[attackingType].matchup[defendingType]) {
		case 20: return 2;
		case  5: return 0.5;
		case  1: return 0;
		default: return 1;
	}
}

// Builds the offensive type-coverage row by showing the best STAB hit against each defending type.
function buildWrapperCoverageOffensive(tag, className, primary, secondary=undefined) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	if (getAppearanceSetting('pokemonOffensiveVisible', true) === false) {
		return wrapper;
	}

	let label = buildWrapper('div', 'coverageLabelWrapper', 'Offensive');
	let matchups = buildWrapper('div', 'coverageMatchupsWrapper');

	for (const type of Object.values(types)) {
		let matchup = getTypeMatchupMultiplier(primary, type.ID);

		if (secondary !== undefined) {
			matchup = Math.max(matchup, getTypeMatchupMultiplier(secondary, type.ID));
		}

		if (matchup === 1)
			continue;

		matchups.append(buildWrapperTypeMatchup(type, matchup));
	}

	wrapper.append(label, matchups);

	return wrapper;
}

function buildWrapperTypeMatchup(type, matchup) {
	let wrapper = buildWrapper('div', 'typeMatchupWrapper');
	
	wrapper.append(buildWrapperTypes('div', 'typeMatchupLabel', type));
	wrapper.append(buildWrapper('div', 'typeMatchupMultiplier x' + (matchup * 100), matchup + 'x'));
	
	return wrapper;
}

let speciesLocationIndexCache = null;
let randomizedSpeciesLocationCache = new Map();
let randomizedSpeciesOriginalCache = new Map();
let speciesLocationGroupCache = new Map();
const RANDOMIZER_LOCATION_FALLBACK_SPECIES_ID = 132;

function collectSpeciesIdsFromEncounterValue(value, speciesIds) {
	if (Array.isArray(value)) {
		const looksLikeEncounterTuple =
			value.length > 0 &&
			value.length <= 3 &&
			typeof value[0] === 'number' &&
			value[0] > 0 &&
			value[0] <= 1375 &&
			value.slice(1).every(level => typeof level === 'number' && level >= 0 && level <= 100);
		const looksLikeRaidTuple =
			value.length === 2 &&
			typeof value[0] === 'number' &&
			value[0] > 0 &&
			value[0] <= 1375 &&
			Array.isArray(value[1]);
		if (looksLikeEncounterTuple || looksLikeRaidTuple) {
			speciesIds.add(value[0]);
			return;
		}

		if (value.length > 0 && value.every(entry => typeof entry === 'number')) {
			for (const entry of value) {
				if (entry > 0 && entry <= 1375) {
					speciesIds.add(entry);
				}
			}
			return;
		}

		for (const entry of value) {
			collectSpeciesIdsFromEncounterValue(entry, speciesIds);
		}
		return;
	}

	if (value && typeof value === 'object') {
		for (const entry of Object.values(value)) {
			collectSpeciesIdsFromEncounterValue(entry, speciesIds);
		}
	}
}

function isIndexedLocationBucket(bucket) {
	return bucket !== 'name' &&
		(bucket.includes('wild') || bucket.includes('fixed') || bucket.startsWith('raid'));
}

function formatSpeciesLocationName(areaName, bucket) {
	if (!bucket.startsWith('raid')) {
		return areaName;
	}

	const starMatch = bucket.match(/^raid(\d+)$/);
	if (!starMatch) {
		return `${areaName} Raid Dens`;
	}

	return `${areaName} Raid Dens (${Number(starMatch[1])}-star)`;
}

function buildSpeciesLocationEntry(areaId, areaName, bucket, customName = null) {
	const normalizedAreaId = Number.isFinite(Number(areaId)) ? Number(areaId) : -1;
	const name = customName || formatSpeciesLocationName(areaName, bucket);
	return {
		key: `${normalizedAreaId}:${name}`,
		areaId: normalizedAreaId,
		areaName,
		name,
	};
}

function addLocationEntry(locationIndex, speciesId, locationEntry) {
	if (!locationIndex.has(speciesId)) {
		locationIndex.set(speciesId, new Map());
	}
	locationIndex.get(speciesId).set(locationEntry.key, locationEntry);
}

function getLocationMetadataGroup(groupName) {
	if (typeof LOCATION_METADATA !== 'object' || !LOCATION_METADATA) {
		return [];
	}

	const group = LOCATION_METADATA[groupName];
	return Array.isArray(group) ? group : [];
}

function applyGiftLocationMetadata(locationIndex) {
	for (const giftEntry of getLocationMetadataGroup('gifts')) {
		if (!giftEntry || typeof giftEntry.speciesId !== 'number') {
			continue;
		}

		const matchAreaNames = Array.isArray(giftEntry.matchAreaNames)
			? giftEntry.matchAreaNames
			: [];
		let matchedExistingLocation = false;
		const speciesLocations = locationIndex.get(giftEntry.speciesId);
		if (speciesLocations) {
			for (const [key, location] of Array.from(speciesLocations.entries())) {
				if (!matchAreaNames.includes(location.areaName)) {
					continue;
				}

				const updatedLocation = buildSpeciesLocationEntry(
					location.areaId,
					location.areaName,
					giftEntry.bucket || 'fixed-gift',
					giftEntry.displayName
				);
				speciesLocations.delete(key);
				speciesLocations.set(updatedLocation.key, updatedLocation);
				matchedExistingLocation = true;
			}
		}

		if (!matchedExistingLocation && giftEntry.areaName) {
			addLocationEntry(
				locationIndex,
				giftEntry.speciesId,
				buildSpeciesLocationEntry(
					giftEntry.areaId,
					giftEntry.areaName,
					giftEntry.bucket || 'fixed-gift',
					giftEntry.displayName
				)
			);
		}
	}
}

function getSpeciesLocationIndex() {
	if (speciesLocationIndexCache) {
		return speciesLocationIndexCache;
	}

	const locationIndex = new Map();
	if (!areas) {
		speciesLocationIndexCache = locationIndex;
		return speciesLocationIndexCache;
	}

	for (const [areaId, area] of Object.entries(areas)) {
		const areaName = area.name || `Area ${areaId}`;
		for (const [bucket, value] of Object.entries(area)) {
			if (!isIndexedLocationBucket(bucket)) {
				continue;
			}

			const encounteredSpeciesIds = new Set();
			collectSpeciesIdsFromEncounterValue(value, encounteredSpeciesIds);
			const locationEntry = buildSpeciesLocationEntry(areaId, areaName, bucket);
			for (const speciesId of encounteredSpeciesIds) {
				addLocationEntry(locationIndex, speciesId, locationEntry);
			}
		}
	}

	applyGiftLocationMetadata(locationIndex);

	speciesLocationIndexCache = new Map();
	for (const [speciesId, locationMap] of locationIndex.entries()) {
		const locationList = Array.from(locationMap.values())
			.sort((a, b) =>
				a.areaName.localeCompare(b.areaName) ||
				a.areaId - b.areaId ||
				a.name.localeCompare(b.name)
			);
		speciesLocationIndexCache.set(speciesId, locationList);
	}

	return speciesLocationIndexCache;
}

function getDirectSpeciesAreas(ID) {
	return getSpeciesLocationIndex().get(ID) || [];
}

function resetDisplayLocationCaches() {
	randomizedSpeciesLocationCache.clear();
	randomizedSpeciesOriginalCache.clear();
	speciesLocationGroupCache.clear();
}

function getRandomizerSpeciesPoolKey() {
	if (typeof RANDOMIZER_SPECIES_POOLS !== 'object' || !RANDOMIZER_SPECIES_POOLS) {
		return null;
	}

	const branchKey = saveData?.random?.speciesBranchKey;
	if (typeof branchKey === 'string' && typeof RANDOMIZER_SPECIES_BRANCHES === 'object' && RANDOMIZER_SPECIES_BRANCHES) {
		const branch = RANDOMIZER_SPECIES_BRANCHES[branchKey];
		if (!branch || !branch.deterministic || typeof branch.poolKey !== 'string') {
			return null;
		}
		return RANDOMIZER_SPECIES_POOLS[branch.poolKey] ? branch.poolKey : null;
	}

	if (typeof DEFAULT_RANDOMIZER_SPECIES_POOL === 'string') {
		return DEFAULT_RANDOMIZER_SPECIES_POOL;
	}

	return Object.keys(RANDOMIZER_SPECIES_POOLS)[0] || null;
}

function getRandomizerSpeciesPool() {
	const poolKey = getRandomizerSpeciesPoolKey();
	return poolKey ? RANDOMIZER_SPECIES_POOLS[poolKey] || null : null;
}

function mapSpeciesFromRandomizerPool(speciesId, trainedId, pool) {
	if (!pool || !Array.isArray(pool.speciesIds) || !pool.count) {
		return speciesId;
	}

	if (speciesId <= 0 || speciesId > 1375) {
		return speciesId;
	}

	const slot = (Math.imul(speciesId, trainedId >>> 0) >>> 0) % pool.count;
	const mappedSpeciesId = pool.speciesIds[slot] || RANDOMIZER_LOCATION_FALLBACK_SPECIES_ID;
	if (mappedSpeciesId <= 0 || mappedSpeciesId > 1375) {
		return RANDOMIZER_LOCATION_FALLBACK_SPECIES_ID;
	}
	return mappedSpeciesId;
}

function getRandomizedSpeciesAreas(ID) {
	const trainedId = saveData?.trainedId;
	const pool = getRandomizerSpeciesPool();
	const poolKey = getRandomizerSpeciesPoolKey();
	if (typeof trainedId !== 'number' || !Number.isFinite(trainedId) || !pool || !poolKey) {
		return [];
	}

	const cacheKey = `${trainedId}:${poolKey}:${ID}`;
	if (randomizedSpeciesLocationCache.has(cacheKey)) {
		return randomizedSpeciesLocationCache.get(cacheKey);
	}

	const mergedAreas = new Map();
	for (const [originalSpeciesId, locations] of getSpeciesLocationIndex().entries()) {
		if (mapSpeciesFromRandomizerPool(originalSpeciesId, trainedId, pool) !== ID) {
			continue;
		}

		for (const location of locations) {
			mergedAreas.set(location.key || `${location.areaId}:${location.name}`, location);
		}
	}

	const mappedAreas = Array.from(mergedAreas.values())
		.sort((a, b) =>
			(a.areaName || a.name).localeCompare(b.areaName || b.name) ||
			a.areaId - b.areaId ||
			a.name.localeCompare(b.name)
		);
	randomizedSpeciesLocationCache.set(cacheKey, mappedAreas);
	return mappedAreas;
}

function getRandomizedOriginalSpecies(ID) {
	const trainedId = saveData?.trainedId;
	const pool = getRandomizerSpeciesPool();
	const poolKey = getRandomizerSpeciesPoolKey();
	if (typeof trainedId !== 'number' || !Number.isFinite(trainedId) || !pool || !poolKey || !species) {
		return [];
	}

	const cacheKey = `${trainedId}:${poolKey}:${ID}`;
	if (randomizedSpeciesOriginalCache.has(cacheKey)) {
		return randomizedSpeciesOriginalCache.get(cacheKey);
	}

	const originalSpecies = [];
	for (const mon of Object.values(species)) {
		if (!mon || typeof mon.ID !== 'number') {
			continue;
		}

		if (mapSpeciesFromRandomizerPool(mon.ID, trainedId, pool) !== ID) {
			continue;
		}

		originalSpecies.push(mon);
	}

	originalSpecies.sort((a, b) =>
		(a.dexID || 0) - (b.dexID || 0) ||
		a.key.localeCompare(b.key)
	);
	randomizedSpeciesOriginalCache.set(cacheKey, originalSpecies);
	return originalSpecies;
}

function buildWrapperOriginalSpeciesDetail(tag, className, mon) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	if (!saveData?.random?.normalSpecies || getAppearanceSetting('hardcoreChangesVisible', true) === false) {
		return wrapper;
	}

	const originalSpecies = getRandomizedOriginalSpecies(mon.ID);
	if (!originalSpecies.length) {
		return wrapper;
	}

	const originalSpeciesText = originalSpecies
		.map(originalMon => `${originalMon.key} (#${originalMon.dexID})`)
		.join(', ');
	wrapper.append(buildWrapper('div', className, `Original Pkm: ${originalSpeciesText}`));
	return wrapper;
}

function buildWrapperCap(tag, className, ID) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	let myAreas = saveData?.random?.normalSpecies
		? getRandomizedSpeciesAreas(ID)
		: getDirectSpeciesAreas(ID);

	wrapper.append(buildWrapper('div', 'infoCapLabel', 'Location'));
	if (myAreas.length > 0) {
		for (const area of myAreas) {
			wrapper.append(buildWrapper('div', className, area.name));
		}
	}
	else {
		wrapper.append(buildWrapper('div', className, 'None'));
	}

	return wrapper;
}

function collectOrderedSpeciesIdsFromEncounterValue(value, orderedSpeciesIds, seenSpeciesIds) {
	if (typeof value === 'number') {
		if (species?.[value] && !seenSpeciesIds.has(value)) {
			seenSpeciesIds.add(value);
			orderedSpeciesIds.push(value);
		}
		return;
	}

	if (Array.isArray(value)) {
		for (const entry of value) {
			collectOrderedSpeciesIdsFromEncounterValue(entry, orderedSpeciesIds, seenSpeciesIds);
		}
		return;
	}

	if (value && typeof value === 'object') {
		for (const entry of Object.values(value)) {
			collectOrderedSpeciesIdsFromEncounterValue(entry, orderedSpeciesIds, seenSpeciesIds);
		}
	}
}

// Builds the cache key for grouped location rendering from the active save/randomizer state.
function getSpeciesLocationGroupCacheKey() {
	const trainedId = saveData?.trainedId;
	const poolKey = getRandomizerSpeciesPoolKey();
	if (saveData?.random?.normalSpecies === true && typeof trainedId === 'number' && Number.isFinite(trainedId) && poolKey) {
		return `random:${trainedId}:${poolKey}`;
	}

	return 'base';
}

// Creates the lightweight group shell used to cache ordered species ids per location heading.
function createSpeciesLocationGroupTemplate(locationEntry) {
	const key = locationEntry?.key || `${locationEntry?.areaId ?? -1}:${locationEntry?.name || 'None'}`;
	return {
		key,
		areaId: Number.isFinite(Number(locationEntry?.areaId)) ? Number(locationEntry.areaId) : Number.MAX_SAFE_INTEGER,
		title: locationEntry?.name || 'None',
		speciesIds: [],
		seenSpecies: new Set()
	};
}

// Appends one species id to a cached location group while preserving encounter order and uniqueness.
function appendSpeciesIdToLocationGroup(groups, locationEntry, speciesId) {
	if (!species?.[speciesId]) {
		return;
	}

	const key = locationEntry?.key || `${locationEntry?.areaId ?? -1}:${locationEntry?.name || 'None'}`;
	if (!groups.has(key)) {
		groups.set(key, createSpeciesLocationGroupTemplate(locationEntry));
	}

	const group = groups.get(key);
	if (group.seenSpecies.has(speciesId)) {
		return;
	}

	group.seenSpecies.add(speciesId);
	group.speciesIds.push(speciesId);
}

// Caches the ordered location-group layout so filtered renders only slice visible species from it.
function getCachedSpeciesLocationGroups() {
	const cacheKey = getSpeciesLocationGroupCacheKey();
	if (speciesLocationGroupCache.has(cacheKey)) {
		return speciesLocationGroupCache.get(cacheKey);
	}

	const groups = new Map();
	const trainedId = saveData?.trainedId;
	const pool = saveData?.random?.normalSpecies === true ? getRandomizerSpeciesPool() : null;
	const canMapRandomizedSpecies = saveData?.random?.normalSpecies === true && typeof trainedId === 'number' && Number.isFinite(trainedId) && !!pool;
	const getResolvedLocations = canMapRandomizedSpecies
		? getRandomizedSpeciesAreas
		: getDirectSpeciesAreas;

	for (const [areaId, area] of Object.entries(areas || {})) {
		const areaName = area.name || `Area ${areaId}`;
		for (const [bucket, value] of Object.entries(area)) {
			if (!isIndexedLocationBucket(bucket)) {
				continue;
			}

			const locationEntry = buildSpeciesLocationEntry(areaId, areaName, bucket);
			const orderedSpeciesIds = [];
			collectOrderedSpeciesIdsFromEncounterValue(value, orderedSpeciesIds, new Set());
			for (const originalSpeciesId of orderedSpeciesIds) {
				const speciesId = canMapRandomizedSpecies
					? mapSpeciesFromRandomizerPool(originalSpeciesId, trainedId, pool)
					: originalSpeciesId;
				appendSpeciesIdToLocationGroup(groups, locationEntry, speciesId);
			}
		}
	}

	for (const mon of Object.values(species || {})) {
		if (!mon || typeof mon.ID !== 'number') {
			continue;
		}

		for (const locationEntry of getResolvedLocations(mon.ID)) {
			appendSpeciesIdToLocationGroup(groups, locationEntry, mon.ID);
		}
	}

	const sortedGroups = Array.from(groups.values())
		.sort((left, right) =>
			left.areaId - right.areaId ||
			left.title.localeCompare(right.title)
		)
		.map(group => ({
			key: group.key,
			areaId: group.areaId,
			title: group.title,
			speciesIds: group.speciesIds
		}));

	speciesLocationGroupCache.set(cacheKey, sortedGroups);
	return sortedGroups;
}

// Returns normal-search location names in the same in-game order used by grouped location rendering.
function getDefaultSearchLocationNames() {
	const orderedNames = [];
	const seenNames = new Set();

	for (const group of getCachedSpeciesLocationGroups()) {
		if (!group?.title || seenNames.has(group.title)) {
			continue;
		}

		seenNames.add(group.title);
		orderedNames.push(group.title);
	}

	if (!seenNames.has('None')) {
		orderedNames.push('None');
	}

	return orderedNames;
}

function buildSpeciesLocationGroups(results, matchedLocationNames = null) {
	const speciesById = new Map(results.map(mon => [mon.ID, mon]));
	const unmappedSpeciesIds = new Set(speciesById.keys());
	const restrictLocations = matchedLocationNames instanceof Set;
	const allowUnmappedNoneGroup = !restrictLocations || matchedLocationNames.has('None');
	const groupedLocations = [];

	if (restrictLocations && matchedLocationNames.size === 0) {
		return [];
	}

	for (const groupTemplate of getCachedSpeciesLocationGroups()) {
		if (restrictLocations && !matchedLocationNames.has(groupTemplate.title)) {
			continue;
		}

		const visibleSpecies = groupTemplate.speciesIds
			.map(speciesId => speciesById.get(speciesId))
			.filter(Boolean);
		if (!visibleSpecies.length) {
			continue;
		}

		for (const mon of visibleSpecies) {
			unmappedSpeciesIds.delete(mon.ID);
		}

		groupedLocations.push({
			key: groupTemplate.key,
			areaId: groupTemplate.areaId,
			title: groupTemplate.title,
			species: visibleSpecies
		});
	}

	if (unmappedSpeciesIds.size && allowUnmappedNoneGroup) {
		groupedLocations.push({
			key: 'none:none',
			areaId: Number.MAX_SAFE_INTEGER,
			title: 'None',
			species: Array.from(unmappedSpeciesIds)
				.map(speciesId => speciesById.get(speciesId))
				.filter(Boolean)
		});
	}

	return groupedLocations
		.filter(group => group.species.length > 0)
		.sort((left, right) =>
			left.areaId - right.areaId ||
			left.title.localeCompare(right.title)
		);
}

function renderSpeciesLocationGroups(results, matchedLocationNames = null) {
	const wrapper = document.getElementById('speciesLocationGroups');
	if (!wrapper) {
		return;
	}

	if (!results.length) {
		wrapper.replaceChildren(buildWrapper('div', 'locationSpeciesEmpty', 'No Pokemon match the current filters.'));
		return;
	}

	const groups = buildSpeciesLocationGroups(results, matchedLocationNames);
	if (!groups.length) {
		wrapper.replaceChildren(buildWrapper('div', 'locationSpeciesEmpty', 'None'));
		return;
	}

	const sections = groups.map(group => {
		const section = buildWrapper('section', 'locationSpeciesGroup');
		const title = buildWrapper('h2', 'locationSpeciesGroupTitle', group.title);
		const tableWrapper = buildWrapper('div', 'tableWrapper locationSpeciesTableWrapper');
		const table = document.createElement('table');
		table.className = 'align-middle table table-striped table-dark table-hover';

		const thead = document.createElement('thead');
		const headerRow = document.createElement('tr');
		headerRow.className = 'sortControls';
		for (const label of ['#', 'Sprite', 'Name', 'Type', 'Abilities', 'HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe', 'BST']) {
			headerRow.append(buildWrapper('th', 'sortLocked', label));
		}
		thead.append(headerRow);

		const tbody = document.createElement('tbody');
		const tracker = { body: tbody };
		for (const mon of group.species) {
			displaySpeciesRow(tracker, mon);
		}

		table.append(thead, tbody);
		tableWrapper.append(table);

		section.append(title, tableWrapper);
		return section;
	});

	wrapper.replaceChildren(...sections);
}

function buildWrapperHeldItems(tag, className, i) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	if (!Array.isArray(i) || (i[0] === 0 && i[1] === 0))
		return wrapper;
	wrapper.append(buildWrapper('div', 'infoItemsLabel', 'Held Items'));
	if (i[0])
		wrapper.append(buildWrapper('div', className, 'Common: ' + items[i[0]].name));
	if (i[1])
		wrapper.append(buildWrapper('div', className, 'Rare: ' + items[i[1]].name));
	
	return wrapper;
}

function buildWrapperHardcoreSummary(tag, className, mon) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	if (getAppearanceSetting('hardcoreChangesVisible', true) === false) {
		return wrapper;
	}

	let hardcoreAbilities = getSpeciesAbilityPackage(mon, true);

	wrapper.append(buildWrapper('div', 'infoHardcoreLabel', 'Hardcore Mode'));

	if (hardcoreAbilities.length > 0) {
		wrapper.append(buildWrapper('div', 'infoHardcoreSubLabel', 'Ability Changes'));
		for (const ability of hardcoreAbilities) {
			let text = `${ability.slot}: ${ability.name}`;
			if (ability.changedForHardcore)
				text = `${ability.slot}: ${ability.mappedName} → ${ability.name}`;
			wrapper.append(buildWrapper('div', 'infoHardcoreAbility', text));
		}
	}

	let legend = buildWrapper('div', 'infoHardcoreMoveLegend');
	let marker = buildWrapper('span', 'hardcoreUnavailableMarker', '★');
	legend.append(marker);
	legend.append(document.createTextNode(' is not available in Hardcore.'));
	wrapper.append(legend);

	return wrapper;
}

function buildWrapperEggGroups(tag, className, e) {
	let wrapper = buildWrapper(tag, className + 'Wrapper');
	
	if (!Array.isArray(e) || (e[0] === 0 && e[1] === 0))
		return wrapper;
	
	wrapper.append(buildWrapper('div', 'infoEggGroupsLabel', 'Egg Groups'));
	if (e[0])
		wrapper.append(buildWrapper('div', className, 'egg1'));//eggGroups[e[0]].name));
	if (e[1])
		wrapper.append(buildWrapper('div', className, 'egg2'));//eggGroups[e[1]].name));
	
	return wrapper;
}

function buildBackgroundColor(currentRow, mon) {
	currentRow.style.backgroundColor = types[mon.type[0]].color;
		currentRow.style.backgroundImage = 'linear-gradient(to right, rgba' + currentRow.style.backgroundColor.substr(3).replace(')', ', 0.4)') + ', rgb(63, 40, 40, 0.4))';
		currentRow.style.backgroundColor = '';
	return;
	
	//if (mon.type.secondary) {
	//	let gradient = [];
	//	currentRow.style.backgroundColor = types[mon.type.primary].color;
	//	gradient.push(currentRow.style.backgroundColor.substr(3).replace(')', ', 0.4)'));
	//	currentRow.style.backgroundColor = types[mon.type.secondary].color;
	//	gradient.push(currentRow.style.backgroundColor.substr(3).replace(')', ', 0.4)'));
	//	currentRow.style.backgroundColor = '';
	//	currentRow.style.backgroundImage = 'linear-gradient(to right, rgba' + gradient[0] + ', rgba' + gradient[1] + ')';
	//}
	//else {
	//	currentRow.style.backgroundColor = types[mon.type.primary].color;
	//	currentRow.style.backgroundImage = 'linear-gradient(to right, rgba' + currentRow.style.backgroundColor.substr(3).replace(')', ', 0.4)') + ', rgb(63, 40, 40, 0.4))';
	//	currentRow.style.backgroundColor = '';
	//}
}
