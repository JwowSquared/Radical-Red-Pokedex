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
let advancedSearchPredicate = null;
let advancedSearchQuery = '';
let advancedSearchAst = null;
let speciesSearchCache = new Map();
let movePackageCache = {
	base: new Map(),
	hardcore: new Map()
};
let abilityPackageCache = {
	base: new Map(),
	hardcore: new Map()
};
let advancedSearchAutocompleteMetadata = null;
let advancedSearchAutocompleteSuggestions = [];
let advancedSearchAutocompleteIndex = -1;
let advancedSearchActionsHideTimer = null;
let advancedSearchActionsVisibilityTimer = null;
let advancedSearchHistory = [];
let advancedSearchLastInputValue = '';
let advancedSearchResolvedLocationIndex = null;
let advancedSearchResolvedLocationNames = null;
let advancedSearchResolvedLocationOrderMap = null;
let advancedSearchOriginalLocationIndex = null;
let advancedSearchOriginalLocationNames = null;
let advancedSearchOriginalLocationOrderMap = null;
const ADVANCED_SEARCH_HISTORY_STORAGE_KEY = 'advancedSearchHistory';
const ADVANCED_SEARCH_HISTORY_LIMIT = 3;
const ADVANCED_SEARCH_MAX_LOCATION_SPECIES_ID = 1375;
const ADVANCED_SEARCH_RESERVED_KEYWORDS = {
	seviian: {
		keyword: 'seviian',
		query: "originalpokemon has 'sevii'",
		meta: 'original pokemon is Seviian'
	},
	legendary: {
		keyword: 'legendary',
		query: 'legendary = true',
		meta: 'Legendary Pokemon'
	},
	mythical: {
		keyword: 'mythical',
		query: 'mythical = true',
		meta: 'Mythical Pokemon'
	},
	tradepkm: {
		keyword: 'tradepkm',
		query: "name ~ ('snom','carbink','Pikipek','Florges','Furret','Murkrow','Dedenne','Aegislash','Ursaluna')",
		meta: 'NPC trade input Pokemon'
	},
	receivepkm: {
		keyword: 'receivepkm',
		query: "originalpokemon ~ ('Carnivine','Eiscue','Farfetch','Chatot','Morpeko','Mimikyu','Chillet','Aegislash','Ursaluna')",
		meta: 'Pokemon received from NPC trade'
	}
};
const ADVANCED_SEARCH_LEGENDARY_DEX_IDS = new Set([144,145,146,150,243,244,245,249,250,377,378,379,380,381,382,383,384,480,481,482,483,484,485,486,487,488,638,639,640,641,642,645,643,644,646,716,717,718,772,773,785,786,787,788,789,790,791,792,800,888,889,890,891,892,894,895,896,897,898,905,1001,1002,1003,1004,1007,1008,1014,1015,1016,1017,1024]);
const ADVANCED_SEARCH_MYTHICAL_DEX_IDS = new Set([151,251,385,386,490,491,492,493,494,647,648,649,719,720,721,801,802,807,808,809,893,1025]);

// Clears derived caches so search metadata can be rebuilt from current data/save state.
function resetAdvancedFeatureCaches() {
	speciesSearchCache = new Map();
	movePackageCache = {
		base: new Map(),
		hardcore: new Map()
	};
	abilityPackageCache = {
		base: new Map(),
		hardcore: new Map()
	};
	advancedSearchAutocompleteMetadata = null;
	advancedSearchAutocompleteSuggestions = [];
	advancedSearchAutocompleteIndex = -1;
	advancedSearchResolvedLocationIndex = null;
	advancedSearchResolvedLocationNames = null;
	advancedSearchResolvedLocationOrderMap = null;
	advancedSearchOriginalLocationIndex = null;
	advancedSearchOriginalLocationNames = null;
	advancedSearchOriginalLocationOrderMap = null;
}

// Deduplicates and alphabetizes display values used by autocomplete metadata.
function sortSearchValues(values) {
	return uniqStrings(values).sort((left, right) => left.localeCompare(right));
}

// Builds the autocomplete dictionary for attributes and allowed value suggestions.
function buildAdvancedSearchAutocompleteMetadata() {
	if (advancedSearchAutocompleteMetadata) {
		return advancedSearchAutocompleteMetadata;
	}

	const speciesNames = sortSearchValues(Object.values(species).map(mon => mon.key));
	const typeNames = sortSearchValues(Object.values(types).map(type => type.name));
	const abilityNames = sortSearchValues(Object.values(abilities).map(ability => getAbilityDisplayNameById(ability.ID)));
	const moveNames = sortSearchValues(Object.values(moves).map(move => move.name));
	const itemNames = sortSearchValues(Object.values(items).map(item => item?.name));
	const eggGroupNames = sortSearchValues(Object.values(eggGroups).filter(Boolean));
	const locationNames = getAdvancedSearchLocationNames();
	const locationOriginalNames = getAdvancedSearchOriginalLocationNames();
	const originalSpeciesNames = getAdvancedSearchOriginalSpeciesNames();
	const booleanValues = ['true', 'false'];
	const hardcoreAbilityNames = sortSearchValues(
		Object.values(species).flatMap(mon => getSpeciesAbilityPackage(mon, true).map(ability => ability.name))
	);
	const hardcoreMoveNames = sortSearchValues(
		Object.values(species).flatMap(mon => getSpeciesMovePackage(mon, true).all.map(move => move.name))
	);

	const valuesByKey = {
		speciesNames,
		typeNames,
		abilityNames,
		hardcoreAbilityNames,
		moveNames,
		hardcoreMoveNames,
		itemNames,
		eggGroupNames,
		booleanValues,
		locationNames,
		locationOriginalNames,
		originalSpeciesNames
	};

	advancedSearchAutocompleteMetadata = createAdvancedSearchAutocompleteMetadata(valuesByKey);
	return advancedSearchAutocompleteMetadata;
}

// Resolves Hardcore-specific move bans and ability replacement tables once per session.
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

// Loads the recent advanced-search query history from localStorage.
function loadAdvancedSearchHistory() {
	try {
		const raw = localStorage.getItem(ADVANCED_SEARCH_HISTORY_STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		advancedSearchHistory = Array.isArray(parsed)
			? parsed.filter(query => typeof query === 'string' && query.trim()).slice(0, ADVANCED_SEARCH_HISTORY_LIMIT)
			: [];
	}
	catch {
		advancedSearchHistory = [];
	}
}

// Persists the trimmed advanced-search history list to localStorage.
function saveAdvancedSearchHistory() {
	try {
		localStorage.setItem(
			ADVANCED_SEARCH_HISTORY_STORAGE_KEY,
			JSON.stringify(advancedSearchHistory.slice(0, ADVANCED_SEARCH_HISTORY_LIMIT))
		);
	}
	catch {}
}

// Stores a successful query at the top of the in-memory history list.
function rememberAdvancedSearchQuery(query) {
	const normalizedQuery = String(query || '').trim();
	if (!normalizedQuery) {
		return;
	}

	advancedSearchHistory = [
		normalizedQuery,
		...advancedSearchHistory.filter(previousQuery => previousQuery !== normalizedQuery)
	].slice(0, ADVANCED_SEARCH_HISTORY_LIMIT);
	saveAdvancedSearchHistory();
}

// Returns whether the advanced-search autocomplete engine should execute at all.
function isAdvancedSearchAutocompleteEnabled() {
	if (typeof areAdvancedSearchSuggestionsEnabled === 'function') {
		return areAdvancedSearchSuggestionsEnabled();
	}

	const explicitSetting = getAppearanceSetting('advancedSearchSuggestionsEnabled', null);
	if (explicitSetting !== null) {
		return explicitSetting !== false;
	}

	return getAppearanceSetting('disableValueSuggestions', false) !== true;
}

// Returns true when the shared category picker is currently set to advanced search mode.
function isAdvancedSearchCategorySelected() {
	return selectedFilter?.label === 'Adv. Search';
}

// Reuses the main search input as the single text box for advanced search queries.
function getAdvancedSearchInputElement() {
	return document.getElementById('speciesFilterInput');
}

// Reuses the normal search dropdown container so advanced autocomplete renders in-place.
function getAdvancedSearchDropdownElement() {
	return document.getElementById('speciesFilterInputDropdown');
}

// Returns the shared input wrapper that anchors the integrated autocomplete popup.
function getAdvancedSearchInputWrapperElement() {
	return document.getElementById('speciesFilterInputWrapper');
}

// Provides the example placeholder text shown when the shared box is in advanced mode.
function getAdvancedSearchExamplePlaceholder() {
	return "Example: (bst >= 600 and location has 'route 3')";
}

// Returns one reserved advanced-search keyword macro definition.
function getAdvancedSearchReservedKeyword(keyword) {
	const normalizedKeyword = normalizeSearchKey(keyword);
	const reservedKeyword = ADVANCED_SEARCH_RESERVED_KEYWORDS[normalizedKeyword];
	if (reservedKeyword) {
		return reservedKeyword;
	}

	const typeNames = getAdvancedSearchReservedTypeNames(keyword);
	if (!typeNames) {
		return null;
	}

	return {
		keyword: String(keyword || '').trim().toLowerCase(),
		query: typeNames.length === 1
			? `type = ${typeNames[0]}`
			: `type = (${typeNames.map(typeName => quoteAdvancedSearchValue(typeName)).join(',')})`,
		meta: typeNames.length === 1
			? `${typeNames[0]} type`
			: `${typeNames[0]}/${typeNames[1]} type`
	};
}

// Returns the canonical type names referenced by a reserved type keyword.
function getAdvancedSearchReservedTypeNames(keyword) {
	const rawKeyword = String(keyword || '').trim().toLowerCase();
	if (!rawKeyword) {
		return null;
	}

	const rawParts = rawKeyword.split('-');
	if (!rawParts.length || rawParts.length > 2 || rawParts.some(part => !part.trim())) {
		return null;
	}

	const typeLookup = new Map(
		Object.values(types || {}).map(type => [normalizeSearchKey(type.name), type.name.toLowerCase()])
	);
	const typeNames = rawParts.map(part => typeLookup.get(normalizeSearchKey(part)));
	if (typeNames.some(typeName => !typeName)) {
		return null;
	}

	if (typeNames.length === 2 && typeNames[0] === typeNames[1]) {
		return null;
	}

	return typeNames;
}

// Builds autocomplete entries for single-type and dashed dual-type reserved keywords.
function getAdvancedSearchReservedTypeKeywordSuggestions(fragment = '') {
	const typeNames = Object.values(types || {}).map(type => type.name.toLowerCase());
	const suggestions = typeNames.map(typeName => ({
		label: typeName,
		insertText: typeName,
		meta: `${typeName} type`,
		category: 'reservedKeyword',
		priority: 0
	}));

	if (!String(fragment || '').includes('-')) {
		return suggestions;
	}

	for (const leftType of typeNames) {
		for (const rightType of typeNames) {
			if (leftType === rightType) {
				continue;
			}
			suggestions.push({
				label: `${leftType}-${rightType}`,
				insertText: `${leftType}-${rightType}`,
				meta: `${leftType}/${rightType} type`,
				category: 'reservedKeyword',
				priority: 0
			});
		}
	}

	return suggestions;
}

// Builds autocomplete entries for the reserved advanced-search keyword macros.
function getAdvancedSearchReservedKeywordSuggestions(fragment = '') {
	return [
		...Object.values(ADVANCED_SEARCH_RESERVED_KEYWORDS).map(keyword => ({
		label: keyword.keyword,
		insertText: keyword.keyword,
		meta: keyword.meta,
		category: 'reservedKeyword',
		priority: 0
		})),
		...getAdvancedSearchReservedTypeKeywordSuggestions(fragment)
	];
}

// Builds attribute-level suggestions that remain available even when values are suppressed.
function buildAdvancedSearchAttributeSuggestions(metadata, fragment = '') {
	const reservedSuggestions = getAdvancedSearchReservedKeywordSuggestions(fragment);
	const reservedLabels = new Set(reservedSuggestions.map(suggestion => normalizeSearchKey(suggestion.label)));
	return [
		{ label: 'not', insertText: 'not', meta: 'name operator', category: 'logical', priority: 0 },
		...reservedSuggestions,
		...metadata.attributes
			.filter(attribute => !reservedLabels.has(normalizeSearchKey(attribute.name)))
			.map(attribute => ({
			label: attribute.name,
			insertText: attribute.name,
			meta: attribute.kind,
			category: 'attribute'
			}))
	];
}

// Returns the operator list supported by one non-boolean attribute in autocomplete.
function getAdvancedSearchOperatorSuggestions(attribute) {
	if (!attribute) {
		return [];
	}

	if (attribute.kind === 'number') {
		return ['=', '!=', 'not', '>', '>=', '<', '<='];
	}

	const operators = ['=', '!=', '!~', 'not', 'has', '~'];
	if (isOrderedLocationComparisonAttribute(attribute.name)) {
		operators.push('>', '>=', '<', '<=');
	}

	return operators;
}

// Wires the advanced search input, autocomplete popup, and action button visibility.
function setupAdvancedSearch() {
	const input = getAdvancedSearchInputElement();
	const dropdown = getAdvancedSearchDropdownElement();
	const wrapper = getAdvancedSearchInputWrapperElement();
	const actions = document.getElementById('advancedSearchActions');
	if (!input || !dropdown || !wrapper || !actions) {
		return;
	}

	const showAdvancedSearchActions = function() {
		advancedSearchActionsHideTimer = null;
		advancedSearchActionsVisibilityTimer = null;
		actions.classList.remove('hide');
		actions.classList.add('visible');
	};

	showAdvancedSearchActions();

	input.addEventListener('keydown', function(event) {
		if (!isAdvancedSearchCategorySelected()) {
			return;
		}

		showAdvancedSearchActions();

		if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			if (isAdvancedSearchAutocompleteEnabled() && advancedSearchAutocompleteSuggestions.length) {
				event.preventDefault();
				moveAdvancedSearchAutocompleteSelection(event.key === 'ArrowDown' ? 1 : -1);
			}
			return;
		}

		if (event.key === 'Tab' && isAdvancedSearchAutocompleteEnabled() && advancedSearchAutocompleteSuggestions.length) {
			event.preventDefault();
			applyAdvancedSearchAutocompleteSuggestion(
				advancedSearchAutocompleteSuggestions[Math.max(advancedSearchAutocompleteIndex, 0)]
			);
			return;
		}

		if (event.key === 'Escape') {
			if (isAdvancedSearchAutocompleteEnabled()) {
				hideAdvancedSearchAutocomplete();
			}
			return;
		}

		if (event.key === 'Enter') {
			event.preventDefault();
			runAdvancedSearch();
		}
	});

	input.addEventListener('input', function(event) {
		if (!isAdvancedSearchCategorySelected()) {
			return;
		}

		showAdvancedSearchActions();
		const nextValue = input.value;
		const didDelete = (event.inputType && event.inputType.startsWith('delete')) || nextValue.length < advancedSearchLastInputValue.length;
		if (didDelete) {
			clearAdvancedSearchPredicateState();
			refreshSpeciesResults();
		}
		advancedSearchLastInputValue = nextValue;
		if (!isAdvancedSearchAutocompleteEnabled()) {
			hideAdvancedSearchAutocomplete();
			return;
		}
		refreshAdvancedSearchAutocomplete();
	});
	input.addEventListener('click', function() {
		if (!isAdvancedSearchCategorySelected()) {
			return;
		}

		showAdvancedSearchActions();
		if (!isAdvancedSearchAutocompleteEnabled()) {
			hideAdvancedSearchAutocomplete();
			return;
		}
		refreshAdvancedSearchAutocomplete();
	});
	input.addEventListener('focus', function() {
		if (!isAdvancedSearchCategorySelected()) {
			return;
		}

		showAdvancedSearchActions();
		if (!isAdvancedSearchAutocompleteEnabled()) {
			hideAdvancedSearchAutocomplete();
			return;
		}
		refreshAdvancedSearchAutocomplete();
	});

	document.addEventListener('mousedown', function(event) {
		if (!wrapper.contains(event.target)) {
			hideAdvancedSearchAutocomplete();
		}
	});
}

// Clears the autocomplete popup and resets its selection state.
function hideAdvancedSearchAutocomplete() {
	const dropdown = getAdvancedSearchDropdownElement();
	if (!dropdown) {
		return;
	}

	advancedSearchAutocompleteSuggestions = [];
	advancedSearchAutocompleteIndex = -1;
	dropdown.innerHTML = '';
	dropdown.className = 'hide';
}

// Clears dropdown state and optionally drops cached autocomplete metadata for performance.
function clearAdvancedSearchAutocompleteRuntime(dropMetadata = false) {
	hideAdvancedSearchAutocomplete();
	if (dropMetadata) {
		advancedSearchAutocompleteMetadata = null;
	}
}

// Moves the highlighted autocomplete row up or down with wrapping behavior.
function moveAdvancedSearchAutocompleteSelection(direction) {
	if (!advancedSearchAutocompleteSuggestions.length) {
		return;
	}

	advancedSearchAutocompleteIndex += direction;
	if (advancedSearchAutocompleteIndex < 0) {
		advancedSearchAutocompleteIndex = advancedSearchAutocompleteSuggestions.length - 1;
	}
	if (advancedSearchAutocompleteIndex >= advancedSearchAutocompleteSuggestions.length) {
		advancedSearchAutocompleteIndex = 0;
	}

	renderAdvancedSearchAutocomplete();
}

// Recomputes autocomplete suggestions from the current input and cursor position.
function refreshAdvancedSearchAutocomplete() {
	const input = getAdvancedSearchInputElement();
	if (!input || !isAdvancedSearchCategorySelected() || !isAdvancedSearchAutocompleteEnabled()) {
		hideAdvancedSearchAutocomplete();
		return;
	}

	const cursorIndex = input.selectionStart ?? input.value.length;
	advancedSearchAutocompleteSuggestions = getAdvancedSearchAutocompleteSuggestions(input.value, cursorIndex);
	advancedSearchAutocompleteIndex = advancedSearchAutocompleteSuggestions.length ? 0 : -1;
	renderAdvancedSearchAutocomplete();
}

// Renders the autocomplete list and keeps the active suggestion in view.
function renderAdvancedSearchAutocomplete() {
	const dropdown = getAdvancedSearchDropdownElement();
	if (!dropdown) {
		return;
	}

	if (!advancedSearchAutocompleteSuggestions.length) {
		hideAdvancedSearchAutocomplete();
		return;
	}

	dropdown.innerHTML = '';
	advancedSearchAutocompleteSuggestions.forEach((suggestion, index) => {
		const item = document.createElement('li');
		item.className = `advancedSearchAutocompleteItem${index === advancedSearchAutocompleteIndex ? ' active' : ''}`;

		const label = document.createElement('span');
		label.className = 'advancedSearchAutocompleteLabel';
		label.textContent = suggestion.label;

			const meta = document.createElement('span');
			meta.className = 'advancedSearchAutocompleteMeta';
			meta.textContent = suggestion.meta;

			item.append(label, meta);
			item.addEventListener('mouseenter', function() {
				if (advancedSearchAutocompleteIndex === index) {
					return;
				}
				advancedSearchAutocompleteIndex = index;
				renderAdvancedSearchAutocomplete();
			});
			item.addEventListener('mousedown', function(event) {
				event.preventDefault();
				applyAdvancedSearchAutocompleteSuggestion(suggestion);
			});
		dropdown.append(item);
	});

	dropdown.className = '';

	const activeElement = dropdown.children[advancedSearchAutocompleteIndex];
	if (activeElement) {
		activeElement.scrollIntoView({ block: 'nearest' });
	}
}

// Normalizes smart quotes from mobile keyboards into parser-friendly ASCII quotes.
function normalizeAdvancedSearchInput(input) {
	return String(input ?? '')
		.replace(/[\u2018\u2019\u201A\u201B]/g, '\'')
		.replace(/[\u201C\u201D\u201E\u201F]/g, '"');
}

// Tokenizes a partial query so autocomplete can reason about incomplete expressions.
function tokenizeAdvancedSearchPartial(input) {
	input = normalizeAdvancedSearchInput(input);
	const tokens = [];
	let index = 0;

	while (index < input.length) {
		const start = index;
		const current = input[index];

		if (/\s/.test(current)) {
			index++;
			continue;
		}

		const twoChar = input.slice(index, index + 2);
		if (['>=', '<=', '!=', '==', '!~'].includes(twoChar)) {
			tokens.push({ type: 'operator', value: twoChar, start, end: index + 2, partial: false });
			index += 2;
			continue;
		}

		if (['(', ')', ','].includes(current)) {
			tokens.push({ type: current, value: current, start, end: index + 1, partial: false });
			index++;
			continue;
		}

		if (['>', '<', '=', '~'].includes(current)) {
			tokens.push({ type: 'operator', value: current, start, end: index + 1, partial: false });
			index++;
			continue;
		}

		if (current === '!') {
			tokens.push({ type: 'operator', value: current, start, end: index + 1, partial: true });
			index++;
			continue;
		}

		if (current === '"' || current === '\'') {
			const quote = current;
			let value = '';
			index++;
			while (index < input.length && input[index] !== quote) {
				if (input[index] === '\\' && index + 1 < input.length) {
					value += input[index + 1];
					index += 2;
					continue;
				}
				value += input[index];
				index++;
			}

			if (input[index] === quote) {
				index++;
				tokens.push({ type: 'string', value, quote, start, end: index, partial: false });
			}
			else {
				tokens.push({ type: 'string', value, quote, start, end: input.length, partial: true });
				break;
			}
			continue;
		}

		if (/[0-9]/.test(current)) {
			let value = current;
			index++;
			while (index < input.length && /[0-9.]/.test(input[index])) {
				value += input[index];
				index++;
			}
			tokens.push({ type: 'number', value, start, end: index, partial: index === input.length });
			continue;
		}

		if (/[A-Za-z_]/.test(current)) {
			let value = current;
			index++;
			while (index < input.length && /[A-Za-z0-9_.-]/.test(input[index])) {
				value += input[index];
				index++;
			}
			tokens.push({ type: 'word', value, start, end: index, partial: index === input.length });
			continue;
		}

		tokens.push({ type: 'unknown', value: current, start, end: index + 1, partial: true });
		break;
	}

	return tokens;
}

// Identifies tokens that can act as scalar values in the advanced-search grammar.
function isAdvancedSearchScalarToken(token) {
	return token && ['word', 'number', 'string'].includes(token.type);
}

// Identifies operator tokens, including word-style operators like `has` and `not`.
function isAdvancedSearchOperatorToken(token) {
	return token && (
		token.type === 'operator' ||
		(token.type === 'word' && ['has', 'have', 'not'].includes(token.value.toLowerCase()))
	);
}

// Resolves one attribute alias to its normalized advanced-search config entry.
function getAdvancedSearchAttributeConfig(attributeName) {
	return ADVANCED_SEARCH_ATTRIBUTE_CONFIG[normalizeSearchKey(attributeName)] || null;
}

// Returns true when the attribute can stand alone as an implicit `= true` clause.
function isStandaloneAdvancedSearchAttribute(attributeName) {
	return getAdvancedSearchAttributeConfig(attributeName)?.kind === 'boolean';
}

// Detects whether the next token ends a clause instead of starting an explicit value.
function isAdvancedSearchClauseBoundaryToken(token) {
	return !token ||
		(token.type === 'word' && ['and', 'or'].includes(token.value.toLowerCase())) ||
		token.type === ')' ||
		token.type === ',';
}

// Builds the fallback AST used when plain text should search against Pokemon names.
function buildImplicitNameSearchAst(query) {
	return {
		type: 'comparison',
		attribute: 'name',
		operator: 'has',
		value: query
	};
}

// Expands one reserved keyword into its underlying advanced-search AST.
function buildReservedAdvancedSearchAst(keyword) {
	const reservedKeyword = getAdvancedSearchReservedKeyword(keyword);
	return reservedKeyword ? parseAdvancedSearch(reservedKeyword.query) : null;
}

// Negates one AST so reserved keywords can be used after `not`.
function negateAdvancedSearchAst(ast) {
	if (!ast) {
		return null;
	}

	if (ast.type === 'logical') {
		return {
			type: 'logical',
			operator: ast.operator === 'and' ? 'or' : 'and',
			left: negateAdvancedSearchAst(ast.left),
			right: negateAdvancedSearchAst(ast.right)
		};
	}

	if (Array.isArray(ast.value) && ['=', '=='].includes(String(ast.operator || '').toLowerCase())) {
		return ast.value
			.map(value => ({
				type: 'comparison',
				attribute: ast.attribute,
				operator: '!=',
				value
			}))
			.reduce((expression, comparison) => expression
				? { type: 'logical', operator: 'or', left: expression, right: comparison }
				: comparison, null);
	}

	const negatedOperators = {
		'=': '!=',
		'==': '!=',
		'!=': '=',
		'~': '!~',
		'!~': '~',
		has: 'not',
		not: 'has',
		'>': '<=',
		'>=': '<',
		'<': '>=',
		'<=': '>'
	};
	const negatedOperator = negatedOperators[String(ast.operator || '').toLowerCase()];
	if (!negatedOperator) {
		throw new Error(`Unsupported reserved keyword negation for operator "${ast.operator}".`);
	}

	return {
		...ast,
		operator: negatedOperator,
		value: Array.isArray(ast.value) ? [...ast.value] : ast.value
	};
}

// Detects when the input should behave like a simple name search instead of AST syntax.
function getPlainNameSearchAutocompleteContext(input, cursorIndex) {
	const query = input.trim();
	if (!query) {
		return null;
	}

	if (cursorIndex !== input.length) {
		return null;
	}

	if (/[(),=<>!'"]/.test(input)) {
		return null;
	}

	const tokens = tokenizeAdvancedSearchPartial(input);
	if (tokens.some(token => ['operator', '(', ')', ',', 'unknown'].includes(token.type))) {
		return null;
	}

	if (tokens.some(token => token.type === 'word' && ['and', 'or', 'has', 'have', 'not'].includes(token.value.toLowerCase()))) {
		return null;
	}

	if (getAdvancedSearchReservedKeyword(query)) {
		return null;
	}

	const metadata = buildAdvancedSearchAutocompleteMetadata();
	const exactAttribute = metadata.byName[normalizeSearchKey(query)];
	if (exactAttribute && /\s$/.test(input)) {
		return null;
	}

	return {
		fragment: query,
		rangeStart: 0,
		rangeEnd: input.length
	};
}

// Parses a query normally and falls back to implicit `name has ...` behavior on failure.
function parseAdvancedSearchWithFallback(query) {
	try {
		return parseAdvancedSearch(query);
	}
	catch {
		return buildImplicitNameSearchAst(query);
	}
}

// Advances autocomplete parser state when the active token already completes a clause.
function tryFinalizeAdvancedSearchAutocompleteToken(state, activeToken, currentAttribute, stack, metadata) {
	if (!activeToken) {
		return null;
	}

	const attribute = currentAttribute ? metadata.byName[normalizeSearchKey(currentAttribute)] : null;
	switch (state) {
		case 'expectAttribute':
			if (activeToken.type === 'word' && activeToken.value.toLowerCase() === 'not') {
				return { state: 'expectValue', currentAttribute: 'name' };
			}
			if (activeToken.type === 'word' && getAdvancedSearchReservedKeyword(activeToken.value)) {
				return { state: 'expectLogicalOrEnd', currentAttribute: null };
			}
			if (activeToken.type === 'word' && metadata.byName[normalizeSearchKey(activeToken.value)]) {
				return { state: 'expectOperator', currentAttribute: activeToken.value };
			}
			break;
		case 'expectOperator':
			if (
				attribute?.kind === 'boolean' &&
				activeToken.type === 'word' &&
				['and', 'or'].includes(activeToken.value.toLowerCase())
			) {
				return { state: 'expectAttribute', currentAttribute: null };
			}
			if (
				attribute?.kind === 'boolean' &&
				activeToken.type === ')' &&
				stack[stack.length - 1] === 'expression'
			) {
				return { state: 'expectLogicalOrEnd', currentAttribute, stack: stack.slice(0, -1) };
			}
			if (
				(activeToken.type === 'operator' && ['=', '==', '!=', '!~', '>', '>=', '<', '<=', '~'].includes(activeToken.value)) ||
				(activeToken.type === 'word' && ['has', 'have', 'not'].includes(activeToken.value.toLowerCase()))
			) {
				return { state: 'expectValue', currentAttribute };
			}
			break;
		case 'expectValue':
			if (activeToken.type === '(') {
				return { state: 'expectValueListItem', currentAttribute, stack: [...stack, 'valueList'] };
			}
			if (
				attribute &&
				(
					(attribute.kind === 'number' && activeToken.type === 'number') ||
					(attribute.kind !== 'number' && ['word', 'string'].includes(activeToken.type))
				)
			) {
				return { state: 'expectLogicalOrEnd', currentAttribute };
			}
			break;
		case 'expectValueListItem':
			if (
				attribute &&
				(
					(attribute.kind === 'number' && activeToken.type === 'number') ||
					(attribute.kind !== 'number' && ['word', 'string'].includes(activeToken.type))
				)
			) {
				return { state: 'expectValueListDelimiter', currentAttribute };
			}
			break;
		case 'expectValueListDelimiter':
			if (activeToken.type === ',') {
				return { state: 'expectValueListItem', currentAttribute };
			}
			if (activeToken.type === ')' && stack[stack.length - 1] === 'valueList') {
				return { state: 'expectLogicalOrEnd', currentAttribute, stack: stack.slice(0, -1) };
			}
			break;
		case 'expectLogicalOrEnd':
			if (activeToken.type === 'word' && ['and', 'or'].includes(activeToken.value.toLowerCase())) {
				return { state: 'expectAttribute', currentAttribute: null };
			}
			if (activeToken.type === ')' && stack[stack.length - 1] === 'expression') {
				return { state: 'expectLogicalOrEnd', currentAttribute, stack: stack.slice(0, -1) };
			}
			break;
		default:
			break;
	}

	return null;
}

// Determines autocomplete context at the cursor, including attribute/value expectations.
function getAdvancedSearchAutocompleteContext(input, cursorIndex) {
	const tokens = tokenizeAdvancedSearchPartial(input.slice(0, cursorIndex));
	let activeToken = null;
	if (tokens.length && tokens[tokens.length - 1].partial) {
		activeToken = tokens.pop();
	}
	const replacementToken = activeToken;

	let state = 'expectAttribute';
	let currentAttribute = null;
	const stack = [];

	for (const token of tokens) {
		switch (state) {
			case 'expectAttribute':
				if (token.type === '(') {
					stack.push('expression');
					break;
				}
				if (token.type === 'word' && token.value.toLowerCase() === 'not') {
					currentAttribute = 'name';
					state = 'expectValue';
					break;
				}
				if (token.type === 'word' && getAdvancedSearchReservedKeyword(token.value)) {
					currentAttribute = null;
					state = 'expectLogicalOrEnd';
					break;
				}
				if (token.type === 'word') {
					currentAttribute = token.value;
					state = 'expectOperator';
					break;
				}
				if (token.type === ')' && stack[stack.length - 1] === 'expression') {
					stack.pop();
					state = 'expectLogicalOrEnd';
					break;
				}
				return null;
			case 'expectOperator':
				if (
					getAdvancedSearchAttributeConfig(currentAttribute)?.kind === 'boolean' &&
					token.type === 'word' &&
					['and', 'or'].includes(token.value.toLowerCase())
				) {
					currentAttribute = null;
					state = 'expectAttribute';
					break;
				}
				if (
					getAdvancedSearchAttributeConfig(currentAttribute)?.kind === 'boolean' &&
					token.type === ')' &&
					stack[stack.length - 1] === 'expression'
				) {
					stack.pop();
					state = 'expectLogicalOrEnd';
					break;
				}
				if (isAdvancedSearchOperatorToken(token)) {
					state = 'expectValue';
					break;
				}
				return null;
			case 'expectValue':
				if (token.type === '(') {
					stack.push('valueList');
					state = 'expectValueListItem';
					break;
				}
				if (isAdvancedSearchScalarToken(token)) {
					state = 'expectLogicalOrEnd';
					break;
				}
				return null;
			case 'expectValueListItem':
				if (isAdvancedSearchScalarToken(token)) {
					state = 'expectValueListDelimiter';
					break;
				}
				if (token.type === ')' && stack[stack.length - 1] === 'valueList') {
					stack.pop();
					state = 'expectLogicalOrEnd';
					break;
				}
				return null;
			case 'expectValueListDelimiter':
				if (token.type === ',') {
					state = 'expectValueListItem';
					break;
				}
				if (token.type === ')' && stack[stack.length - 1] === 'valueList') {
					stack.pop();
					state = 'expectLogicalOrEnd';
					break;
				}
				return null;
			case 'expectLogicalOrEnd':
				if (token.type === 'word' && ['and', 'or'].includes(token.value.toLowerCase())) {
					currentAttribute = null;
					state = 'expectAttribute';
					break;
				}
				if (token.type === ')' && stack[stack.length - 1] === 'expression') {
					stack.pop();
					state = 'expectLogicalOrEnd';
					break;
				}
				return null;
			default:
				return null;
		}
	}

	const metadata = buildAdvancedSearchAutocompleteMetadata();
	const finalized = tryFinalizeAdvancedSearchAutocompleteToken(state, activeToken, currentAttribute, stack, metadata);
	if (finalized) {
		state = finalized.state;
		currentAttribute = finalized.currentAttribute;
		activeToken = null;
		if (finalized.stack) {
			stack.splice(0, stack.length, ...finalized.stack);
		}
	}

	const replacementStart = replacementToken ? replacementToken.start : cursorIndex;
	const replacementEnd = replacementToken ? replacementToken.end : cursorIndex;
	const fragment = activeToken ? activeToken.value : '';
	const attributeName = currentAttribute ? normalizeSearchKey(currentAttribute) : null;

	return {
		state,
		stack,
		activeToken,
		fragment,
		rangeStart: replacementStart,
		rangeEnd: replacementEnd,
		replacementStart,
		replacementEnd,
		attribute: attributeName ? metadata.byName[attributeName] : null
	};
}

// Scores how closely a suggestion matches the typed fragment for ordering results.
function scoreAdvancedSearchSuggestion(suggestion, fragment) {
	if (!fragment) {
		return 0;
	}

	const normalizedFragment = normalizeSearchKey(fragment);
	const normalizedLabel = normalizeSearchKey(suggestion.label);
	const rawFragment = String(fragment).trim().toLowerCase();
	const rawLabel = suggestion.label.toLowerCase();

	if (!normalizedFragment && rawFragment) {
		if (rawLabel === rawFragment) {
			return 0;
		}
		if (rawLabel.startsWith(rawFragment)) {
			return 1;
		}
		if (rawLabel.includes(rawFragment)) {
			return 2;
		}
		return 99;
	}

	if (normalizedLabel === normalizedFragment) {
		return 0;
	}
	if (normalizedLabel.startsWith(normalizedFragment)) {
		return 1;
	}
	if (normalizedLabel.includes(normalizedFragment)) {
		return 2;
	}
	return 99;
}

// Filters and sorts suggestion candidates using fragment match quality and category priority.
function filterAdvancedSearchSuggestions(suggestions, fragment) {
	const normalizedFragment = normalizeSearchKey(fragment);
	const rawFragment = String(fragment || '').trim().toLowerCase();
	let matches = suggestions;

	if (normalizedFragment) {
		matches = suggestions.filter(suggestion => normalizeSearchKey(suggestion.label).includes(normalizedFragment));
	}
	else if (rawFragment) {
		matches = suggestions.filter(suggestion => suggestion.label.toLowerCase().includes(rawFragment));
	}

	return matches
		.sort((left, right) => {
			const priorityDiff = (left.priority || 0) - (right.priority || 0);
			if (priorityDiff !== 0) {
				return priorityDiff;
			}
			const scoreDiff = scoreAdvancedSearchSuggestion(left, fragment) - scoreAdvancedSearchSuggestion(right, fragment);
			if (scoreDiff !== 0) {
				return scoreDiff;
			}
			return left.label.localeCompare(right.label);
		});
}

// Quotes an autocomplete value so it can be inserted safely into the search string.
function quoteAdvancedSearchValue(value) {
	return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;
}

// Generates value suggestions appropriate for the selected attribute type.
function buildAdvancedSearchValueSuggestions(attribute) {
	if (!attribute) {
		return [];
	}

	if (attribute.kind === 'number') {
		return attribute.samples.map(sample => ({
			label: String(sample),
			insertText: String(sample),
			meta: attribute.kind,
			category: 'value'
		}));
	}

	if (attribute.kind === 'boolean') {
		return attribute.values.map(value => ({
			label: value,
			insertText: value,
			meta: attribute.kind,
			category: 'value'
		}));
	}

	return attribute.values.map(value => ({
		label: value,
		insertText: quoteAdvancedSearchValue(value),
		meta: attribute.kind,
		category: 'value'
	}));
}

// Converts saved query history into autocomplete entries.
function getAdvancedSearchHistorySuggestions() {
	return advancedSearchHistory.map(query => ({
		label: query,
		insertText: query,
		meta: 'history',
		category: 'history',
		priority: -1
	}));
}

// Returns autocomplete suggestions for either history, plain-name mode, or AST mode.
function getAdvancedSearchAutocompleteSuggestions(input, cursorIndex) {
	if (!isAdvancedSearchAutocompleteEnabled()) {
		return [];
	}

	const metadata = buildAdvancedSearchAutocompleteMetadata();

	if (!String(input || '').trim()) {
		return getAdvancedSearchHistorySuggestions();
	}

	const plainNameContext = getPlainNameSearchAutocompleteContext(input, cursorIndex);
	if (plainNameContext) {
		const reservedSuggestions = getAdvancedSearchReservedKeywordSuggestions(plainNameContext.fragment);
		const reservedLabels = new Set(reservedSuggestions.map(suggestion => normalizeSearchKey(suggestion.label)));
		const attributeSuggestions = [
			...reservedSuggestions,
			...metadata.attributes
				.filter(attribute => !reservedLabels.has(normalizeSearchKey(attribute.name)))
				.map(attribute => ({
				label: attribute.name,
				insertText: attribute.name,
				meta: attribute.kind,
				category: 'attribute',
				priority: 1
				}))
		];

		return filterAdvancedSearchSuggestions(
			[
				...metadata.byName.name.values.map(name => ({
					label: name,
					insertText: name,
					meta: 'pokemon',
					category: 'pokemonNameSearch',
					priority: 0
				})),
				...attributeSuggestions
			],
			plainNameContext.fragment
		);
	}

	const context = getAdvancedSearchAutocompleteContext(input, cursorIndex);
	if (!context || (context.activeToken && context.activeToken.type === 'unknown')) {
		return [];
	}

	switch (context.state) {
		case 'expectAttribute':
			return filterAdvancedSearchSuggestions(
				buildAdvancedSearchAttributeSuggestions(metadata, context.fragment),
				context.fragment
			);
		case 'expectOperator':
			if (!context.attribute) {
				return [];
			}
			if (context.attribute.kind === 'boolean') {
				const suggestions = [
					{ label: 'and', insertText: 'and', meta: 'logical', category: 'logical', priority: 0 },
					{ label: 'or', insertText: 'or', meta: 'logical', category: 'logical', priority: 0 },
					{ label: '=', insertText: '=', meta: 'operator', category: 'operator', priority: 1 },
					{ label: '!=', insertText: '!=', meta: 'operator', category: 'operator', priority: 1 },
					{ label: 'not', insertText: 'not', meta: 'operator', category: 'operator', priority: 1 }
				];
				if (context.stack.includes('expression')) {
					suggestions.push({ label: ')', insertText: ')', meta: 'close group', category: 'delimiter', priority: 0 });
				}
				return filterAdvancedSearchSuggestions(suggestions, context.fragment);
			}
			return filterAdvancedSearchSuggestions(
				getAdvancedSearchOperatorSuggestions(context.attribute).map(operator => ({
					label: operator,
					insertText: operator,
					meta: 'operator',
					category: 'operator'
				})),
				context.fragment
			);
		case 'expectValue':
		case 'expectValueListItem':
			return filterAdvancedSearchSuggestions(buildAdvancedSearchValueSuggestions(context.attribute), context.fragment);
		case 'expectValueListDelimiter':
			return filterAdvancedSearchSuggestions([
				{ label: ',', insertText: ',', meta: 'separator', category: 'delimiter' },
				{ label: ')', insertText: ')', meta: 'close list', category: 'delimiter' }
			], context.fragment);
		case 'expectLogicalOrEnd': {
			const suggestions = [
				{ label: 'and', insertText: 'and', meta: 'logical', category: 'logical' },
				{ label: 'or', insertText: 'or', meta: 'logical', category: 'logical' }
			];
			if (context.stack.includes('expression')) {
				suggestions.push({ label: ')', insertText: ')', meta: 'close group', category: 'delimiter' });
			}
			return filterAdvancedSearchSuggestions(suggestions, context.fragment);
		}
		default:
			return [];
	}
}

// Applies a selected suggestion into the input and restores cursor/focus state.
function applyAdvancedSearchAutocompleteSuggestion(suggestion) {
	const input = getAdvancedSearchInputElement();
	if (!input || !suggestion || !isAdvancedSearchCategorySelected()) {
		return;
	}

	const cursorIndex = input.selectionStart ?? input.value.length;
	const plainNameContext = getPlainNameSearchAutocompleteContext(input.value, cursorIndex);
	if (suggestion.category === 'history') {
		input.value = suggestion.insertText;
		input.focus();
		input.setSelectionRange(input.value.length, input.value.length);
		advancedSearchLastInputValue = input.value;
		refreshAdvancedSearchAutocomplete();
		return;
	}

	if (plainNameContext && suggestion.category === 'pokemonNameSearch') {
		input.value =
			input.value.slice(0, plainNameContext.rangeStart) +
			suggestion.insertText +
			input.value.slice(plainNameContext.rangeEnd);
		input.focus();
		input.setSelectionRange(suggestion.insertText.length, suggestion.insertText.length);
		refreshAdvancedSearchAutocomplete();
		return;
	}

	const context = getAdvancedSearchAutocompleteContext(input.value, cursorIndex);
	if (!context) {
		return;
	}

	let replacement = suggestion.insertText;
	const previousChar = context.rangeStart > 0 ? input.value[context.rangeStart - 1] : '';

	if (
		['operator', 'logical', 'value', 'reservedKeyword'].includes(suggestion.category) &&
		previousChar &&
		!/\s|\(|,/.test(previousChar)
	) {
		replacement = ` ${replacement}`;
	}

	if (
		suggestion.category === 'operator' ||
		suggestion.category === 'logical' ||
		suggestion.category === 'reservedKeyword' ||
		suggestion.insertText === ','
	) {
		replacement += ' ';
	}

	const nextChar = input.value[context.rangeEnd] || '';
	if (nextChar && /\S/.test(nextChar) && suggestion.insertText === ')') {
		replacement += ' ';
	}

	const newValue =
		input.value.slice(0, context.replacementStart) +
		replacement +
		input.value.slice(context.replacementEnd);
	const newCursor = context.replacementStart + replacement.length;

	input.value = newValue;
	input.focus();
	input.setSelectionRange(newCursor, newCursor);
	advancedSearchLastInputValue = input.value;
	refreshAdvancedSearchAutocomplete();
}

// Opens the modal that documents the advanced-search syntax.
function showAdvancedSearchGuide() {
	$('#advancedSearchGuideModal').modal('show');
}

// Returns the user-facing ability name, including special handling for As One variants.
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

// Returns the description text for a given ability id.
function getAbilityDescriptionById(abilityId) {
	if (!abilities || !abilities[abilityId]) {
		return '';
	}

	return abilities[abilityId].description;
}

// Applies normal filters plus the advanced-search predicate to build the live result set.
function getFilteredSpeciesResults() {
	let results = Object.values(species);
	for (const activeFilter of Object.values(filters).reduce((list, filter) => list.concat(filter.active), [])) {
		results = results.filter(activeFilter.func);
	}

	if ((typeof isAvailableOnlyEnabled === 'function' && isAvailableOnlyEnabled()) || getAppearanceSetting('availableOnly', false) === true) {
		results = results.filter(mon => buildSpeciesSearchRecord(mon).booleans.available === true);
	}

	if (advancedSearchPredicate) {
		results = results.filter(mon => advancedSearchPredicate(mon));
	}

	return results;
}

// Renders the current result set and refreshes the advanced-search status message.
function refreshSpeciesResults() {
	const results = getFilteredSpeciesResults();
	renderSpeciesResults(results);
	updateAdvancedSearchStatus(null, false, results);
}

// Updates the search status area with either an error or the current match count.
function updateAdvancedSearchStatus(message = null, isError = false, results = null) {
	const status = document.getElementById('advancedSearchStatus');
	if (!status) {
		return;
	}

	if (message !== null) {
		status.textContent = message;
		status.className = isError ? 'error' : 'success';
		return;
	}

	if (!advancedSearchPredicate) {
		status.textContent = '';
		status.className = '';
		return;
	}

	const activeResults = Array.isArray(results) ? results : getFilteredSpeciesResults();
	status.textContent = `${activeResults.length} Pokemon match the advanced search.`;
	status.className = 'success';
}

// Writes a one-off status message into the shared advanced-search status line.
function setAdvancedSearchInlineStatus(message = '', tone = '') {
	const status = document.getElementById('advancedSearchStatus');
	if (!status) {
		return;
	}

	status.textContent = message;
	status.className = tone;
}

// Parses and activates the advanced-search query, then refreshes the displayed species.
function runAdvancedSearch() {
	const input = getAdvancedSearchInputElement();
	if (!input) {
		return;
	}

	const query = input.value.trim();
	if (!query) {
		clearAdvancedSearch();
		return;
	}

	try {
		const ast = parseAdvancedSearchWithFallback(query);
		const predicate = mon => evaluateAdvancedSearch(ast, mon);
		predicate(Object.values(species)[0]);
		advancedSearchAst = ast;
		advancedSearchPredicate = predicate;
		advancedSearchQuery = query;
		advancedSearchLastInputValue = input.value;
		rememberAdvancedSearchQuery(query);
		hideAdvancedSearchAutocomplete();
		if (typeof updateIntegratedSearchControls === 'function') {
			updateIntegratedSearchControls();
		}
		refreshSpeciesResults();
	}
	catch (error) {
		updateAdvancedSearchStatus(error.message, true);
	}
}

// Clears the active query, predicate, and autocomplete state back to defaults.
function clearAdvancedSearch() {
	const input = getAdvancedSearchInputElement();
	if (input) {
		input.value = '';
	}

	advancedSearchLastInputValue = '';
	clearAdvancedSearchPredicateState();
	hideAdvancedSearchAutocomplete();
	if (typeof updateIntegratedSearchControls === 'function') {
		updateIntegratedSearchControls();
	}
	refreshSpeciesResults();
}

// Normalizes free text for case-insensitive, punctuation-tolerant comparisons.
function normalizeSearchText(value) {
	return String(value ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

// Normalizes keys for attribute and value lookup without whitespace or punctuation.
function normalizeSearchKey(value) {
	return String(value ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

// Escapes arbitrary text so it can be used as a literal regex fragment.
function escapeSearchRegex(value) {
	return String(value ?? '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Deduplicates a list of strings while discarding empty values.
function uniqStrings(values) {
	return Array.from(new Set(values.filter(Boolean)));
}

// Matches a normalized location fragment as a plain substring inside the full location label.
function locationPhraseIncludes(actualValue, expectedValue) {
	if (!expectedValue) {
		return false;
	}

	return actualValue.includes(expectedValue);
}

// Returns true when an attribute should support ordered location-range comparisons.
function isOrderedLocationComparisonAttribute(attribute) {
	return isLocationRenderScopedAttribute(attribute);
}

// Returns true for the numeric-style operators allowed on ordered location fields.
function isOrderedLocationComparisonOperator(operator) {
	return ['>', '>=', '<', '<='].includes(String(operator ?? '').toLowerCase());
}

// Rebuilds the original-game location list in the same area-id order used by grouped rendering.
function buildOriginalAdvancedSearchOrderedLocationNames() {
	const uniqueEntries = new Map();
	const locationIndex = typeof getSpeciesLocationIndex === 'function'
		? getSpeciesLocationIndex()
		: new Map();

	for (const entries of locationIndex.values()) {
		for (const entry of entries || []) {
			if (!entry?.name) {
				continue;
			}

			const key = entry.key || `${entry.areaId ?? Number.MAX_SAFE_INTEGER}:${entry.name}`;
			if (!uniqueEntries.has(key)) {
				uniqueEntries.set(key, entry);
			}
		}
	}

	const orderedNames = Array.from(uniqueEntries.values())
		.sort((left, right) =>
			(left.areaId ?? Number.MAX_SAFE_INTEGER) - (right.areaId ?? Number.MAX_SAFE_INTEGER) ||
			(left.name || '').localeCompare(right.name || '')
		)
		.map(entry => entry.name);

	if (!orderedNames.includes('None')) {
		orderedNames.push('None');
	}

	return orderedNames;
}

// Returns the full ordered location list for either resolved or original encounter data.
function getAdvancedSearchOrderedLocationNames(useResolvedLocations = true) {
	if (useResolvedLocations && typeof getDefaultSearchLocationNames === 'function') {
		return getDefaultSearchLocationNames();
	}

	return buildOriginalAdvancedSearchOrderedLocationNames();
}

// Caches normalized location-name ranks so range queries compare by in-game location order.
function buildAdvancedSearchLocationOrderMap(useResolvedLocations = true) {
	const cachedMap = useResolvedLocations
		? advancedSearchResolvedLocationOrderMap
		: advancedSearchOriginalLocationOrderMap;
	if (cachedMap) {
		return cachedMap;
	}

	const orderMap = new Map();
	getAdvancedSearchOrderedLocationNames(useResolvedLocations).forEach((locationName, index) => {
		const normalizedLocationName = normalizeSearchText(locationName);
		if (!normalizedLocationName || normalizedLocationName === 'none' || orderMap.has(normalizedLocationName)) {
			return;
		}

		orderMap.set(normalizedLocationName, index);
	});

	if (useResolvedLocations) {
		advancedSearchResolvedLocationOrderMap = orderMap;
		return advancedSearchResolvedLocationOrderMap;
	}

	advancedSearchOriginalLocationOrderMap = orderMap;
	return advancedSearchOriginalLocationOrderMap;
}

// Resolves one display location name to its sortable in-game order rank.
function resolveAdvancedSearchLocationOrder(locationName, attribute) {
	const normalizedLocationName = normalizeSearchText(locationName);
	if (!normalizedLocationName || normalizedLocationName === 'none') {
		return null;
	}

	const useResolvedLocations = !['locationoriginal', 'locationsoriginal'].includes(normalizeSearchKey(attribute));
	return buildAdvancedSearchLocationOrderMap(useResolvedLocations).get(normalizedLocationName) ?? null;
}

// Applies one ordered comparison to two pre-resolved location ranks.
function compareAdvancedSearchLocationOrders(actualOrder, operator, expectedOrder) {
	switch (operator) {
		case '>':
			return actualOrder > expectedOrder;
		case '>=':
			return actualOrder >= expectedOrder;
		case '<':
			return actualOrder < expectedOrder;
		case '<=':
			return actualOrder <= expectedOrder;
		default:
			return false;
	}
}

// Evaluates location range queries by comparing the earliest obtainable location in the species record.
function evaluateOrderedLocationComparison(actualList, operator, expected, attribute) {
	if (typeof expected === 'number') {
		throw new Error(`Attribute "${attribute}" only supports location-name comparisons.`);
	}

	const expectedValues = Array.isArray(expected) ? expected : [expected];
	if (expectedValues.length !== 1) {
		throw new Error(`Operator "${operator}" only supports one location value for "${attribute}".`);
	}

	const expectedOrder = resolveAdvancedSearchLocationOrder(expectedValues[0], attribute);
	if (expectedOrder === null) {
		return false;
	}

	const actualOrders = actualList
		.map(locationName => resolveAdvancedSearchLocationOrder(locationName, attribute))
		.filter(order => typeof order === 'number');
	if (!actualOrders.length) {
		return false;
	}

	return compareAdvancedSearchLocationOrders(Math.min(...actualOrders), operator, expectedOrder);
}

// Evaluates one grouped-location title against an ordered location range query.
function evaluateOrderedLocationNameComparison(locationName, operator, expected, attribute) {
	const expectedValues = Array.isArray(expected) ? expected : [expected];
	if (expectedValues.length !== 1) {
		return false;
	}

	const actualOrder = resolveAdvancedSearchLocationOrder(locationName, attribute);
	const expectedOrder = resolveAdvancedSearchLocationOrder(expectedValues[0], attribute);
	if (actualOrder === null || expectedOrder === null) {
		return false;
	}

	return compareAdvancedSearchLocationOrders(actualOrder, operator, expectedOrder);
}

// Builds the species ability package, applying randomizer and Hardcore overrides when needed.
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
			}
			else if (state.abilityReplacements.has(mappedId)) {
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

// Converts a move id into a normalized move detail object for exports and search.
function buildMoveDetail(moveId, source, level = null) {
	const move = moves[moveId];
	if (!move) {
		return null;
	}

	return {
		id: move.ID,
		name: move.name,
		type: types[move.type].name,
		category: splits[move.split],
		power: move.power,
		accuracy: move.accuracy,
		pp: move.pp,
		priority: move.priority,
		target: move.target,
		secondaryEffectChance: move.secondaryEffectChance,
		description: move.description,
		source,
		level
	};
}

// Builds the move row payload shown inside a species detail panel.
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

// Returns whether a move remains legal for the species under Hardcore rules.
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

// Builds the full learnset package for a species, grouped by acquisition source.
function getSpeciesMovePackage(mon, hardcoreMode = false) {
	const cache = hardcoreMode ? movePackageCache.hardcore : movePackageCache.base;
	if (cache.has(mon.ID)) {
		return cache.get(mon.ID);
	}

	const bySource = {
		levelUp: [],
		tmhm: [],
		tutor: [],
		egg: [],
		event: [],
		preEvolution: []
	};
	const all = [];
	const summary = [];
	const byId = new Map();

	const pushMove = function(moveId, source, level = null) {
		const mappedMoveId = getMappedMove(moveId, mon.ID);
		if (mappedMoveId === undefined || !moves[mappedMoveId]) {
			return;
		}

		if (hardcoreMode && !isHardcoreMoveLegal(mon, mappedMoveId)) {
			return;
		}

		const detail = buildMoveDetail(mappedMoveId, source, level);
		if (!detail) {
			return;
		}
		bySource[source].push(detail);
		if (!byId.has(mappedMoveId)) {
			byId.set(mappedMoveId, detail);
			all.push(detail);
			summary.push({ name: detail.name, type: detail.type });
		}
	};

	for (const [moveId, level] of mon.levelupMoves || []) {
		pushMove(moveId, 'levelUp', level);
	}

	for (const tmIndex of mon.tmMoves || []) {
		pushMove(tmMoves[tmIndex], 'tmhm');
	}

	for (const tutorIndex of mon.tutorMoves || []) {
		pushMove(tutorMoves[tutorIndex], 'tutor');
	}

	for (const moveId of mon.eggMoves || []) {
		pushMove(moveId, 'egg');
	}

	for (const moveId of mon.eventMoves || []) {
		pushMove(moveId, 'event');
	}

	for (const moveId of mon.prevoMoves || []) {
		pushMove(moveId, 'preEvolution');
	}

	const payload = {
		bySource,
		all,
		summary
	};
	cache.set(mon.ID, payload);
	return payload;
}

// Summarizes which moves were removed from a species in Hardcore mode and why.
function getSpeciesHardcoreMoveAdjustments(mon) {
	const baseMoves = getSpeciesMovePackage(mon, false).all;
	const hardcoreMoves = new Set(getSpeciesMovePackage(mon, true).all.map(move => move.id));
	const state = buildHardcoreState();
	const removed = [];

	for (const move of baseMoves) {
		if (hardcoreMoves.has(move.id)) {
			continue;
		}

		let reason = 'Globally banned in Hardcore.';
		if (state.restrictedMoveIds.has(move.id)) {
			reason = 'Restricted in Hardcore to the documented less-viable species list.';
		}

		removed.push({
			name: move.name,
			type: move.type,
			reason
		});
	}

	return removed;
}

// Returns whether the species belongs to the canonical Legendary group.
function isLegendarySpecies(mon) {
	return ADVANCED_SEARCH_LEGENDARY_DEX_IDS.has(mon.dexID);
}

// Returns whether the species belongs to the canonical Mythical group.
function isMythicalSpecies(mon) {
	return ADVANCED_SEARCH_MYTHICAL_DEX_IDS.has(mon.dexID);
}

// Formats the species' forward evolutions for display or export.
function getSpeciesEvolutionEntries(mon) {
	return (mon.evolutions || []).map(evo => ({
		to: species[evo[2]]?.key,
		method: describeEvolutionMethod(evo)
	}));
}

// Finds the immediate pre-evolution entry for a species, if one exists.
function getSpeciesPreEvolution(mon) {
	const parent = Object.values(species).find(candidate =>
		(candidate.evolutions || []).some(evolution => evolution[2] === mon.ID)
	);

	if (!parent) {
		return null;
	}

	const evolution = parent.evolutions.find(entry => entry[2] === mon.ID);
	return {
		from: parent.key,
		method: describeEvolutionMethod(evolution)
	};
}

// Returns every member of a species family using the shared ancestor id.
function getSpeciesFamily(mon) {
	return Object.values(species)
		.filter(candidate => candidate.ancestor === mon.ancestor)
		.sort(cmp(x => x.dexID));
}

// Returns true when the location list contains a real obtainable source instead of `None`.
function hasObtainableLocationNames(locationNames) {
	return locationNames.some(locationName => normalizeSearchText(locationName) !== 'none');
}

// Checks whether any species in the evolution line is obtainable in the current save context.
function isSpeciesFamilyAvailable(familyMembers) {
	return familyMembers.some(relative => hasObtainableLocationNames(getSpeciesLocationNames(relative.ID)));
}

// Converts a raw evolution tuple into the human-readable evolution description.
function describeEvolutionMethod(evolution) {
	const evo = evolution;
	return eval(evolutions[evo[0]]);
}

// Builds the normalized search record used by the advanced-search evaluator.
function buildSpeciesSearchRecord(mon) {
	if (speciesSearchCache.has(mon.ID)) {
		return speciesSearchCache.get(mon.ID);
	}

	const baseAbilities = getSpeciesAbilityPackage(mon, false);
	const hardcoreAbilities = getSpeciesAbilityPackage(mon, true);
	const baseMoves = getSpeciesMovePackage(mon, false);
	const hardcoreMoves = getSpeciesMovePackage(mon, true);
	const familyMembers = getSpeciesFamily(mon);
	const family = familyMembers.map(relative => relative.key);
	const locations = getSpeciesLocationNames(mon.ID);
	const originalLocations = getSpeciesOriginalLocationNames(mon.ID);
	const originalSpecies = getSpeciesOriginalSearchNames(mon);
	const record = {
		name: mon.key,
		numbers: {
			hp: mon.stats[0],
			atk: mon.stats[1],
			def: mon.stats[2],
			spe: mon.stats[3],
			speed: mon.stats[3],
			spa: mon.stats[4],
			spatk: mon.stats[4],
			spd: mon.stats[5],
			spdef: mon.stats[5],
			bst: mon.stats.reduce((total, stat) => total + stat, 0),
			dex: mon.dexID,
			dexid: mon.dexID
		},
		booleans: {
			available: isSpeciesFamilyAvailable(familyMembers),
			legendary: isLegendarySpecies(mon),
			mythical: isMythicalSpecies(mon)
		},
		lists: {
			type: mon.type.map(typeId => types[typeId].name),
			types: mon.type.map(typeId => types[typeId].name),
			ability: uniqStrings(baseAbilities.map(ability => ability.name)),
			abilities: uniqStrings(baseAbilities.map(ability => ability.name)),
			hardcoreability: uniqStrings(hardcoreAbilities.map(ability => ability.name)),
			hardcoreabilities: uniqStrings(hardcoreAbilities.map(ability => ability.name)),
			move: baseMoves.all.map(move => move.name),
			moves: baseMoves.all.map(move => move.name),
			moveset: baseMoves.all.map(move => move.name),
			hardcoremove: hardcoreMoves.all.map(move => move.name),
			hardcoremoves: hardcoreMoves.all.map(move => move.name),
			hardcoremoveset: hardcoreMoves.all.map(move => move.name),
			evolution: family,
			evolutions: family,
			item: (mon.items || []).filter(Boolean).map(itemId => items[itemId].name),
			items: (mon.items || []).filter(Boolean).map(itemId => items[itemId].name),
			location: locations,
			locations,
			locationoriginal: originalLocations,
			locationsoriginal: originalLocations,
			originalpokemon: originalSpecies,
			originalspecies: originalSpecies,
			egggroup: (mon.eggGroup || []).filter(Boolean).map(groupId => eggGroups[groupId]),
			egggroups: (mon.eggGroup || []).filter(Boolean).map(groupId => eggGroups[groupId])
		}
	};

	speciesSearchCache.set(mon.ID, record);
	return record;
}

// Tokenizes a complete advanced-search query and throws on invalid characters/syntax.
function tokenizeAdvancedSearch(input) {
	input = normalizeAdvancedSearchInput(input);
	const tokens = [];
	let index = 0;

	while (index < input.length) {
		const current = input[index];
		if (/\s/.test(current)) {
			index++;
			continue;
		}

		const twoChar = input.slice(index, index + 2);
		if (['>=', '<=', '!=', '==', '!~'].includes(twoChar)) {
			tokens.push({ type: 'operator', value: twoChar });
			index += 2;
			continue;
		}

		if (['(', ')', ','].includes(current)) {
			tokens.push({ type: current, value: current });
			index++;
			continue;
		}

		if (['>', '<', '=', '~'].includes(current)) {
			tokens.push({ type: 'operator', value: current });
			index++;
			continue;
		}

		if (current === '"' || current === '\'') {
			const quote = current;
			let value = '';
			index++;
			while (index < input.length && input[index] !== quote) {
				if (input[index] === '\\' && index + 1 < input.length) {
					value += input[index + 1];
					index += 2;
					continue;
				}
				value += input[index];
				index++;
			}
			if (input[index] !== quote) {
				throw new Error('Unterminated string literal in advanced search.');
			}
			index++;
			tokens.push({ type: 'string', value });
			continue;
		}

		if (/[0-9]/.test(current)) {
			let value = current;
			index++;
			while (index < input.length && /[0-9.]/.test(input[index])) {
				value += input[index];
				index++;
			}
			tokens.push({ type: 'number', value });
			continue;
		}

		if (/[A-Za-z_]/.test(current)) {
			let value = current;
			index++;
			while (index < input.length && /[A-Za-z0-9_.-]/.test(input[index])) {
				value += input[index];
				index++;
			}
			tokens.push({ type: 'word', value });
			continue;
		}

		throw new Error(`Unexpected character "${current}" in advanced search.`);
	}

	return tokens;
}

// Parses the advanced-search grammar into an evaluatable AST.
function parseAdvancedSearch(input) {
	const tokens = tokenizeAdvancedSearch(input);
	let index = 0;

	const peek = () => tokens[index];
	const consume = () => tokens[index++];
	const matchWord = word => peek() && peek().type === 'word' && peek().value.toLowerCase() === word;
	const matchType = type => peek() && peek().type === type;

	const parseExpression = () => parseOrExpression();

	const parseOrExpression = () => {
		let expression = parseAndExpression();
		while (matchWord('or')) {
			consume();
			expression = {
				type: 'logical',
				operator: 'or',
				left: expression,
				right: parseAndExpression()
			};
		}
		return expression;
	};

	const parseAndExpression = () => {
		let expression = parsePrimary();
		while (matchWord('and')) {
			consume();
			expression = {
				type: 'logical',
				operator: 'and',
				left: expression,
				right: parsePrimary()
			};
		}
		return expression;
	};

	const parsePrimary = () => {
		if (matchType('(')) {
			consume();
			const expression = parseExpression();
			if (!matchType(')')) {
				throw new Error('Missing closing ")" in advanced search.');
			}
			consume();
			return expression;
		}

		if (matchWord('not')) {
			consume();
			if (
				peek()?.type === 'word' &&
				isStandaloneAdvancedSearchAttribute(peek().value) &&
				isAdvancedSearchClauseBoundaryToken(tokens[index + 1])
			) {
				return {
					type: 'comparison',
					attribute: consume().value,
					operator: '=',
					value: false
				};
			}
			if (
				peek()?.type === 'word' &&
				getAdvancedSearchReservedKeyword(peek().value) &&
				isAdvancedSearchClauseBoundaryToken(tokens[index + 1])
			) {
				return negateAdvancedSearchAst(buildReservedAdvancedSearchAst(consume().value));
			}
			return {
				type: 'comparison',
				attribute: 'name',
				operator: 'not',
				value: parseValue()
			};
		}

		if (
			peek()?.type === 'word' &&
			getAdvancedSearchReservedKeyword(peek().value) &&
			isAdvancedSearchClauseBoundaryToken(tokens[index + 1])
		) {
			return buildReservedAdvancedSearchAst(consume().value);
		}

		return parseComparison();
	};

	const parseComparison = () => {
		const attributeToken = consume();
		if (!attributeToken || attributeToken.type !== 'word') {
			throw new Error('Expected an attribute name in advanced search.');
		}

		if (
			isStandaloneAdvancedSearchAttribute(attributeToken.value) &&
			isAdvancedSearchClauseBoundaryToken(peek())
		) {
			return {
				type: 'comparison',
				attribute: attributeToken.value,
				operator: '=',
				value: true
			};
		}

		const operatorToken = consume();
		if (!operatorToken) {
			throw new Error(`Missing operator after "${attributeToken.value}".`);
		}

		let operator = operatorToken.value.toLowerCase();
		if (operatorToken.type !== 'operator' && !['has', 'have', 'not'].includes(operator)) {
			throw new Error(`Unsupported operator "${operatorToken.value}".`);
		}

		if (operator === 'have') {
			operator = 'has';
		}

		return {
			type: 'comparison',
			attribute: attributeToken.value,
			operator,
			value: parseValue()
		};
	};

	const parseValue = () => {
		if (!peek()) {
			throw new Error('Missing value in advanced search.');
		}

		if (matchType('(')) {
			consume();
			const values = [];
			while (!matchType(')')) {
				values.push(parseScalar(true));
				if (matchType(',')) {
					consume();
					continue;
				}
				if (!matchType(')')) {
					throw new Error('Expected "," or ")" in value list.');
				}
			}
			consume();
			return values;
		}

		return parseScalar(false);
	};

	const parseScalar = stopAtComma => {
		const token = peek();
		if (!token) {
			throw new Error('Missing value in advanced search.');
		}

		if (token.type === 'string') {
			return consume().value;
		}

		if (token.type === 'number') {
			return Number(consume().value);
		}

		if (token.type !== 'word') {
			throw new Error(`Unexpected token "${token.value}" in advanced search value.`);
		}

		const words = [];
		while (peek() && peek().type === 'word') {
			const lower = peek().value.toLowerCase();
			if (lower === 'and' || lower === 'or') {
				break;
			}
			words.push(consume().value);
		}

		if (!stopAtComma) {
			return words.join(' ');
		}

		return words.join(' ');
	};

	const ast = parseExpression();
	if (index < tokens.length) {
		throw new Error(`Unexpected token "${tokens[index].value}" in advanced search.`);
	}
	return ast;
}

// Evaluates the parsed AST against a single species record.
function evaluateAdvancedSearch(ast, mon) {
	if (ast.type === 'logical') {
		if (ast.operator === 'and') {
			return evaluateAdvancedSearch(ast.left, mon) && evaluateAdvancedSearch(ast.right, mon);
		}
		return evaluateAdvancedSearch(ast.left, mon) || evaluateAdvancedSearch(ast.right, mon);
	}

	const record = buildSpeciesSearchRecord(mon);
	const attribute = normalizeSearchKey(ast.attribute);
	const numberValue = record.numbers[attribute];
	if (numberValue !== undefined) {
		return evaluateNumberComparison(numberValue, ast.operator, ast.value, ast.attribute);
	}

	const booleanValue = record.booleans?.[attribute];
	if (booleanValue !== undefined) {
		return evaluateBooleanComparison(booleanValue, ast.operator, ast.value, ast.attribute);
	}

	if (attribute === 'name' || attribute === 'pokemon' || attribute === 'species') {
		return evaluateStringComparison(record.name, ast.operator, ast.value, ast.attribute);
	}

	const listValue = record.lists[attribute];
	if (listValue !== undefined) {
		return evaluateListComparison(listValue, ast.operator, ast.value, ast.attribute);
	}

	throw new Error(`Unknown attribute "${ast.attribute}" in advanced search.`);
}

// Evaluates numeric comparisons such as BST, stats, or dex id checks.
function evaluateNumberComparison(actual, operator, expected, attribute) {
	if (typeof expected !== 'number') {
		throw new Error(`Attribute "${attribute}" only supports numeric comparisons.`);
	}

	switch (operator) {
		case '=':
		case '==':
			return actual === expected;
		case '!=':
		case 'not':
			return actual !== expected;
		case '>':
			return actual > expected;
		case '>=':
			return actual >= expected;
		case '<':
			return actual < expected;
		case '<=':
			return actual <= expected;
		default:
			throw new Error(`Operator "${operator}" is not valid for numbers.`);
	}
}

// Parses boolean query values from either quoted or unquoted `true` / `false` literals.
function parseBooleanSearchValue(expected, attribute) {
	if (typeof expected === 'boolean') {
		return expected;
	}

	if (Array.isArray(expected) || typeof expected === 'number') {
		throw new Error(`Attribute "${attribute}" only supports true/false values.`);
	}

	const normalizedValue = normalizeSearchText(expected);
	if (normalizedValue === 'true') {
		return true;
	}
	if (normalizedValue === 'false') {
		return false;
	}

	throw new Error(`Attribute "${attribute}" only supports true or false.`);
}

// Evaluates boolean comparisons such as availability checks.
function evaluateBooleanComparison(actual, operator, expected, attribute) {
	const expectedValue = parseBooleanSearchValue(expected, attribute);

	switch (operator) {
		case '=':
		case '==':
			return actual === expectedValue;
		case '!=':
		case 'not':
			return actual !== expectedValue;
		default:
			throw new Error(`Operator "${operator}" is not valid for booleans.`);
	}
}

// Evaluates string comparisons such as implicit or explicit name matching.
function evaluateStringComparison(actual, operator, expected, attribute) {
	if (typeof expected === 'number') {
		throw new Error(`Attribute "${attribute}" only supports string comparisons.`);
	}

	const actualValue = normalizeSearchText(actual);
	const expectedValues = Array.isArray(expected) ? expected : [expected];
	const normalizedExpected = expectedValues.map(value => normalizeSearchText(value));

	switch (operator) {
		case '=':
		case '==':
			if (normalizedExpected.length !== 1) {
				throw new Error(`Operator "${operator}" only supports one string value for "${attribute}".`);
			}
			return actualValue === normalizedExpected[0];
		case '!=':
		case 'not':
			if (normalizedExpected.length !== 1) {
				throw new Error(`Operator "${operator}" only supports one string value for "${attribute}".`);
			}
			return actualValue !== normalizedExpected[0];
		case 'has':
			return normalizedExpected.every(expectedValue => actualValue.includes(expectedValue));
		case '~':
			return normalizedExpected.some(expectedValue => actualValue.includes(expectedValue));
		case '!~':
			return normalizedExpected.every(expectedValue => !actualValue.includes(expectedValue));
		default:
			throw new Error(`Operator "${operator}" is not valid for strings.`);
	}
}

// Evaluates list comparisons, including exact, contains, include-any, and negation modes.
function evaluateListComparison(actualList, operator, expected, attribute = '') {
	if (isOrderedLocationComparisonAttribute(attribute) && isOrderedLocationComparisonOperator(operator)) {
		return evaluateOrderedLocationComparison(actualList, operator, expected, attribute);
	}

	const normalizedActual = actualList.map(normalizeSearchText);
	const expectedValues = Array.isArray(expected) ? expected : [expected];
	const normalizedExpected = expectedValues.map(value => normalizeSearchText(value));
	const matcher = isLocationRenderScopedAttribute(attribute)
		? locationPhraseIncludes
		: (actualValue, expectedValue) => actualValue.includes(expectedValue);
	const everyExpectedMatches = matcher => normalizedExpected.every(expectedValue => normalizedActual.some(actualValue => matcher(actualValue, expectedValue)));
	const anyExpectedMatches = matcher => normalizedExpected.some(expectedValue => normalizedActual.some(actualValue => matcher(actualValue, expectedValue)));

	switch (operator) {
		case '=':
		case '==':
			return everyExpectedMatches((actualValue, expectedValue) => actualValue === expectedValue);
		case 'has':
			return everyExpectedMatches(matcher);
		case '~':
			return anyExpectedMatches(matcher);
		case '!=':
		case 'not':
			return normalizedExpected.every(expectedValue => !normalizedActual.includes(expectedValue));
		case '!~':
			return !anyExpectedMatches(matcher);
		default:
			throw new Error(`Operator "${operator}" is not valid for list comparisons.`);
	}
}

// Clears only the active predicate/query state without touching the input element.
function clearAdvancedSearchPredicateState() {
	advancedSearchPredicate = null;
	advancedSearchQuery = '';
	advancedSearchAst = null;
	updateAdvancedSearchStatus();
}

// Returns true when the attribute should scope grouped rendering by location names.
function isLocationRenderScopedAttribute(attribute) {
	return ['location', 'locations', 'locationoriginal', 'locationsoriginal'].includes(normalizeSearchKey(attribute));
}

// Extracts only location-related comparisons from an advanced-search AST.
function extractLocationRenderAst(ast) {
	if (!ast) {
		return null;
	}

	if (ast.type === 'logical') {
		const left = extractLocationRenderAst(ast.left);
		const right = extractLocationRenderAst(ast.right);
		if (left && right) {
			return {
				type: 'logical',
				operator: ast.operator,
				left,
				right
			};
		}
		return left || right;
	}

	return isLocationRenderScopedAttribute(ast.attribute) ? ast : null;
}

// Evaluates one location name against a single location-search comparison node.
function evaluateLocationRenderComparison(locationName, comparison) {
	if (
		isOrderedLocationComparisonAttribute(comparison.attribute) &&
		isOrderedLocationComparisonOperator(comparison.operator)
	) {
		return evaluateOrderedLocationNameComparison(
			locationName,
			comparison.operator,
			comparison.value,
			comparison.attribute
		);
	}

	const actualValue = normalizeSearchText(locationName);
	const expectedValues = (Array.isArray(comparison.value) ? comparison.value : [comparison.value])
		.filter(value => value !== undefined && value !== null)
		.map(value => normalizeSearchText(value));

	switch (comparison.operator) {
		case '=':
		case '==':
			return expectedValues.some(expectedValue => actualValue === expectedValue);
		case '!=':
		case 'not':
			return expectedValues.every(expectedValue => actualValue !== expectedValue);
		case 'has':
			return expectedValues.every(expectedValue => locationPhraseIncludes(actualValue, expectedValue));
		case '~':
			return expectedValues.some(expectedValue => locationPhraseIncludes(actualValue, expectedValue));
		case '!~':
			return expectedValues.every(expectedValue => !locationPhraseIncludes(actualValue, expectedValue));
		default:
			return false;
	}
}

// Recursively applies the extracted location-only AST to a candidate location label.
function evaluateLocationRenderAst(ast, locationName) {
	if (!ast) {
		return true;
	}

	if (ast.type === 'logical') {
		if (ast.operator === 'and') {
			return evaluateLocationRenderAst(ast.left, locationName) && evaluateLocationRenderAst(ast.right, locationName);
		}
		return evaluateLocationRenderAst(ast.left, locationName) || evaluateLocationRenderAst(ast.right, locationName);
	}

	return evaluateLocationRenderComparison(locationName, ast);
}

// Resolves the active grouped-location scope from either default search or advanced search.
function getActiveLocationRenderNames() {
	if (typeof isLocationBaseOrderEnabled === 'function' && !isLocationBaseOrderEnabled()) {
		return null;
	}

	if (advancedSearchAst) {
		const locationAst = extractLocationRenderAst(advancedSearchAst);
		if (locationAst) {
			const candidateNames = new Set([
				...getAdvancedSearchLocationNames(),
				...getAdvancedSearchOriginalLocationNames()
			]);

			return new Set(
				Array.from(candidateNames).filter(locationName => evaluateLocationRenderAst(locationAst, locationName))
			);
		}
	}

	const defaultLocationFilter = filters?.Location?.active;
	if (Array.isArray(defaultLocationFilter) && defaultLocationFilter.length) {
		return new Set(defaultLocationFilter.map(active => active.option).filter(Boolean));
	}

	return null;
}

// Recursively collects species ids from mixed encounter/location data structures.
function collectAdvancedSearchAreaSpeciesIds(value, speciesIds = new Set()) {
	if (Array.isArray(value)) {
		const looksLikeEncounterTuple =
			value.length > 0 &&
			value.length <= 3 &&
			typeof value[0] === 'number' &&
			value[0] > 0 &&
			value[0] <= ADVANCED_SEARCH_MAX_LOCATION_SPECIES_ID &&
			value.slice(1).every(level => typeof level === 'number' && level >= 0 && level <= 100);
		const looksLikeRaidTuple =
			value.length === 2 &&
			typeof value[0] === 'number' &&
			value[0] > 0 &&
			value[0] <= ADVANCED_SEARCH_MAX_LOCATION_SPECIES_ID &&
			Array.isArray(value[1]);

		if (looksLikeEncounterTuple || looksLikeRaidTuple) {
			speciesIds.add(value[0]);
			return speciesIds;
		}

		if (value.length > 0 && value.every(entry => typeof entry === 'number')) {
			for (const speciesId of value) {
				if (speciesId > 0 && speciesId <= ADVANCED_SEARCH_MAX_LOCATION_SPECIES_ID) {
					speciesIds.add(speciesId);
				}
			}
			return speciesIds;
		}

		for (const entry of value) {
			collectAdvancedSearchAreaSpeciesIds(entry, speciesIds);
		}
		return speciesIds;
	}

	if (value && typeof value === 'object') {
		for (const nested of Object.values(value)) {
			collectAdvancedSearchAreaSpeciesIds(nested, speciesIds);
		}
	}

	return speciesIds;
}

// Returns whether a location bucket should count as an obtainable encounter source.
function isAdvancedSearchLocationBucket(bucket) {
	return bucket.includes('wild') || bucket.includes('fixed') || bucket.startsWith('raid') || bucket.includes('gift');
}

// Normalizes area + bucket labels into the display names used by location search.
function formatAdvancedSearchLocationName(areaName, bucket) {
	if (bucket.startsWith('raid')) {
		const starMatch = bucket.match(/^raid(\d+)$/);
		if (starMatch) {
			return `${areaName} Raid Dens (${Number(starMatch[1])}-star)`;
		}
		return `${areaName} Raid Dens`;
	}

	if (bucket.includes('gift')) {
		return `${areaName} Gift`;
	}

	return areaName;
}

// Sorts location entries into a stable order for display and search indexing.
function sortAdvancedSearchLocationEntries(entries) {
	return [...entries].sort((left, right) =>
		(left.areaName || left.name || '').localeCompare(right.areaName || right.name || '') ||
		(left.areaId || 0) - (right.areaId || 0) ||
		(left.name || '').localeCompare(right.name || '')
	);
}

// Returns canonical encounter entries for an original, non-randomized species id.
function getOriginalSpeciesLocationEntries(speciesId) {
	if (typeof getDirectSpeciesAreas === 'function') {
		return getDirectSpeciesAreas(speciesId) || [];
	}

	if (typeof getSpeciesLocationIndex === 'function') {
		return getSpeciesLocationIndex().get(speciesId) || [];
	}

	return [];
}

// Returns encounter entries after applying the active save's species randomizer mapping.
function getResolvedSpeciesLocationEntries(speciesId) {
	if (saveData?.random?.normalSpecies && typeof getRandomizedSpeciesAreas === 'function') {
		return getRandomizedSpeciesAreas(speciesId) || [];
	}

	return getOriginalSpeciesLocationEntries(speciesId);
}

// Builds a cached lookup from species id to searchable location names.
function buildAdvancedSearchLocationIndex(useResolvedLocations = true) {
	const cachedIndex = useResolvedLocations
		? advancedSearchResolvedLocationIndex
		: advancedSearchOriginalLocationIndex;
	if (cachedIndex) {
		return cachedIndex;
	}

	const locationIndex = new Map();
	const locationNames = new Set(['None']);
	const getEntries = useResolvedLocations
		? getResolvedSpeciesLocationEntries
		: getOriginalSpeciesLocationEntries;

	for (const mon of Object.values(species || {})) {
		if (!mon || typeof mon.ID !== 'number') {
			continue;
		}

		const entries = sortAdvancedSearchLocationEntries(getEntries(mon.ID));
		if (!entries.length) {
			continue;
		}

		locationIndex.set(mon.ID, entries);
		for (const entry of entries) {
			if (entry?.name) {
				locationNames.add(entry.name);
			}
		}
	}

	if (useResolvedLocations) {
		advancedSearchResolvedLocationIndex = locationIndex;
		advancedSearchResolvedLocationNames = sortSearchValues(Array.from(locationNames));
		return advancedSearchResolvedLocationIndex;
	}

	advancedSearchOriginalLocationIndex = locationIndex;
	advancedSearchOriginalLocationNames = sortSearchValues(Array.from(locationNames));
	return advancedSearchOriginalLocationIndex;
}

// Returns the searchable location names for the active save context.
function getAdvancedSearchLocationNames() {
	buildAdvancedSearchLocationIndex(true);
	return advancedSearchResolvedLocationNames || [];
}

// Returns the searchable location names from the original, non-randomized game data.
function getAdvancedSearchOriginalLocationNames() {
	buildAdvancedSearchLocationIndex(false);
	return advancedSearchOriginalLocationNames || [];
}

// Returns displayable location names for one species in the active save context.
function getSpeciesLocationNames(speciesId) {
	const entries = buildAdvancedSearchLocationIndex(true).get(speciesId) || [];
	return entries.length ? uniqStrings(entries.map(entry => entry.name)) : ['None'];
}

// Returns displayable original-game location names for one species.
function getSpeciesOriginalLocationNames(speciesId) {
	const entries = buildAdvancedSearchLocationIndex(false).get(speciesId) || [];
	return entries.length ? uniqStrings(entries.map(entry => entry.name)) : ['None'];
}

// Returns searchable original-species names for the active save context.
function getAdvancedSearchOriginalSpeciesNames() {
	const names = new Set(Object.values(species || {}).map(mon => mon.key));
	if (saveData?.random?.normalSpecies) {
		names.add('None');
	}
	return sortSearchValues(Array.from(names));
}

// Returns the original species that map to one displayed species in the current save.
function getSpeciesOriginalSearchNames(mon) {
	if (saveData?.random?.normalSpecies && typeof getRandomizedOriginalSpecies === 'function') {
		const originalSpecies = getRandomizedOriginalSpecies(mon.ID)
			.map(originalMon => originalMon?.key)
			.filter(Boolean);
		return originalSpecies.length ? uniqStrings(originalSpecies) : ['None'];
	}

	return [mon.key];
}
