const HARDCORE_BANNED_MOVES = [
	'Shell Smash', 'Quiver Dance', 'Dragon Dance', 'Calm Mind', 'Bulk Up',
	'Curse', 'Rain Dance', 'Sandstorm', 'Hail', 'Sunny Day', 'Tailwind',
	'Electric Terrain', 'Misty Terrain', 'Grassy Terrain', 'Psychic Terrain',
	'Toxic Spikes', 'Sticky Web', 'Shift Gear', 'Tail Glow', 'Coil',
	'Belly Drum', 'Cotton Guard', 'No Retreat', 'Amnesia', 'Acid Armor',
	'Iron Defense', 'Cosmic Power', 'Stockpile', 'Swallow', 'Spit Up',
	'Geomancy', 'Clangorous Soul', 'Fell Stinger', 'Trick Room', 'Strength Sap',
	'Skull Bash', 'Meteor Beam', 'Taunt', 'Psych Up', 'Snatch', 'Magic Coat',
	'Protect', 'Wide Guard', 'Stealth Rock', 'Spikes', 'Perish Song',
	'Substitute', 'Nasty Plot', 'Swords Dance', 'Agility', 'Autotomize',
	'Rock Polish', 'Charm', 'Scale Shot', 'Power-Up Punch', 'Charge Beam',
	'Flame Charge', 'Growth', 'Work Up', 'Hone Claws', 'Meditate', 'Howl',
	'Fiery Dance', 'Destiny Bond', 'Harden', 'Withdraw', 'Defense Curl',
	'Victory Dance', 'Powder'
];

const HARDCORE_RESTRICTED_MOVES = ['Leech Seed', 'Toxic'];

const HARDCORE_RESTRICTED_SPECIES_IDS = [12,19,20,21,22,23,24,37,38,39,40,43,44,45,46,47,48,49,50,51,60,61,62,69,70,71,74,75,76,96,97,167,168,182,185,186,203,206,213,218,219,222,286,287,288,289,292,294,308,309,310,311,312,313,314,320,344,345,367,368,369,386,387,390,391,452,453,455,463,464,470,484,485,487,488,491,494,508,509,510,512,513,529,548,549,550,557,558,562,563,572,573,574,577,578,579,592,593,594,595,598,601,602,609,612,613,617,618,633,634,635,636,637,640,652,653,654,658,659,666,667,703,774,784,794,795,796,797,951,952,958,959,960,963,968,969,970,971,992,1020,1021,1025,1026,1027,1028,1031,1032,1033,1043,1044,1045,1047,1111,1112,1119,1120,1129,1130,1131,1144,1145,1155,1163,1166,1168,1202,1208];

const HARDCORE_ABILITY_REPLACEMENTS = {
	'Drought': 'Sheer Force',
	'Desolate Land': 'Sheer Force',
	'Drizzle': 'Adaptability',
	'Primordial Sea': 'Adaptability',
	'Sand Spit': 'Sand Force',
	'Sand Stream': 'Sand Force',
	'Snow Warning': 'Slush Rush',
	'Speed Boost': 'Infiltrator',
	'Contrary': 'Bad Company',
	'Defiant': 'Clear Body',
	'Competitive': 'Clear Body',
	'Misty Surge': 'Telepathy',
	'Electric Surge': 'Telepathy',
	'Psychic Surge': 'Dazzling',
	'Moxie': 'Unnerve',
	'Grim Neigh': 'Unnerve',
	'Soul-Heart': 'Unnerve',
	'Beast Boost': 'Unnerve',
	'Imposter': 'Limber',
	'Magic Bounce': 'Magic Guard',
	'Storm Drain': 'Water Absorb',
	'Motor Drive': 'Volt Absorb',
	'Lightning Rod': 'Volt Absorb',
	'Blazing Soul': 'Flash Fire',
	'Triage': 'Natural Cure',
	'Trace': 'Synchronize',
	'Stamina': 'Inner Focus',
	'Grassy Surge': 'Self Sufficient'
};

const HARDCORE_SPECIAL_ABILITY_REPLACEMENTS = {
	248: { 'Sand Stream': 'Intimidate' },
	579: { 'Sand Stream': 'Solid Rock' },
	889: { 'Sand Stream': 'Intimidate' },
	981: { 'Triage': 'Triage' },
	1104: { 'Grassy Surge': 'Intimidate' },
	1264: { 'As One (Moxie)': 'Unnerve' },
	1265: { 'As One (Grim Neigh)': 'Unnerve' }
};

let hardcoreState = null;
let abilityPackageCache = {
	base: new Map(),
	hardcore: new Map()
};

function resetTeamLocationSupportCaches() {
	abilityPackageCache = {
		base: new Map(),
		hardcore: new Map()
	};
}

function resetAdvancedFeatureCaches() {
	resetTeamLocationSupportCaches();
}

function setupTeamLocationSupport() {
	buildHardcoreState();
}

function setupAdvancedFeatures() {
	setupTeamLocationSupport();
}

function getFilteredSpeciesResults() {
	let results = Object.values(species);
	for (const activeFilter of Object.values(filters).reduce((list, filter) => list.concat(filter.active), [])) {
		results = results.filter(activeFilter.func);
	}
	return results;
}

function refreshSpeciesResults() {
	if (trackers['speciesTable'] && document.getElementById('speciesTable')) {
		populateTable('speciesTable', getFilteredSpeciesResults());
	}
}

function getAbilityDisplayNameById(abilityId, nameIndex = 0) {
	if (!abilities || !abilities[abilityId]) {
		return '';
	}

	if (abilityId === 73) {
		return 'As One (Grim Neigh)';
	}

	if (abilityId === 77) {
		return 'As One (Moxie)';
	}

	return abilities[abilityId].names[nameIndex] || abilities[abilityId].names[0];
}

function getAbilityDescriptionById(abilityId) {
	if (!abilities || !abilities[abilityId]) {
		return '';
	}

	return abilities[abilityId].description;
}

function buildHardcoreState() {
	if (hardcoreState) {
		return hardcoreState;
	}

	const moveIdsByName = new Map();
	for (const move of Object.values(moves)) {
		moveIdsByName.set(move.name, move.ID);
	}

	const abilityIdsByName = new Map();
	for (const ability of Object.values(abilities)) {
		for (const name of ability.names) {
			abilityIdsByName.set(name, ability.ID);
		}
		abilityIdsByName.set(getAbilityDisplayNameById(ability.ID), ability.ID);
	}

	const bannedMoveIds = new Set(HARDCORE_BANNED_MOVES.map(name => moveIdsByName.get(name)).filter(id => id !== undefined));
	const restrictedMoveIds = new Set(HARDCORE_RESTRICTED_MOVES.map(name => moveIdsByName.get(name)).filter(id => id !== undefined));
	const restrictedSpeciesIds = new Set(HARDCORE_RESTRICTED_SPECIES_IDS);

	const abilityReplacements = new Map();
	for (const [fromName, toName] of Object.entries(HARDCORE_ABILITY_REPLACEMENTS)) {
		const fromId = abilityIdsByName.get(fromName);
		const toId = abilityIdsByName.get(toName);
		if (fromId !== undefined && toId !== undefined) {
			abilityReplacements.set(fromId, toId);
		}
	}

	const specialAbilityReplacements = new Map();
	for (const [speciesId, overrides] of Object.entries(HARDCORE_SPECIAL_ABILITY_REPLACEMENTS)) {
		const speciesOverrides = new Map();
		for (const [fromName, toName] of Object.entries(overrides)) {
			const fromId = abilityIdsByName.get(fromName);
			const toId = abilityIdsByName.get(toName);
			if (fromId !== undefined && toId !== undefined) {
				speciesOverrides.set(fromId, toId);
			}
		}
		specialAbilityReplacements.set(Number(speciesId), speciesOverrides);
	}

	hardcoreState = {
		bannedMoveIds,
		restrictedMoveIds,
		restrictedSpeciesIds,
		abilityReplacements,
		specialAbilityReplacements
	};

	return hardcoreState;
}

function isHardcoreMoveLegal(mon, moveId) {
	const state = buildHardcoreState();
	if (state.bannedMoveIds.has(moveId)) {
		return false;
	}

	if (!state.restrictedMoveIds.has(moveId)) {
		return true;
	}

	return state.restrictedSpeciesIds.has(mon.ID);
}

function getSpeciesAbilityPackage(mon, hardcoreMode = false) {
	const cache = hardcoreMode ? abilityPackageCache.hardcore : abilityPackageCache.base;
	if (cache.has(mon.ID)) {
		return cache.get(mon.ID);
	}

	const state = buildHardcoreState();
	const slots = [
		{ key: 'hidden', label: 'Hidden', value: mon.abilities[0] },
		{ key: 'primary', label: 'Primary', value: mon.abilities[1] },
		{ key: 'secondary', label: 'Secondary', value: mon.abilities[2] }
	];

	const details = [];
	for (const slot of slots) {
		if (!slot.value || slot.value[0] === 0) {
			continue;
		}

		const originalId = slot.value[0];
		const originalAlt = slot.value[1];
		const mappedAbility = getMappedAbility(slot.value, mon.ID);
		const mappedId = mappedAbility[0];
		let finalId = mappedId;
		if (hardcoreMode) {
			const speciesOverride = state.specialAbilityReplacements.get(mon.ID);
			if (speciesOverride && speciesOverride.has(mappedId)) {
				finalId = speciesOverride.get(mappedId);
			} else if (state.abilityReplacements.has(mappedId)) {
				finalId = state.abilityReplacements.get(mappedId);
			}
		}

		details.push({
			slot: slot.label,
			slotKey: slot.key,
			id: finalId,
			name: getAbilityDisplayNameById(finalId),
			description: getAbilityDescriptionById(finalId),
			mappedId,
			mappedName: getAbilityDisplayNameById(mappedId),
			mappedDescription: getAbilityDescriptionById(mappedId),
			originalId,
			originalName: getAbilityDisplayNameById(originalId, originalAlt),
			originalDescription: getAbilityDescriptionById(originalId),
			changedForRandomizer: mappedId !== originalId,
			changedForHardcore: hardcoreMode && finalId !== mappedId
		});
	}

	cache.set(mon.ID, details);
	return details;
}

function buildSpeciesPanelMoveEntry(mon, moveId, level = null, raw = false) {
	const resolvedMoveId = raw ? moveId : getMappedMove(moveId, mon.ID);
	const move = moves[resolvedMoveId];
	if (!move) {
		return undefined;
	}

	return {
		...move,
		level,
		hardcoreUnavailable: !isHardcoreMoveLegal(mon, move.ID)
	};
}
