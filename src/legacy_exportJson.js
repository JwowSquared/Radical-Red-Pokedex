// Archives the old full-dex JSON export feature without loading it on the live site.
// This file is intentionally not included by index.html.

// Builds the exported JSON record for one species, including hardcore-adjusted data.
function buildPokemonExport(mon) {
	const baseAbilities = getSpeciesAbilityPackage(mon, false);
	const hardcoreAbilities = getSpeciesAbilityPackage(mon, true);
	const baseMoves = getSpeciesMovePackage(mon, false);
	const hardcoreMoves = getSpeciesMovePackage(mon, true);
	const family = getSpeciesFamily(mon).map(relative => relative.key);

	return {
		id: mon.ID,
		dexId: mon.dexID,
		name: mon.key,
		baseName: mon.name,
		types: mon.type.map(typeId => types[typeId].name),
		stats: {
			hp: mon.stats[0],
			atk: mon.stats[1],
			def: mon.stats[2],
			spe: mon.stats[3],
			spa: mon.stats[4],
			spd: mon.stats[5],
			bst: mon.stats.reduce((total, stat) => total + stat, 0)
		},
		abilities: baseAbilities,
		heldItems: (mon.items || []).filter(Boolean).map(itemId => ({
			id: itemId,
			name: items[itemId].name,
			description: items[itemId].description
		})),
		eggGroups: (mon.eggGroup || []).filter(Boolean).map(groupId => eggGroups[groupId]),
		evolution: {
			preEvolution: getSpeciesPreEvolution(mon),
			nextEvolutions: getSpeciesEvolutionEntries(mon),
			family
		},
		changes: mon.changes || null,
		movesetSummary: baseMoves.summary,
		movesetDetailed: baseMoves.all,
		learnsets: baseMoves.bySource,
		hardcore: {
			abilities: hardcoreAbilities,
			removedMoves: getSpeciesHardcoreMoveAdjustments(mon),
			movesetSummary: hardcoreMoves.summary,
			movesetDetailed: hardcoreMoves.all,
			learnsets: hardcoreMoves.bySource
		}
	};
}

// Exports the full dex payload as JSON, using the loaded save name when available.
function exportPokemonData() {
	const payload = {
		meta: {
			repo,
			version,
			exportedAt: new Date().toISOString(),
			advancedSearchQuery,
			hardcoreRules: {
				globallyBannedMoves: HARDCORE_BANNED_MOVES,
				restrictedMoves: HARDCORE_RESTRICTED_MOVES,
				restrictedSpeciesCount: HARDCORE_RESTRICTED_SPECIES_IDS.length,
				abilityReplacements: HARDCORE_ABILITY_REPLACEMENTS
			}
		},
		pokemon: Object.values(species).map(buildPokemonExport)
	};

	const storedSaveData = getStoredExportSaveData();
	const saveName = sanitizeExportFileName(storedSaveData?.name);
	const fileName = saveName ? `rr-dex-export-${saveName}.json` : 'rr-dex-export.json';
	const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
	const link = document.createElement('a');
	const url = URL.createObjectURL(blob);
	link.href = url;
	link.download = fileName;
	link.style.display = 'none';
	document.body.appendChild(link);
	link.click();
	setTimeout(() => {
		URL.revokeObjectURL(url);
		link.remove();
	}, 60000);
}

// Returns the active save metadata, falling back to the last save cached in localStorage.
function getStoredExportSaveData() {
	if (saveData?.name) {
		return saveData;
	}

	try {
		const raw = localStorage.getItem('saveData');
		if (!raw) {
			return null;
		}
		return JSON.parse(raw);
	}
	catch {
		return null;
	}
}

// Converts a save name into a filesystem-safe filename fragment.
function sanitizeExportFileName(name) {
	if (!name) {
		return '';
	}

	return String(name)
		.trim()
		.replace(/[<>:"/\\|?*\x00-\x1F]/g, '-')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}
