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
	
	// Object to store locations by encounter type
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
 
		// Check wild-day encounters
		if (areaData['wild-day']) {
			Object.values(areaData['wild-day']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Day'].add(areaData.name);
				}
			});
		}
 
		// Check wild-night encounters
		if (areaData['wild-night']) {
			Object.values(areaData['wild-night']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Night'].add(areaData.name);
				}
			});
		}
 
		// Check surf encounters
		if (areaData['wild-surf']) {
			Object.values(areaData['wild-surf']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Surf'].add(areaData.name);
				}
			});
		}
 
		// Check old rod encounters
		if (areaData['wild-oldRod']) {
			Object.values(areaData['wild-oldRod']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Old Rod'].add(areaData.name);
				}
			});
		}
 
		// Check good rod encounters
		if (areaData['wild-goodRod']) {
			Object.values(areaData['wild-goodRod']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Good Rod'].add(areaData.name);
				}
			});
		}
 
		// Check super rod encounters
		if (areaData['wild-superRod']) {
			Object.values(areaData['wild-superRod']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Super Rod'].add(areaData.name);
				}
			});
		}
 
		// Check smash encounters
		if (areaData['wild-smash']) {
			Object.values(areaData['wild-smash']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Smash'].add(areaData.name);
				}
			});
		}
 
		// Check gift encounters
		if (areaData['fixed-gift']) {
			Object.values(areaData['fixed-gift']).forEach(encounters => {
				if (encounters.includes(mon.ID)) {
					locationsByType['Gift'].add(areaData.name);
				}
			});
		}
 
		// Check roaming encounters
		if (areaData['fixed-roaming']) {
			Object.values(areaData['fixed-roaming']).forEach(encounters => {
				if (encounters.includes(mon.ID)) {
					locationsByType['Roaming'].add(areaData.name);
				}
			});
		}
 
		// Check overworld encounters
		if (areaData['fixed-overworld']) {
			Object.values(areaData['fixed-overworld']).forEach(encounters => {
				if (encounters.includes(mon.ID)) {
					locationsByType['Overworld'].add(areaData.name);
				}
			});
		}
 
		// Check trade encounters
		if (areaData['fixed-trade']) {
			Object.values(areaData['fixed-trade']).forEach(encounters => {
				if (encounters.includes(mon.ID)) {
					locationsByType['Trade'].add(areaData.name);
				}
			});
		}
 
		// Check raid1 encounters
		if (areaData['raid1']) {
			Object.values(areaData['raid1']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Raid-1'].add(areaData.name);
				}
			});
		}
 
		// Check raid3 encounters
		if (areaData['raid3']) {
			Object.values(areaData['raid3']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Raid-3'].add(areaData.name);
				}
			});
		}
 
		// Check raid4 encounters
		if (areaData['raid4']) {
			Object.values(areaData['raid4']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Raid-4'].add(areaData.name);
				}
			});
		}
 
		// Check raid5 encounters
		if (areaData['raid5']) {
			Object.values(areaData['raid5']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Raid-5'].add(areaData.name);
				}
			});
		}
 
		// Check raid6 encounters
		if (areaData['raid6']) {
			Object.values(areaData['raid6']).forEach(encounters => {
				if (encounters.some(encounter => encounter[0] === mon.ID)) {
					locationsByType['Raid-6'].add(areaData.name);
				}
			});
		}
	});
 
	// Format the output with distinct styling for each type
	const formattedLocations = [];
	
	Object.entries(locationsByType).forEach(([type, locations]) => {
		if (locations.size > 0) {
			const locationList = Array.from(locations);
			switch(type) {
				case 'Day':
					formattedLocations.push(`<span class="encounter-day">${locationList.join(', ')} ☀️</span>`);
					break;
				case 'Night':
					formattedLocations.push(`<span class="encounter-night">${locationList.join(', ')} 🌙</span>`);
					break;
				case 'Surf':
					formattedLocations.push(`<span class="encounter-surf">${locationList.join(', ')} 🏄</span>`);
					break;
				case 'Old Rod':
					formattedLocations.push(`<span class="encounter-oldrod">${locationList.join(', ')} 🎣</span>`);
					break;
				case 'Good Rod':
					formattedLocations.push(`<span class="encounter-goodrod">${locationList.join(', ')} 🎣</span>`);
					break;
				case 'Super Rod':
					formattedLocations.push(`<span class="encounter-superrod">${locationList.join(', ')} 🎣</span>`);
					break;
				case 'Smash':
					formattedLocations.push(`<span class="encounter-smash">${locationList.join(', ')} 🗺️</span>`);
					break;
				case 'Gift':
					formattedLocations.push(`<span class="encounter-gift">${locationList.join(', ')} 🎁</span>`);
					break;
				case 'Roaming':
					formattedLocations.push(`<span class="encounter-roaming">${locationList.join(', ')} 🌎</span>`);
					break;
				case 'Overworld':
					formattedLocations.push(`<span class="encounter-overworld">${locationList.join(', ')} 🗺️</span>`);
					break;
				case 'Trade':
					formattedLocations.push(`<span class="encounter-trade">${locationList.join(', ')} 🤝</span>`);
					break;
				case 'Raid-1':
					formattedLocations.push(`<span class="encounter-raid1">${locationList.join(', ')} ⭐</span>`);
					break;
				case 'Raid-3':
					formattedLocations.push(`<span class="encounter-raid3">${locationList.join(', ')} ⭐⭐⭐</span>`);
					break;
				case 'Raid-4':
					formattedLocations.push(`<span class="encounter-raid4">${locationList.join(', ')} ⭐⭐⭐⭐</span>`);
					break;
				case 'Raid-5':
					formattedLocations.push(`<span class="encounter-raid5">${locationList.join(', ')} ⭐⭐⭐⭐⭐</span>`);
					break;
				case 'Raid-6':
					formattedLocations.push(`<span class="encounter-raid6">${locationList.join(', ')} ⭐⭐⭐⭐⭐⭐</span>`);
					break;
			}
		}
	});
 
	return formattedLocations;
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