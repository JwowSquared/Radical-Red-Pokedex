function getAbilityName(ability) {
    if (ability[0] === 0)
        return undefined;

    return (abilities[ability[0]].names[ability[1]]);
}

// Initialize a global map to store areas for each species ID
let speciesToAreasMap = {};

function buildSpeciesToAreasMap() {
    Object.values(areas).forEach(area => {
        Object.keys(area).forEach(key => {
            if ((key.startsWith('wild-') || key === 'fixed-gift' || key === 'fixed-roaming') && !key.startsWith('raid')) {
                let encounterType = area[key];
                let method = key.split('-')[1] || key.split('-')[0];
                method = formatMethod(method);
                Object.keys(encounterType).forEach(subkey => {
                    let encounters = encounterType[subkey];
                    encounters.forEach(encounter => {
                        let speciesID = encounter[0];
                        let details = encounter[1];

                        console.log(`Species ID: ${speciesID}, Details: ${JSON.stringify(details)}`);

                        // Ensure the species ID exists in the map
                        if (!speciesToAreasMap[speciesID]) {
                            speciesToAreasMap[speciesID] = new Set();
                        }

                        // Add the area and method to the species
                        speciesToAreasMap[speciesID].add(`${area.name} (${method})`);

                        // Handle nested species IDs in the details array
                        if (Array.isArray(details)) {
                            details.forEach(detailID => {
                                if (typeof detailID === 'number' && detailID !== speciesID) {
                                    if (!speciesToAreasMap[detailID]) {
                                        speciesToAreasMap[detailID] = new Set();
                                    }
                                    speciesToAreasMap[detailID].add(`${area.name} (${method})`);
                                    console.log(`Added ${detailID} to area ${area.name} (${method})`);
                                }
                            });
                        }
                    });
                });
            }
        });
    });

    // Convert sets to arrays for easier handling
    Object.keys(speciesToAreasMap).forEach(speciesID => {
        speciesToAreasMap[speciesID] = Array.from(speciesToAreasMap[speciesID]).join(', ');
    });
}

function getAreaName(speciesID) {
    return speciesToAreasMap[speciesID] || '';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatMethod(method) {
    // Inserts a space before each uppercase letter and capitalizes the first letter of each word
    method = method.replace(/([A-Z])/g, ' $1').trim(); // Add spaces before uppercase letters
    // Capitalize the first letter of each word
    return method.split(' ').map(word => capitalizeFirstLetter(word.toLowerCase())).join(' ');
}

// Call this function once after the areas data is loaded
buildSpeciesToAreasMap();

function getFullLearnset(mon) {
    let learnset = [];
    if (mon.levelupMoves)
        learnset.push(...mon.levelupMoves.map(x => x[0]));
    if (mon.tmMoves)
        learnset.push(...mon.tmMoves.map(x => tmMoves[x]));
    if (mon.tutorMoves)
        learnset.push(...mon.tutorMoves.map(x => tutorMoves[x]));
    if (mon.eggMoves)
        learnset.push(...mon.eggMoves);
    return learnset;
}

function getSprite(ID) {
    let sprite = sprites[ID];
    if (sprite === undefined)
        sprite = sprites[0];
    return sprite;
}

function loadChunk(tracker, toClear) {
    let rowsAdded = 0;
    
    if (toClear) {
        if (scrollIntoView && tracker.body.getBoundingClientRect().top < 0)
            tracker.body.scrollIntoView({behavior: "smooth", block: "start"});
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
