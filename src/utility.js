const APPEARANCE_SETTINGS_STORAGE_KEY = 'appearanceSettings';

function readAppearanceSettingsFromStorage() {
  try {
    const raw = localStorage.getItem(APPEARANCE_SETTINGS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeAppearanceSettingsToStorage(settings) {
  try {
    localStorage.setItem(APPEARANCE_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

function getAppearanceSetting(key, fallback) {
  const storedSettings = readAppearanceSettingsFromStorage();
  if (!appearanceSettingsLoaded && Object.prototype.hasOwnProperty.call(storedSettings, key)) {
    return storedSettings[key];
  }

  if (appearanceSettings && Object.prototype.hasOwnProperty.call(appearanceSettings, key)) {
    return appearanceSettings[key];
  }

  if (Object.prototype.hasOwnProperty.call(storedSettings, key)) {
    return storedSettings[key];
  }

  return fallback;
}

function getAbilityName(ability, species, raw = false) {
  if (ability[0] === 0) return undefined;

  const mappedAbility = raw ? ability : getMappedAbility(ability, species);
  return getAbilityDisplayNameById(mappedAbility[0], mappedAbility[1]);
}

function getMove(moveIdx, species, raw = false) {
  return moves[raw ? moveIdx : getMappedMove(moveIdx, species)];
}

function getFullLearnset(mon) {
  let learnset = [];
  if (mon.levelupMoves) {
	// Pass the species ID in so it gets the mapped move properly
    const levelMoves = mon.levelupMoves.map((x) => {
      const move = getMove(x[0], mon.ID);
      return move.ID;
    });

    learnset.push(...levelMoves);
  }

  if (mon.tmMoves) learnset.push(...mon.tmMoves.map((x) => tmMoves[x]));
  if (mon.tutorMoves)
    learnset.push(...mon.tutorMoves.map((x) => tutorMoves[x]));
  if (mon.eggMoves) learnset.push(...mon.eggMoves);
  return learnset;
}

// Returns the legacy on-disk sprite path for species that are not embedded in data.js yet.
// This is only used during startup to hydrate missing inline sprite entries.
function getFallbackSpeciesSpritePath(ID) {
  if (species?.[ID] && sprites?.[ID] === undefined) {
    return `graphics/species/front/${ID}.png`;
  }

  return null;
}

// Converts a fetched sprite blob into a data URL so the rest of the UI can use a single sprite source format.
// Keeping sprites inline avoids mixing `data:` URLs and file-path URLs during rendering.
function convertBlobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('Failed to read sprite data.'));
    reader.readAsDataURL(blob);
  });
}

// Hydrates species that still only exist as PNG assets into the shared `sprites` map at startup.
// Once this finishes, species rendering can read every sprite from `sprites` without falling back to file paths.
async function inlineMissingSpeciesSprites() {
  if (!species || !sprites) return;

  const pendingSpeciesIds = Object.values(species)
    .filter((mon) => mon && sprites[mon.ID] === undefined)
    .map((mon) => mon.ID);

  await Promise.all(
    pendingSpeciesIds.map(async (ID) => {
      const fallbackPath = getFallbackSpeciesSpritePath(ID);
      if (!fallbackPath) return;

      try {
        const response = await fetch(fallbackPath);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        sprites[ID] = await convertBlobToDataUrl(await response.blob());
      } catch (error) {
        console.warn(`Unable to inline sprite for species ${ID} from ${fallbackPath}.`, error);
      }
    })
  );
}

function getSprite(ID) {
  return sprites?.[ID] ?? sprites?.[0];
}

function loadChunk(tracker, toClear) {
  let rowsAdded = 0;

  if (toClear) {
    if (scrollIntoView && tracker.body.getBoundingClientRect().top < 0)
      tracker.body.scrollIntoView({ behavior: "smooth", block: "start" });
    tracker.body.innerText = "";
    tracker.index = 0;
  }

  let data = tracker.data;
  let i = tracker.index;
  for (j = data.length, k = tracker.maxRows; rowsAdded < k && i < j; i++) {
    tracker.displayMethod(tracker, data[i]);
    rowsAdded++;
  }
  tracker.index = i;
}
