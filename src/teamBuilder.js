let favoritesHideTimer = null;
let favoritesVisibilityTimer = null;
const FAVORITES_LIMIT = 6;
const FAVORITES_STORAGE_KEY = 'favoriteSpeciesIds';
const LEGACY_FAVORITES_STORAGE_KEY = 'teamBuilderSpeciesIds';
let favoriteSpeciesIds = loadFavoriteSpeciesIds();

function normalizeFavoriteSpeciesIds(ids) {
	if (!Array.isArray(ids)) {
		return [];
	}

	const normalizedIds = [];
	for (const id of ids) {
		const speciesId = Number(id);
		if (!speciesId || normalizedIds.includes(speciesId)) {
			continue;
		}
		normalizedIds.push(speciesId);
		if (normalizedIds.length >= FAVORITES_LIMIT) {
			break;
		}
	}

	return normalizedIds;
}

function loadFavoriteSpeciesIds() {
	try {
		const raw = localStorage.getItem(FAVORITES_STORAGE_KEY)
			|| localStorage.getItem(LEGACY_FAVORITES_STORAGE_KEY);
		if (!raw) {
			return [];
		}
		return normalizeFavoriteSpeciesIds(JSON.parse(raw));
	}
	catch (error) {
		localStorage.removeItem(FAVORITES_STORAGE_KEY);
		localStorage.removeItem(LEGACY_FAVORITES_STORAGE_KEY);
		return [];
	}
}

function persistFavoriteSpeciesIds() {
	if (!favoriteSpeciesIds.length) {
		localStorage.removeItem(FAVORITES_STORAGE_KEY);
		localStorage.removeItem(LEGACY_FAVORITES_STORAGE_KEY);
		return;
	}

	localStorage.setItem(
		FAVORITES_STORAGE_KEY,
		JSON.stringify(favoriteSpeciesIds)
	);
	localStorage.removeItem(LEGACY_FAVORITES_STORAGE_KEY);
}

function isPokemonFavorite(speciesId) {
	return favoriteSpeciesIds.includes(Number(speciesId));
}

function updateFavoritesToggleState(button) {
	if (!button) {
		return;
	}

	const enabled = typeof isFavoritesEnabled === 'function' && isFavoritesEnabled();
	const speciesId = Number(button.dataset.speciesId);
	const checked = enabled && isPokemonFavorite(speciesId);

	button.classList.toggle('favoritesToggleEnabled', enabled);
	button.classList.toggle('favoritesToggleChecked', checked);
	button.disabled = !enabled;
	button.setAttribute('aria-checked', checked ? 'true' : 'false');
	if (!checked) {
		button.classList.remove('favoritesToggleFullFlash');
	}
}

function createFavoritesToggle(mon, options = {}) {
	const {
		className = '',
	} = options;

	const toggle = document.createElement('button');
	toggle.type = 'button';
	toggle.className = ['favoritesToggle', className].filter(Boolean).join(' ');
	toggle.dataset.speciesId = mon.ID;
	toggle.setAttribute('aria-label', `Toggle ${mon.key} as Favorite`);
	toggle.addEventListener('pointerdown', function(event) {
		event.stopPropagation();
	});
	toggle.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		if (typeof toggleFavoritePokemon === 'function') {
			toggleFavoritePokemon(mon, toggle);
		}
	});

	updateFavoritesToggleState(toggle);
	return toggle;
}

function refreshFavoritesRowStates() {
	document.querySelectorAll('.favoritesToggle').forEach(updateFavoritesToggleState);
}

function getFavoriteAbilityNames(mon) {
	if (!mon?.abilities) {
		return ['No listed ability'];
	}

	const names = [];
	for (const slot of [1, 2, 0]) {
		const name = getAbilityName(mon.abilities[slot], mon.ID);
		if (name && !names.includes(name)) {
			names.push(name);
		}
	}

	return names.length ? names : ['No listed ability'];
}

function renderFavoritesMenu() {
	const menu = document.getElementById('favoritesMenu');
	if (!menu) {
		return;
	}

	menu.textContent = '';
	if (!favoriteSpeciesIds.length) {
		const emptyState = document.createElement('p');
		emptyState.className = 'favoritesEmptyState';
		emptyState.textContent = 'No Favorites.';
		menu.append(emptyState);
		return;
	}

	for (const speciesId of favoriteSpeciesIds) {
		const mon = species?.[speciesId];
		const row = document.createElement('div');
		row.className = 'favoritesMenuRow';
		row.tabIndex = 0;
		row.setAttribute('role', 'button');
		row.setAttribute('aria-label', `Open ${mon?.key || mon?.name || `Pokemon ${speciesId}`} details`);
		row.addEventListener('click', function() {
			if (mon && typeof displaySpeciesPanel === 'function') {
				displaySpeciesPanel(mon);
			}
		});
		row.addEventListener('keydown', function(event) {
			if ((event.key === 'Enter' || event.key === ' ') && mon && typeof displaySpeciesPanel === 'function') {
				event.preventDefault();
				displaySpeciesPanel(mon);
			}
		});

		const sprite = document.createElement('img');
		sprite.className = 'favoritesMenuSprite';
		sprite.src = getSprite(speciesId);
		sprite.alt = mon?.key || `Pokemon ${speciesId}`;

		const info = document.createElement('div');
		info.className = 'favoritesMenuInfo';

		const name = document.createElement('div');
		name.className = 'favoritesMenuName';
		name.textContent = mon?.key || mon?.name || `#${speciesId}`;

		const ability = document.createElement('div');
		ability.className = 'favoritesMenuAbility';
		ability.textContent = mon
			? getFavoriteAbilityNames(mon).join(' / ')
			: 'No listed ability';

		const removeButton = document.createElement('button');
		removeButton.type = 'button';
		removeButton.className = 'favoritesMenuRemoveButton';
		removeButton.textContent = 'x';
		removeButton.setAttribute('aria-label', `Remove ${name.textContent} from Favorites`);
		removeButton.addEventListener('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			removePokemonFromFavorites(speciesId);
		});

		info.append(name, ability);
		row.append(sprite, info, removeButton);
		menu.append(row);
	}

	const clearButton = document.createElement('button');
	clearButton.type = 'button';
	clearButton.className = 'favoritesMenuClearButton';
	clearButton.textContent = 'Clear Favorites';
	clearButton.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		clearFavoritesList();
	});
	menu.append(clearButton);
}

function syncFavoritesFeatureVisibility() {
	const wrapper = document.getElementById('favoritesWrapper');
	const button = document.getElementById('favoritesButton');
	const menu = document.getElementById('favoritesMenu');
	const enabled = typeof isFavoritesEnabled === 'function' && isFavoritesEnabled();

	if (wrapper) {
		wrapper.classList.toggle('hide', !enabled);
	}
	if (!enabled && menu && button) {
		menu.classList.remove('visible');
		menu.classList.add('hide');
		button.setAttribute('aria-expanded', 'false');
	}

	renderFavoritesMenu();
	refreshFavoritesRowStates();
}

function removePokemonFromFavorites(speciesId) {
	const nextIds = favoriteSpeciesIds.filter(id => id !== Number(speciesId));
	if (nextIds.length === favoriteSpeciesIds.length) {
		return;
	}

	favoriteSpeciesIds = nextIds;
	persistFavoriteSpeciesIds();
	renderFavoritesMenu();
	refreshFavoritesRowStates();
}

function clearFavoritesList() {
	favoriteSpeciesIds = [];
	persistFavoriteSpeciesIds();
	renderFavoritesMenu();
	refreshFavoritesRowStates();
}

function flashFullFavoritesToggle(button) {
	if (!button) {
		return;
	}

	clearTimeout(button.favoritesFlashTimer);
	button.classList.add('favoritesToggleEnabled', 'favoritesToggleFullFlash');
	button.classList.remove('favoritesToggleChecked');
	button.favoritesFlashTimer = setTimeout(function() {
		button.classList.remove('favoritesToggleFullFlash');
		updateFavoritesToggleState(button);
	}, 200);
}

function flashFullFavoritesToggles(speciesId, fallbackButton = null) {
	const buttons = Array.from(
		document.querySelectorAll(`.favoritesToggle[data-species-id="${Number(speciesId)}"]`)
	);

	if (!buttons.length) {
		flashFullFavoritesToggle(fallbackButton);
		return;
	}

	buttons.forEach(flashFullFavoritesToggle);
}

function toggleFavoritePokemon(mon, button) {
	if (typeof isFavoritesEnabled !== 'function' || !isFavoritesEnabled()) {
		return;
	}

	const speciesId = Number(mon?.ID || button?.dataset?.speciesId);
	if (!speciesId) {
		return;
	}

	if (isPokemonFavorite(speciesId)) {
		removePokemonFromFavorites(speciesId);
		return;
	}

	if (favoriteSpeciesIds.length >= FAVORITES_LIMIT) {
		flashFullFavoritesToggles(speciesId, button);
		return;
	}

	favoriteSpeciesIds.push(speciesId);
	persistFavoriteSpeciesIds();
	renderFavoritesMenu();
	refreshFavoritesRowStates();
}

function setupFavoritesFeature() {
	const wrapper = document.getElementById('favoritesWrapper');
	const button = document.getElementById('favoritesButton');
	const menu = document.getElementById('favoritesMenu');
	if (!wrapper || !button || !menu) {
		return;
	}

	const showMenu = function() {
		if (favoritesHideTimer) {
			clearTimeout(favoritesHideTimer);
			favoritesHideTimer = null;
		}
		if (favoritesVisibilityTimer) {
			clearTimeout(favoritesVisibilityTimer);
			favoritesVisibilityTimer = null;
		}

		renderFavoritesMenu();
		if (menu.classList.contains('hide')) {
			menu.classList.remove('hide');
			menu.classList.remove('visible');
			requestAnimationFrame(function() {
				menu.classList.add('visible');
			});
		}
		else {
			menu.classList.add('visible');
		}
		button.setAttribute('aria-expanded', 'true');
	};

	const hideMenu = function() {
		menu.classList.remove('visible');
		button.setAttribute('aria-expanded', 'false');
		if (favoritesVisibilityTimer) {
			clearTimeout(favoritesVisibilityTimer);
		}
		favoritesVisibilityTimer = setTimeout(function() {
			favoritesVisibilityTimer = null;
			if (!menu.classList.contains('visible')) {
				menu.classList.add('hide');
			}
		}, 120);
	};

	const scheduleHideMenu = function() {
		if (favoritesHideTimer) {
			clearTimeout(favoritesHideTimer);
		}
		favoritesHideTimer = setTimeout(function() {
			favoritesHideTimer = null;
			if (wrapper.contains(document.activeElement)) {
				return;
			}
			hideMenu();
		}, 1000);
	};

	const scheduleHideMenuFromMouseLeave = function() {
		if (favoritesHideTimer) {
			clearTimeout(favoritesHideTimer);
		}
		favoritesHideTimer = setTimeout(function() {
			favoritesHideTimer = null;
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
		if (favoritesHideTimer) {
			clearTimeout(favoritesHideTimer);
			favoritesHideTimer = null;
		}
	});
	menu.addEventListener('mouseenter', function() {
		if (favoritesHideTimer) {
			clearTimeout(favoritesHideTimer);
			favoritesHideTimer = null;
		}
	});
	wrapper.addEventListener('mouseenter', function() {
		if (favoritesHideTimer) {
			clearTimeout(favoritesHideTimer);
			favoritesHideTimer = null;
		}
	});
	wrapper.addEventListener('mouseleave', scheduleHideMenuFromMouseLeave);
	menu.addEventListener('focusout', scheduleHideMenu);
	document.addEventListener('mousedown', function(event) {
		if (!wrapper.contains(event.target)) {
			scheduleHideMenu();
		}
	});

	syncFavoritesFeatureVisibility();
}
