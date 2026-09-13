(function(globalScope) {
	'use strict';

	const SAVE_SECTOR_DATA_SIZE = 0x0FF4;
	const SAVE_BLOCK1_LOGICAL_OFFSET = SAVE_SECTOR_DATA_SIZE;
	const SAVE_BLOCK1_FLAGS_OFFSET = SAVE_BLOCK1_LOGICAL_OFFSET + 0x0EE0;
	const STORY_FLAG_IDS = {
		badges: [
			0x820,
			0x821,
			0x822,
			0x823,
			0x824,
			0x825,
			0x826,
			0x827
		],
		pokemonReceived: 0x828,
		pokedexReceived: 0x829,
		gameClear: 0x82C,
		nationalDex: 0x840
	};

	// Reads one boolean story flag from the logical save layout used by the parent parser.
	function readLogicalSaveFlag(logicalSave, flagId) {
		const byteIndex = SAVE_BLOCK1_FLAGS_OFFSET + (flagId >> 3);
		const bitIndex = flagId & 7;
		return ((logicalSave.getUint8(byteIndex) >> bitIndex) & 1) === 1;
	}

	// Extracts the badge count and a few key progression bits from the current logical save.
	function readStoryFlagsFromLogicalSave(logicalSave) {
		const badges = STORY_FLAG_IDS.badges.map(flagId => readLogicalSaveFlag(logicalSave, flagId));
		const badgeCount = badges.filter(Boolean).length;
		const storyFlags = {
			badges,
			badgeCount,
			pokemonReceived: readLogicalSaveFlag(logicalSave, STORY_FLAG_IDS.pokemonReceived),
			pokedexReceived: readLogicalSaveFlag(logicalSave, STORY_FLAG_IDS.pokedexReceived),
			gameClear: readLogicalSaveFlag(logicalSave, STORY_FLAG_IDS.gameClear),
			nationalDex: readLogicalSaveFlag(logicalSave, STORY_FLAG_IDS.nationalDex)
		};

		return {
			...storyFlags,
			summary: summarizeStoryProgression(storyFlags)
		};
	}

	// Collapses the full progression flags into one short player-facing label.
	function summarizeStoryProgression(storyFlags) {
		if (!storyFlags) {
			return 'Unknown';
		}
		if (storyFlags.gameClear) {
			return 'Post-game';
		}
		if (storyFlags.badgeCount >= 8) {
			return 'Before E4';
		}
		if (storyFlags.badgeCount > 0) {
			return `${storyFlags.badgeCount}/8 badges`;
		}
		if (storyFlags.pokemonReceived || storyFlags.pokedexReceived) {
			return 'Early Game';
		}
		return 'New Game';
	}

	globalScope.saveProgression = {
		STORY_FLAG_IDS,
		readStoryFlagsFromLogicalSave,
		summarizeStoryProgression
	};
})(typeof globalThis !== 'undefined' ? globalThis : window);
