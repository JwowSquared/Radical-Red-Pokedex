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

// Add this to utility.js
function getAreasList(mon) {
    if (!mon || !areas) return [];
    
    const monAreas = [];
    Object.values(areas).forEach(areaGroup => {
        if (areaGroup.areas) {
            areaGroup.areas.forEach(area => {
                if (area.wild && area.wild.includes(mon.ID)) {
                    monAreas.push(area.name);
                }
                if (area.fixed && area.fixed.includes(mon.ID)) {
                    monAreas.push(area.name);
                }
            });
        }
    });
    
    return [...new Set(monAreas)]; // Remove duplicates
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