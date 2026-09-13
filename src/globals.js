let repo = "JwowSquared/Radical-Red-Pokedex";
let version = "rrdex release 1.3.0";

species = null;
moves = null;
abilities = null;
items = null;
areas = null;
tmMoves = null;
tutorMoves = null;
trainers = null;
natures = null;
eggGroups = null;
types = null;
splits = null;
evolutions = null;
scaledLevels = null;
caps = null;
sprites = null;
saveData = null;

let trackers = {};
let filters = {};
let appearanceSettings = {
	currentTeamVisible: true,
	gameProgressionVisible: false,
	locationBaseOrder: false,
	allowTextSelection: false,
	hardcoreChangesVisible: true,
	pokemonOffensiveVisible: true,
	patchedAbilityExperimental: false,
	advancedSearchSuggestionsEnabled: true,
	favoritesEnabled: false,
	availableOnly: false
};
let appearanceSettingsLoaded = false;

let currentSpeciesPanelState = null;

let scrollIntoView = true;
