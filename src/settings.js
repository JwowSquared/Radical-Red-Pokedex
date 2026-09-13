let appearanceSettingsHideTimer = null;
let appearanceSettingsVisibilityTimer = null;
let advancedSearchShortcutsHideTimer = null;
let advancedSearchShortcutsVisibilityTimer = null;
const ADVANCED_SEARCH_SHORTCUTS_STORAGE_KEY = 'advancedSearchShortcuts';
const ADVANCED_SEARCH_GUIDE_SUGGESTIONS = [
	{
		title: 'Sweeper',
		query: "((ability ~ ('huge','intrepid') and atk >= 95 and spe >= 90) or (ability = 'feline prowess' and spa >= 95 and spe >= 90)) and bst >= 520"
	},
	{
		title: 'Trade Pokemon',
		query: "name ~ ('snom','carbink','Pikipek','Florges','Furret','Murkrow','Dedenne','Aegislash','Ursaluna')"
	},
	{
		title: 'Traded Pokemon',
		query: "originalpokemon ~ ('Carnivine','Eiscue','Farfetch','Chatot','Morpeko','Mimikyu','Chillet','Aegislash','Ursaluna')"
	}
];
let advancedSearchShortcuts = [];
let advancedSearchShortcutDragState = null;

// Bootstraps the split feature set and reapplies persisted UI/search state.
function setupAdvancedFeatures() {
	buildHardcoreState();
	loadAppearanceSettings();
	loadAdvancedSearchHistory();
	loadAdvancedSearchShortcuts();
	setupAdvancedSearch();
	setupAdvancedSearchShortcutsMenu();
	setupAppearanceSettingsMenu();
	if (typeof setupFavoritesFeature === 'function') {
		setupFavoritesFeature();
	}
	applyAppearanceSettings();
	updateIntegratedSearchControls();
}

// Normalizes one saved quick-search entry into a safe query payload.
function normalizeAdvancedSearchShortcut(shortcut) {
	if (!shortcut || typeof shortcut !== 'object') {
		return null;
	}

	const query = String(shortcut.query || '').trim();
	if (!query) {
		return null;
	}

	return {
		query
	};
}

// Loads user-defined quick-search buttons from localStorage.
function loadAdvancedSearchShortcuts() {
	try {
		const raw = localStorage.getItem(ADVANCED_SEARCH_SHORTCUTS_STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		const shortcutList = Array.isArray(parsed)
			? parsed
			: Array.isArray(parsed?.quickSearches)
				? parsed.quickSearches
				: [];
		advancedSearchShortcuts = shortcutList
			.map(shortcut => normalizeAdvancedSearchShortcut(shortcut))
			.filter(Boolean);
	}
	catch {
		advancedSearchShortcuts = [];
	}
}

// Persists the current quick-search button list independently from uploaded save data.
function saveAdvancedSearchShortcuts() {
	try {
		localStorage.setItem(
			ADVANCED_SEARCH_SHORTCUTS_STORAGE_KEY,
			JSON.stringify(advancedSearchShortcuts)
		);
	}
	catch {}
}

// Loads persisted appearance preferences into the shared runtime settings object.
function loadAppearanceSettings() {
	const storedSettings = readAppearanceSettingsFromStorage();
	const advancedSearchSuggestionsEnabled =
		Object.prototype.hasOwnProperty.call(storedSettings, 'advancedSearchSuggestionsEnabled')
			? storedSettings.advancedSearchSuggestionsEnabled !== false
			: storedSettings.disableValueSuggestions !== true;
	appearanceSettings = {
		currentTeamVisible: storedSettings.currentTeamVisible !== false,
		gameProgressionVisible: storedSettings.gameProgressionVisible === true,
		locationBaseOrder: storedSettings.locationBaseOrder === true,
		allowTextSelection: storedSettings.allowTextSelection === true,
		hardcoreChangesVisible: storedSettings.hardcoreChangesVisible !== false,
		pokemonOffensiveVisible: storedSettings.pokemonOffensiveVisible !== false,
		patchedAbilityExperimental: storedSettings.patchedAbilityExperimental === true,
		advancedSearchSuggestionsEnabled,
		favoritesEnabled: storedSettings.favoritesEnabled === true || storedSettings.buildTeamEnabled === true,
		availableOnly: storedSettings.availableOnly === true
	};
	appearanceSettingsLoaded = true;
}

// Writes the current appearance settings back to localStorage.
function persistAppearanceSettings() {
	writeAppearanceSettingsToStorage(appearanceSettings);
}

// Returns whether grouped location ordering is enabled in the UI.
function isLocationBaseOrderEnabled() {
	return appearanceSettings.locationBaseOrder === true;
}

// Returns whether the current team panel should be shown.
function isCurrentTeamVisibleEnabled() {
	return appearanceSettings.currentTeamVisible !== false;
}

// Returns whether the short save progression summary should be shown below the current save line.
function isGameProgressionVisibleEnabled() {
	return appearanceSettings.gameProgressionVisible === true;
}

// Returns whether copy/select protection is disabled for the page.
function isTextSelectionEnabled() {
	return appearanceSettings.allowTextSelection === true;
}

// Returns whether the modal should show Hardcore-specific ability and original-species details.
function isHardcoreChangesVisibleEnabled() {
	return appearanceSettings.hardcoreChangesVisible !== false;
}

// Returns whether the species modal should show the offensive type-coverage row.
function isPokemonOffensiveVisibleEnabled() {
	return appearanceSettings.pokemonOffensiveVisible !== false;
}

// Returns whether random abilities should use the patched collision-free mapper.
function isPatchedAbilityExperimentalEnabled() {
	return appearanceSettings.patchedAbilityExperimental === true;
}

// Returns whether advanced search autocomplete should run at all.
function areAdvancedSearchSuggestionsEnabled() {
	return appearanceSettings.advancedSearchSuggestionsEnabled !== false;
}

// Returns whether Favorites should be visible and interactive.
function isFavoritesEnabled() {
	return appearanceSettings.favoritesEnabled === true;
}

// Returns whether species lists should always be filtered to obtainable Pokemon.
function isAvailableOnlyEnabled() {
	return appearanceSettings.availableOnly === true;
}

// Updates the current team visibility setting and rerenders the save panel if needed.
function setCurrentTeamVisibility(enabled, persist = true) {
	appearanceSettings.currentTeamVisible = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	if (typeof renderCurrentSavePokemon === 'function') {
		renderCurrentSavePokemon();
	}
	updateAppearanceSettingsControls();
}

// Toggles the short save progression line and refreshes it immediately when a save is loaded.
function setGameProgressionVisible(enabled, persist = true) {
	appearanceSettings.gameProgressionVisible = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	if (typeof renderCurrentSaveProgression === 'function') {
		renderCurrentSaveProgression();
	}
	updateAppearanceSettingsControls();
}

// Toggles location-based ordering and refreshes the species list immediately.
function setLocationBaseOrderEnabled(enabled, persist = true) {
	appearanceSettings.locationBaseOrder = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	updateAppearanceSettingsControls();
	refreshSpeciesResults();
}

// Toggles text selection behavior and reapplies the body class.
function setTextSelectionEnabled(enabled, persist = true) {
	appearanceSettings.allowTextSelection = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	applyTextSelectionSetting();
	updateAppearanceSettingsControls();
}

// Toggles the extra Hardcore/original-species detail blocks in the Pokemon modal.
function setHardcoreChangesVisible(enabled, persist = true) {
	appearanceSettings.hardcoreChangesVisible = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	updateAppearanceSettingsControls();
	if (typeof rerenderCurrentSpeciesPanel === 'function') {
		rerenderCurrentSpeciesPanel();
	}
}

// Toggles the offensive type-coverage block in the open Pokemon modal and future modal renders.
function setPokemonOffensiveVisible(enabled, persist = true) {
	appearanceSettings.pokemonOffensiveVisible = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	updateAppearanceSettingsControls();
	if (typeof rerenderCurrentSpeciesPanel === 'function') {
		rerenderCurrentSpeciesPanel();
	}
}

// Rebuilds cached ability/search data after toggling the experimental patched mapper.
function setPatchedAbilityExperimentalEnabled(enabled, persist = true) {
	appearanceSettings.patchedAbilityExperimental = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	if (typeof resetAdvancedFeatureCaches === 'function') {
		resetAdvancedFeatureCaches();
	}
	updateAppearanceSettingsControls();
	if (typeof refreshSpeciesResults === 'function') {
		refreshSpeciesResults();
	}
	if (typeof rerenderCurrentSpeciesPanel === 'function') {
		rerenderCurrentSpeciesPanel();
	}
}

// Enables or disables the advanced-search autocomplete pipeline entirely.
function setAdvancedSearchSuggestionsEnabled(enabled, persist = true) {
	appearanceSettings.advancedSearchSuggestionsEnabled = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	updateAppearanceSettingsControls();
	if (!enabled && typeof clearAdvancedSearchAutocompleteRuntime === 'function') {
		clearAdvancedSearchAutocompleteRuntime(true);
		return;
	}
	if (enabled && typeof refreshAdvancedSearchAutocomplete === 'function') {
		refreshAdvancedSearchAutocomplete();
	}
}

// Shows or hides Favorites controls and refreshes row icon state.
function setFavoritesEnabled(enabled, persist = true) {
	appearanceSettings.favoritesEnabled = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	updateAppearanceSettingsControls();
	if (typeof syncFavoritesFeatureVisibility === 'function') {
		syncFavoritesFeatureVisibility();
	}
	if (typeof refreshFavoritesRowStates === 'function') {
		refreshFavoritesRowStates();
	}
}

// Forces the species list to only show obtainable Pokemon in both search modes.
function setAvailableOnlyEnabled(enabled, persist = true) {
	appearanceSettings.availableOnly = enabled === true;
	if (persist) {
		persistAppearanceSettings();
	}
	updateAppearanceSettingsControls();
	refreshSpeciesResults();
}

// Applies all persisted appearance settings to the live page state.
function applyAppearanceSettings() {
	applyTextSelectionSetting();
	if (typeof renderCurrentSaveProgression === 'function') {
		renderCurrentSaveProgression();
	}
	if (typeof renderCurrentSavePokemon === 'function') {
		renderCurrentSavePokemon();
	}
	updateAppearanceSettingsControls();
	if (typeof syncFavoritesFeatureVisibility === 'function') {
		syncFavoritesFeatureVisibility();
	}
	updateIntegratedSearchControls();
	refreshSpeciesResults();
}

// Adds or removes the body class that allows text highlighting and copying.
function applyTextSelectionSetting() {
	document.body.classList.toggle('allowTextSelection', isTextSelectionEnabled());
}

// Syncs the settings popup controls with the current runtime state.
function updateAppearanceSettingsControls() {
	const currentTeamToggle = document.getElementById('appearanceCurrentTeamToggle');
	const gameProgressionToggle = document.getElementById('appearanceGameProgressionToggle');
	const advancedSearchSuggestionsOption = document.getElementById('appearanceAdvancedSearchSuggestionsOption');
	const advancedSearchSuggestionsToggle = document.getElementById('appearanceAdvancedSearchSuggestionsToggle');
	const favoritesToggle = document.getElementById('appearanceFavoritesToggle');
	const availableOnlyToggle = document.getElementById('appearanceAvailableOnlyToggle');
	const locationBaseOrderToggle = document.getElementById('appearanceLocationBaseOrderToggle');
	const allowTextSelectionToggle = document.getElementById('appearanceAllowTextSelectionToggle');
	const hardcoreChangesToggle = document.getElementById('appearanceHardcoreChangesToggle');
	const pokemonOffensiveToggle = document.getElementById('appearancePokemonOffensiveToggle');

	if (currentTeamToggle) {
		currentTeamToggle.checked = isCurrentTeamVisibleEnabled();
	}
	if (gameProgressionToggle) {
		gameProgressionToggle.checked = isGameProgressionVisibleEnabled();
	}
	if (advancedSearchSuggestionsOption) {
		advancedSearchSuggestionsOption.classList.remove('hide');
	}
	if (advancedSearchSuggestionsToggle) {
		advancedSearchSuggestionsToggle.checked = areAdvancedSearchSuggestionsEnabled();
		advancedSearchSuggestionsToggle.disabled = false;
	}
	if (favoritesToggle) {
		favoritesToggle.checked = isFavoritesEnabled();
	}
	if (availableOnlyToggle) {
		availableOnlyToggle.checked = isAvailableOnlyEnabled();
	}
	if (locationBaseOrderToggle) {
		locationBaseOrderToggle.checked = isLocationBaseOrderEnabled();
	}
	if (allowTextSelectionToggle) {
		allowTextSelectionToggle.checked = isTextSelectionEnabled();
	}
	if (hardcoreChangesToggle) {
		hardcoreChangesToggle.checked = isHardcoreChangesVisibleEnabled();
	}
	if (pokemonOffensiveToggle) {
		pokemonOffensiveToggle.checked = isPokemonOffensiveVisibleEnabled();
	}
}

// Wires the settings popup behavior, fade timing, and control event handlers.
function setupAppearanceSettingsMenu() {
	const wrapper = document.getElementById('appearanceSettingsWrapper');
	const button = document.getElementById('appearanceSettingsButton');
	const menu = document.getElementById('appearanceSettingsMenu');
	const currentTeamToggle = document.getElementById('appearanceCurrentTeamToggle');
	const gameProgressionToggle = document.getElementById('appearanceGameProgressionToggle');
	const advancedSearchSuggestionsToggle = document.getElementById('appearanceAdvancedSearchSuggestionsToggle');
	const favoritesToggle = document.getElementById('appearanceFavoritesToggle');
	const availableOnlyToggle = document.getElementById('appearanceAvailableOnlyToggle');
	const locationBaseOrderToggle = document.getElementById('appearanceLocationBaseOrderToggle');
	const allowTextSelectionToggle = document.getElementById('appearanceAllowTextSelectionToggle');
	const hardcoreChangesToggle = document.getElementById('appearanceHardcoreChangesToggle');
	const pokemonOffensiveToggle = document.getElementById('appearancePokemonOffensiveToggle');
	if (!wrapper || !button || !menu) {
		return;
	}

	const showMenu = function() {
		if (appearanceSettingsHideTimer) {
			clearTimeout(appearanceSettingsHideTimer);
			appearanceSettingsHideTimer = null;
		}
		if (appearanceSettingsVisibilityTimer) {
			clearTimeout(appearanceSettingsVisibilityTimer);
			appearanceSettingsVisibilityTimer = null;
		}

		updateAppearanceSettingsControls();
		if (menu.classList.contains('hide')) {
			menu.classList.remove('hide');
			menu.classList.remove('visible');
			requestAnimationFrame(function() {
				menu.classList.add('visible');
			});
		} else {
			menu.classList.add('visible');
		}
		button.setAttribute('aria-expanded', 'true');
	};

	const hideMenu = function() {
		menu.classList.remove('visible');
		button.setAttribute('aria-expanded', 'false');
		if (appearanceSettingsVisibilityTimer) {
			clearTimeout(appearanceSettingsVisibilityTimer);
		}
		appearanceSettingsVisibilityTimer = setTimeout(function() {
			appearanceSettingsVisibilityTimer = null;
			if (!menu.classList.contains('visible')) {
				menu.classList.add('hide');
			}
		}, 120);
	};

	const scheduleHideMenu = function() {
		if (appearanceSettingsHideTimer) {
			clearTimeout(appearanceSettingsHideTimer);
		}
		appearanceSettingsHideTimer = setTimeout(function() {
			appearanceSettingsHideTimer = null;
			if (wrapper.contains(document.activeElement)) {
				return;
			}
			hideMenu();
		}, 1000);
	};

	const scheduleHideMenuFromMouseLeave = function() {
		if (appearanceSettingsHideTimer) {
			clearTimeout(appearanceSettingsHideTimer);
		}
		appearanceSettingsHideTimer = setTimeout(function() {
			appearanceSettingsHideTimer = null;
			hideMenu();
		}, 1000);
	};

	button.addEventListener('click', function(event) {
		event.preventDefault();
		if (menu.classList.contains('hide')) {
			showMenu();
			return;
		}
		hideMenu();
	});
	menu.addEventListener('focusin', function() {
		if (appearanceSettingsHideTimer) {
			clearTimeout(appearanceSettingsHideTimer);
			appearanceSettingsHideTimer = null;
		}
	});
	menu.addEventListener('mouseenter', function() {
		if (appearanceSettingsHideTimer) {
			clearTimeout(appearanceSettingsHideTimer);
			appearanceSettingsHideTimer = null;
		}
	});
	wrapper.addEventListener('mouseenter', function() {
		if (appearanceSettingsHideTimer) {
			clearTimeout(appearanceSettingsHideTimer);
			appearanceSettingsHideTimer = null;
		}
	});
	wrapper.addEventListener('mouseleave', scheduleHideMenuFromMouseLeave);
	menu.addEventListener('focusout', scheduleHideMenu);
	document.addEventListener('mousedown', function(event) {
		if (!wrapper.contains(event.target)) {
			scheduleHideMenu();
		}
	});

	currentTeamToggle?.addEventListener('change', function() {
		setCurrentTeamVisibility(currentTeamToggle.checked);
	});
	gameProgressionToggle?.addEventListener('change', function() {
		setGameProgressionVisible(gameProgressionToggle.checked);
	});
	advancedSearchSuggestionsToggle?.addEventListener('change', function() {
		setAdvancedSearchSuggestionsEnabled(advancedSearchSuggestionsToggle.checked);
	});
	favoritesToggle?.addEventListener('change', function() {
		setFavoritesEnabled(favoritesToggle.checked);
	});
	availableOnlyToggle?.addEventListener('change', function() {
		setAvailableOnlyEnabled(availableOnlyToggle.checked);
	});
	locationBaseOrderToggle?.addEventListener('change', function() {
		setLocationBaseOrderEnabled(locationBaseOrderToggle.checked);
	});
	allowTextSelectionToggle?.addEventListener('change', function() {
		setTextSelectionEnabled(allowTextSelectionToggle.checked);
	});
	hardcoreChangesToggle?.addEventListener('change', function() {
		setHardcoreChangesVisible(hardcoreChangesToggle.checked);
	});
	pokemonOffensiveToggle?.addEventListener('change', function() {
		setPokemonOffensiveVisible(pokemonOffensiveToggle.checked);
	});
}

// Keeps the integrated search row synced with the currently selected category and active query.
function updateIntegratedSearchControls() {
	const speciesControl = document.getElementById('speciesControl');
	const speciesFilterCategory = document.getElementById('speciesFilterCategory');
	const speciesFilterInput = document.getElementById('speciesFilterInput');
	const speciesInputWrapper = document.getElementById('speciesFilterInputWrapper');
	const speciesFilterSeparator = document.getElementById('speciesFilterSeparator');
	const advancedSearchControl = document.getElementById('advancedSearchControl');
	const advancedSearchActions = document.getElementById('advancedSearchActions');
	const advancedSearchSelected = selectedFilter?.label === 'Adv. Search';
	const shouldShowAdvancedSearch = advancedSearchSelected || Boolean(advancedSearchPredicate);
	const advancedSearchPlaceholder = typeof getAdvancedSearchExamplePlaceholder === 'function'
		? getAdvancedSearchExamplePlaceholder()
		: "Example: (bst >= 600 and location has 'route 3')";

	speciesControl?.classList.toggle('advancedSearchMode', advancedSearchSelected);
	speciesFilterCategory?.classList.remove('advancedOnly');
	speciesInputWrapper?.classList.remove('hide');
	speciesFilterSeparator?.classList.remove('hide');
	if (speciesFilterInput) {
		speciesFilterInput.placeholder = advancedSearchSelected ? advancedSearchPlaceholder : '';
	}
	advancedSearchControl?.classList.toggle('hide', !shouldShowAdvancedSearch);
	advancedSearchActions?.classList.toggle('hide', !advancedSearchSelected);
	advancedSearchActions?.classList.toggle('visible', advancedSearchSelected);
}

// Fills the advanced-search box from a preset shortcut, then runs the query immediately.
function applyAdvancedSearchShortcut(query) {
	const input = document.getElementById('speciesFilterInput');
	if (!input || typeof runAdvancedSearch !== 'function') {
		return;
	}

	if (typeof selectFilterCategoryByLabel === 'function') {
		selectFilterCategoryByLabel('Adv. Search');
	}
	updateIntegratedSearchControls();
	input.value = query;
	input.focus();
	input.setSelectionRange(input.value.length, input.value.length);
	advancedSearchLastInputValue = input.value;
	runAdvancedSearch();
}

// Fills the advanced-search box without running it yet.
function fillAdvancedSearchInput(query) {
	const input = document.getElementById('speciesFilterInput');
	if (!input) {
		return;
	}

	if (typeof selectFilterCategoryByLabel === 'function') {
		selectFilterCategoryByLabel('Adv. Search');
	}
	updateIntegratedSearchControls();
	input.value = query;
	input.focus();
	input.setSelectionRange(input.value.length, input.value.length);
	advancedSearchLastInputValue = input.value;
	if (typeof refreshAdvancedSearchAutocomplete === 'function') {
		refreshAdvancedSearchAutocomplete();
	}
}

// Saves the current advanced-search input as a new quick-search entry.
function saveCurrentAdvancedSearchShortcut() {
	const input = document.getElementById('speciesFilterInput');
	if (!input) {
		return;
	}

	const query = input.value.trim();
	if (!query) {
		if (typeof setAdvancedSearchInlineStatus === 'function') {
			setAdvancedSearchInlineStatus('Save Search failed. Run a valid advanced search first.', 'info');
		}
		input.focus();
		return;
	}

	try {
		const ast = parseAdvancedSearchWithFallback(query);
		const predicate = mon => evaluateAdvancedSearch(ast, mon);
		predicate(Object.values(species)[0]);
	}
	catch {
		if (typeof setAdvancedSearchInlineStatus === 'function') {
			setAdvancedSearchInlineStatus('Save Search failed. Run a valid advanced search first.', 'info');
		}
		input.focus();
		return;
	}

	const normalizedShortcut = normalizeAdvancedSearchShortcut({
		query
	});
	if (!normalizedShortcut) {
		if (typeof setAdvancedSearchInlineStatus === 'function') {
			setAdvancedSearchInlineStatus('Save Search failed. Run a valid advanced search first.', 'info');
		}
		return;
	}

	const didSave = addAdvancedSearchShortcut(normalizedShortcut);
	if (!didSave) {
		if (typeof setAdvancedSearchInlineStatus === 'function') {
			setAdvancedSearchInlineStatus('Search already saved.', 'success');
		}
		return;
	}

	if (typeof setAdvancedSearchInlineStatus === 'function') {
		setAdvancedSearchInlineStatus('Search saved.', 'success');
	}
	fillAdvancedSearchInput(normalizedShortcut.query);
}

// Appends one quick-search entry, skipping exact duplicates.
function addAdvancedSearchShortcut(shortcut) {
	if (!shortcut?.query) {
		return false;
	}

	if (advancedSearchShortcuts.some(existingShortcut => existingShortcut.query === shortcut.query)) {
		return false;
	}

	advancedSearchShortcuts.push(shortcut);
	saveAdvancedSearchShortcuts();

	const menu = document.getElementById('advancedSearchShortcutsMenu');
	if (menu) {
		renderAdvancedSearchShortcutsMenu(menu, function() {});
	}
	return true;
}

// Adds one of the legacy suggestion presets back into the saved quick-search list.
function addGuideSuggestedQuickSearch(index) {
	const suggestion = ADVANCED_SEARCH_GUIDE_SUGGESTIONS[index];
	if (!suggestion) {
		return;
	}

	const normalizedShortcut = normalizeAdvancedSearchShortcut(suggestion);
	if (!normalizedShortcut) {
		return;
	}

	addAdvancedSearchShortcut(normalizedShortcut);
	fillAdvancedSearchInput(normalizedShortcut.query);
	$('#advancedSearchGuideModal').modal('hide');
}

// Removes one saved quick-search entry from the persisted list.
function removeAdvancedSearchShortcut(index, menu, hideMenu) {
	if (!Number.isInteger(index) || index < 0 || index >= advancedSearchShortcuts.length) {
		return;
	}

	advancedSearchShortcuts.splice(index, 1);
	saveAdvancedSearchShortcuts();
	renderAdvancedSearchShortcutsMenu(menu, hideMenu);
}

// Returns the row that the dragged shortcut should be inserted before for the current pointer position.
function getAdvancedSearchShortcutDragInsertTarget(menu, clientY) {
	const rows = Array.from(menu.querySelectorAll('.advancedSearchShortcutRow:not(.dragging)'));
	for (const row of rows) {
		const rect = row.getBoundingClientRect();
		if (clientY < rect.top + rect.height / 2) {
			return row;
		}
	}
	return null;
}

// Synchronizes the in-memory quick-search order with the current DOM row order.
function syncAdvancedSearchShortcutOrderFromMenu(menu) {
	const shortcutMap = new Map(advancedSearchShortcuts.map(shortcut => [shortcut.query, shortcut]));
	advancedSearchShortcuts = Array.from(menu.querySelectorAll('.advancedSearchShortcutRow'))
		.map(row => shortcutMap.get(row.dataset.shortcutQuery || ''))
		.filter(Boolean);
	saveAdvancedSearchShortcuts();
}

// Handles pointer movement while the user drags a saved quick-search row.
function handleAdvancedSearchShortcutDragMove(event) {
	const state = advancedSearchShortcutDragState;
	if (!state || event.pointerId !== state.pointerId) {
		return;
	}

	event.preventDefault();
	state.didMove = true;
	if (state.preview) {
		state.preview.style.left = `${event.clientX - state.offsetX}px`;
		state.preview.style.top = `${event.clientY - state.offsetY}px`;
	}
	const insertBeforeRow = getAdvancedSearchShortcutDragInsertTarget(state.menu, event.clientY);
	if (!insertBeforeRow) {
		state.menu.append(state.row);
		return;
	}
	if (insertBeforeRow !== state.row) {
		state.menu.insertBefore(state.row, insertBeforeRow);
	}
}

// Cleans up drag listeners and persists the new quick-search order when a drag ends.
function finishAdvancedSearchShortcutDrag(event) {
	const state = advancedSearchShortcutDragState;
	if (!state || (event && event.pointerId !== state.pointerId)) {
		return;
	}

	document.removeEventListener('pointermove', handleAdvancedSearchShortcutDragMove);
	document.removeEventListener('pointerup', finishAdvancedSearchShortcutDrag);
	document.removeEventListener('pointercancel', finishAdvancedSearchShortcutDrag);
	if (state.handle.hasPointerCapture?.(state.pointerId)) {
		state.handle.releasePointerCapture(state.pointerId);
	}

	state.row.classList.remove('dragging', 'drag-placeholder');
	state.menu.classList.remove('dragging');
	if (state.preview) {
		state.preview.remove();
	}
	if (state.didMove) {
		state.row.dataset.dragSuppressClick = 'true';
		syncAdvancedSearchShortcutOrderFromMenu(state.menu);
		renderAdvancedSearchShortcutsMenu(state.menu, state.hideMenu);
	}
	advancedSearchShortcutDragState = null;
}

// Starts dragging one saved quick-search row using pointer events for desktop and mobile compatibility.
function beginAdvancedSearchShortcutDrag(event, row, menu, hideMenu) {
	if (!row || !menu) {
		return;
	}
	if (event.pointerType === 'mouse' && event.button !== 0) {
		return;
	}
	if (menu.querySelectorAll('.advancedSearchShortcutRow').length < 2) {
		return;
	}

	event.preventDefault();
	event.stopPropagation();
	finishAdvancedSearchShortcutDrag();

	const handle = event.currentTarget;
	const rowRect = row.getBoundingClientRect();
	const preview = row.cloneNode(true);
	preview.classList.add('advancedSearchShortcutDragPreview');
	preview.style.width = `${rowRect.width}px`;
	preview.style.left = `${rowRect.left}px`;
	preview.style.top = `${rowRect.top}px`;
	document.body.append(preview);
	handle.setPointerCapture?.(event.pointerId);
	advancedSearchShortcutDragState = {
		pointerId: event.pointerId,
		handle,
		row,
		menu,
		hideMenu,
		didMove: false,
		preview,
		offsetX: event.clientX - rowRect.left,
		offsetY: event.clientY - rowRect.top
	};
	row.classList.add('dragging', 'drag-placeholder');
	menu.classList.add('dragging');

	document.addEventListener('pointermove', handleAdvancedSearchShortcutDragMove, { passive: false });
	document.addEventListener('pointerup', finishAdvancedSearchShortcutDrag);
	document.addEventListener('pointercancel', finishAdvancedSearchShortcutDrag);
}

// Rebuilds the quick-search menu from the persisted custom buttons.
function renderAdvancedSearchShortcutsMenu(menu, hideMenu) {
	if (!menu) {
		return;
	}

	menu.textContent = '';
	if (!advancedSearchShortcuts.length) {
		const emptyState = document.createElement('p');
		emptyState.className = 'advancedSearchShortcutEmptyState';
		emptyState.textContent = 'No custom quick searches yet.';
		menu.append(emptyState);
		return;
	}

	advancedSearchShortcuts.forEach((shortcut, index) => {
		const row = document.createElement('div');
		row.className = 'advancedSearchShortcutRow';
		row.dataset.shortcutQuery = shortcut.query;

		const runButton = document.createElement('button');
		runButton.type = 'button';
		runButton.className = 'advancedSearchShortcutButton';
		runButton.setAttribute('aria-label', `Apply or drag quick search ${index + 1}`);
		runButton.addEventListener('pointerdown', function(event) {
			beginAdvancedSearchShortcutDrag(event, row, menu, hideMenu);
		});

		const queryLabel = document.createElement('span');
		queryLabel.className = 'advancedSearchShortcutTitle';
		queryLabel.textContent = shortcut.query;

		runButton.append(queryLabel);
		runButton.addEventListener('click', function() {
			if (row.dataset.dragSuppressClick === 'true') {
				delete row.dataset.dragSuppressClick;
				return;
			}
			applyAdvancedSearchShortcut(shortcut.query);
			hideMenu();
		});

		const removeButton = document.createElement('button');
		removeButton.type = 'button';
		removeButton.className = 'advancedSearchShortcutRemoveButton';
		removeButton.textContent = 'x';
		removeButton.setAttribute('aria-label', `Remove quick search ${index + 1}`);
		removeButton.addEventListener('click', function(event) {
			event.stopPropagation();
			removeAdvancedSearchShortcut(index, menu, hideMenu);
		});

		row.append(runButton, removeButton);
		menu.append(row);
	});
}

// Wires the shortcut popup so it mirrors the same click/fade interaction used by settings.
function setupAdvancedSearchShortcutsMenu() {
	const wrapper = document.getElementById('advancedSearchShortcutsWrapper');
	const button = document.getElementById('advancedSearchShortcutsButton');
	const menu = document.getElementById('advancedSearchShortcutsMenu');
	if (!wrapper || !button || !menu) {
		return;
	}

	const showMenu = function() {
		if (advancedSearchShortcutsHideTimer) {
			clearTimeout(advancedSearchShortcutsHideTimer);
			advancedSearchShortcutsHideTimer = null;
		}
		if (advancedSearchShortcutsVisibilityTimer) {
			clearTimeout(advancedSearchShortcutsVisibilityTimer);
			advancedSearchShortcutsVisibilityTimer = null;
		}

		renderAdvancedSearchShortcutsMenu(menu, hideMenu);
		if (menu.classList.contains('hide')) {
			menu.classList.remove('hide');
			menu.classList.remove('visible');
			requestAnimationFrame(function() {
				menu.classList.add('visible');
			});
		} else {
			menu.classList.add('visible');
		}
		button.setAttribute('aria-expanded', 'true');
	};

	const hideMenu = function() {
		menu.classList.remove('visible');
		button.setAttribute('aria-expanded', 'false');
		if (advancedSearchShortcutsVisibilityTimer) {
			clearTimeout(advancedSearchShortcutsVisibilityTimer);
		}
		advancedSearchShortcutsVisibilityTimer = setTimeout(function() {
			advancedSearchShortcutsVisibilityTimer = null;
			if (!menu.classList.contains('visible')) {
				menu.classList.add('hide');
			}
		}, 120);
	};

	const scheduleHideMenu = function() {
		if (advancedSearchShortcutsHideTimer) {
			clearTimeout(advancedSearchShortcutsHideTimer);
		}
		advancedSearchShortcutsHideTimer = setTimeout(function() {
			advancedSearchShortcutsHideTimer = null;
			if (wrapper.contains(document.activeElement)) {
				return;
			}
			hideMenu();
		}, 1000);
	};

	const scheduleHideMenuFromMouseLeave = function() {
		if (advancedSearchShortcutsHideTimer) {
			clearTimeout(advancedSearchShortcutsHideTimer);
		}
		advancedSearchShortcutsHideTimer = setTimeout(function() {
			advancedSearchShortcutsHideTimer = null;
			hideMenu();
		}, 1000);
	};

	button.addEventListener('click', function(event) {
		event.preventDefault();
		if (menu.classList.contains('hide')) {
			showMenu();
			return;
		}
		hideMenu();
	});
	menu.addEventListener('focusin', function() {
		if (advancedSearchShortcutsHideTimer) {
			clearTimeout(advancedSearchShortcutsHideTimer);
			advancedSearchShortcutsHideTimer = null;
		}
	});
	menu.addEventListener('mouseenter', function() {
		if (advancedSearchShortcutsHideTimer) {
			clearTimeout(advancedSearchShortcutsHideTimer);
			advancedSearchShortcutsHideTimer = null;
		}
	});
	wrapper.addEventListener('mouseenter', function() {
		if (advancedSearchShortcutsHideTimer) {
			clearTimeout(advancedSearchShortcutsHideTimer);
			advancedSearchShortcutsHideTimer = null;
		}
	});
	wrapper.addEventListener('mouseleave', scheduleHideMenuFromMouseLeave);
	menu.addEventListener('focusout', scheduleHideMenu);
	document.addEventListener('mousedown', function(event) {
		if (!wrapper.contains(event.target)) {
			scheduleHideMenu();
		}
	});
}

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

globalThis.exportPokemonData = exportPokemonData;
