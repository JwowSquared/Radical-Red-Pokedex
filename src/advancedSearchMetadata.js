const ADVANCED_SEARCH_ATTRIBUTE_CONFIG = {
	hp: { kind: 'number', samples: [45, 60, 80, 100, 120] },
	atk: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	def: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	spa: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	spatk: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	spd: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	spdef: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	spe: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	speed: { kind: 'number', samples: [50, 75, 100, 120, 150] },
	bst: { kind: 'number', samples: [300, 450, 500, 550, 600] },
	dex: { kind: 'number', samples: [1, 151, 386, 721, 1025] },
	dexid: { kind: 'number', samples: [1, 151, 386, 721, 1025] },
	name: { kind: 'string', valuesKey: 'speciesNames' },
	pokemon: { kind: 'string', valuesKey: 'speciesNames' },
	species: { kind: 'string', valuesKey: 'speciesNames' },
	type: { kind: 'list', valuesKey: 'typeNames' },
	types: { kind: 'list', valuesKey: 'typeNames' },
	ability: { kind: 'list', valuesKey: 'abilityNames' },
	abilities: { kind: 'list', valuesKey: 'abilityNames' },
	hardcoreability: { kind: 'list', valuesKey: 'hardcoreAbilityNames' },
	hardcoreabilities: { kind: 'list', valuesKey: 'hardcoreAbilityNames' },
	move: { kind: 'list', valuesKey: 'moveNames' },
	moves: { kind: 'list', valuesKey: 'moveNames' },
	moveset: { kind: 'list', valuesKey: 'moveNames' },
	hardcoremove: { kind: 'list', valuesKey: 'hardcoreMoveNames' },
	hardcoremoves: { kind: 'list', valuesKey: 'hardcoreMoveNames' },
	hardcoremoveset: { kind: 'list', valuesKey: 'hardcoreMoveNames' },
	evolution: { kind: 'list', valuesKey: 'speciesNames' },
	evolutions: { kind: 'list', valuesKey: 'speciesNames' },
	item: { kind: 'list', valuesKey: 'itemNames' },
	items: { kind: 'list', valuesKey: 'itemNames' },
	location: { kind: 'list', valuesKey: 'locationNames' },
	locations: { kind: 'list', valuesKey: 'locationNames' },
	locationoriginal: { kind: 'list', valuesKey: 'locationOriginalNames' },
	locationsoriginal: { kind: 'list', valuesKey: 'locationOriginalNames' },
	originalpokemon: { kind: 'list', valuesKey: 'originalSpeciesNames' },
	originalspecies: { kind: 'list', valuesKey: 'originalSpeciesNames' },
	available: { kind: 'boolean', valuesKey: 'booleanValues' },
	legendary: { kind: 'boolean', valuesKey: 'booleanValues' },
	mythical: { kind: 'boolean', valuesKey: 'booleanValues' },
	egggroup: { kind: 'list', valuesKey: 'eggGroupNames' },
	egggroups: { kind: 'list', valuesKey: 'eggGroupNames' }
};

function createAdvancedSearchAutocompleteMetadata(valuesByKey) {
	const attributes = Object.entries(ADVANCED_SEARCH_ATTRIBUTE_CONFIG).map(([name, config]) => ({
		name,
		kind: config.kind,
		samples: config.samples || [],
		values: config.valuesKey ? (valuesByKey[config.valuesKey] || []) : []
	}));

	const byName = {};
	for (const attribute of attributes) {
		byName[attribute.name] = attribute;
	}

	return {
		attributes,
		byName
	};
}
