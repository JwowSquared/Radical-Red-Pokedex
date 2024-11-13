function getAbilityName(ability, species, raw = false) {
	if (ability[0] === 0)
		return undefined;

	const mappedAbility = raw ? ability : getMappedAbility(ability, species);
	return (abilities[mappedAbility[0]].names[mappedAbility[1]]);
}

function getMove(moveIdx, species, raw = false) {
	return moves[raw ? moveIdx : getMappedMove(moveIdx, species)];
}

function getFullLearnset(mon) {
	let learnset = [];
	if (mon.levelupMoves)
		learnset.push(...mon.levelupMoves.map(x => getMove(x[0]).ID));
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


function getAreasList(mon) {
    if (!mon || !areas) return [];
    
    const locationsByType = {
        'Day': new Set(),
        'Night': new Set(),
        'Surf': new Set(),
        'Old Rod': new Set(),
        'Good Rod': new Set(), 
        'Super Rod': new Set(),
        'Smash': new Set(),
        'Gift': new Set(),
        'Roaming': new Set(),
        'Overworld': new Set(),
        'Trade': new Set(),
        'Raid-1': new Set(),
        'Raid-3': new Set(), 
        'Raid-4': new Set(),
        'Raid-5': new Set(),
        'Raid-6': new Set()
    };

    Object.entries(areas).forEach(([_, areaData]) => {
        if (!areaData.name) return;

        const encounterTypes = {
            'wild-day': ['Day', '☀️'],
            'wild-night': ['Night', '🌙'],
            'wild-surf': ['Surf', '🏄'],
            'wild-oldRod': ['Old Rod', '🎣'],
            'wild-goodRod': ['Good Rod', '🎣'],
            'wild-superRod': ['Super Rod', '🎣'],
            'wild-smash': ['Smash', '🗺️'],
            'fixed-gift': ['Gift', '🎁'],
            'fixed-roaming': ['Roaming', '🏃'],
            'fixed-overworld': ['Overworld', '🗺️'],
            'fixed-trade': ['Trade', '🤝'],
            'raid1': ['Raid-1', '⭐'],
            'raid3': ['Raid-3', '⭐⭐⭐'],
            'raid4': ['Raid-4', '⭐⭐⭐⭐'],
            'raid5': ['Raid-5', '⭐⭐⭐⭐⭐'],
            'raid6': ['Raid-6', '⭐⭐⭐⭐⭐⭐']
        };

        Object.entries(encounterTypes).forEach(([dataKey, [typeKey, emoji]]) => {
            if (areaData[dataKey]) {
                Object.values(areaData[dataKey]).forEach(encounters => {
                    const hasEncounter = Array.isArray(encounters[0]) 
                        ? encounters.some(encounter => encounter[0] === mon.ID)
                        : encounters.includes(mon.ID);
                    
                    if (hasEncounter) {
                        locationsByType[typeKey].add(areaData.name);
                    }
                });
            }
        });
    });

    const encounterGroups = {
        'Wild': [],
        'Water': [],
        'Special': [],
        'Raids': []
    };

    const typeToGroup = {
        'Day': ['Wild', '☀️'],
        'Night': ['Wild', '🌙'],
        'Surf': ['Water', '🏄'],
        'Old Rod': ['Water', '🎣'],
        'Good Rod': ['Water', '🎣'],
        'Super Rod': ['Water', '🎣'],
        'Smash': ['Special', '🗺️'],
        'Gift': ['Special', '🎁'],
        'Roaming': ['Special', '🏃'],
        'Overworld': ['Special', '🗺️'],
        'Trade': ['Special', '🤝'],
        'Raid-1': ['Raids', '⭐'],
        'Raid-3': ['Raids', '⭐⭐⭐'],
        'Raid-4': ['Raids', '⭐⭐⭐⭐'],
        'Raid-5': ['Raids', '⭐⭐⭐⭐⭐'],
        'Raid-6': ['Raids', '⭐⭐⭐⭐⭐⭐']
    };

    Object.entries(locationsByType).forEach(([type, locations]) => {
        if (locations.size > 0) {
            const locationList = Array.from(locations);
            let formattedLocation;

			switch(type) {
				case 'Day':
					formattedLocation = `<span class="encounter-day"><span class="encounter-type">Day (☀️):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Wild'].push(formattedLocation);
					break;
			
				case 'Night':
					formattedLocation = `<span class="encounter-night"><span class="encounter-type">Night (🌙):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Wild'].push(formattedLocation);
					break;
			
				case 'Surf':
					formattedLocation = `<span class="encounter-surf"><span class="encounter-type">Surf (🌊):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Water'].push(formattedLocation);
					break;
			
				case 'Old Rod':
					formattedLocation = `<span class="encounter-oldrod"><span class="encounter-type">Old Rod (🎣):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Water'].push(formattedLocation);
					break;
			
				case 'Good Rod':
					formattedLocation = `<span class="encounter-goodrod"><span class="encounter-type">Good Rod (🎣):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Water'].push(formattedLocation);
					break;
			
				case 'Super Rod':
					formattedLocation = `<span class="encounter-superrod"><span class="encounter-type">Super Rod (🎣):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Water'].push(formattedLocation);
					break;
			
				case 'Smash':
					formattedLocation = `<span class="encounter-smash"><span class="encounter-type">Smash (🗺️):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Special'].push(formattedLocation);
					break;
			
				case 'Gift':
					formattedLocation = `<span class="encounter-gift"><span class="encounter-type">Gift (🎁):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Special'].push(formattedLocation);
					break;
			
				case 'Roaming':
					formattedLocation = `<span class="encounter-roaming"><span class="encounter-type">Roaming (🏃):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Special'].push(formattedLocation);
					break;
			
				case 'Overworld':
					formattedLocation = `<span class="encounter-overworld"><span class="encounter-type">Overworld (🗺️):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Special'].push(formattedLocation);
					break;
			
				case 'Trade':
					formattedLocation = `<span class="encounter-trade"><span class="encounter-type">Trade (🤝):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Special'].push(formattedLocation);
					break;
			
				case 'Raid-1':
					formattedLocation = `<span class="encounter-raid1"><span class="encounter-type">Raid (⭐):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Raids'].push(formattedLocation);
					break;

				case 'Raid-2':
					formattedLocation = `<span class="encounter-raid2"><span class="encounter-type">Raid (⭐⭐):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Raids'].push(formattedLocation);
					break;
			
				case 'Raid-3':
					formattedLocation = `<span class="encounter-raid3"><span class="encounter-type">Raid (⭐⭐⭐):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Raids'].push(formattedLocation);
					break;
			
				case 'Raid-4':
					formattedLocation = `<span class="encounter-raid4"><span class="encounter-type">Raid (⭐⭐⭐⭐):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Raids'].push(formattedLocation);
					break;
			
				case 'Raid-5':
					formattedLocation = `<span class="encounter-raid5"><span class="encounter-type">Raid (⭐⭐⭐⭐⭐):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Raids'].push(formattedLocation);
					break;
			
				case 'Raid-6':
					formattedLocation = `<span class="encounter-raid6"><span class="encounter-type">Raid (⭐⭐⭐⭐⭐⭐):</span> ${locationList.join(', ')}</span>`;
					encounterGroups['Raids'].push(formattedLocation);
					break;
			}
        }
    });

    return Object.entries(encounterGroups)
        .filter(([_, encounters]) => encounters.length > 0)
        .map(([groupName, encounters]) => {
            return `<div class="encounter-group">${encounters.join('')}</div>`;
        }).join('');
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