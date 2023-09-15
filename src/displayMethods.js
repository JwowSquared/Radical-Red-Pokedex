function displaySpeciesRow(tracker, key) {
	let mon = tracker.library[key];
	let currentRow = document.createElement("tr");
	currentRow.className = "speciesRow";
	currentRow.onclick = function() {
		displaySpeciesPanel(mon);
	};
	tracker.body.appendChild(currentRow);
	
	currentRow.append(
		buildBasicCell("speciesDexIDCell", Math.trunc(mon.dexID)),
		buildSpriteCell("speciesSprite", mon.ID),
		buildSpeciesNameCell(mon),
		buildTypeCell("speciesType", mon.type.primary, mon.type.secondary),
		buildSpeciesAbilityCell(mon),
		buildStatCell("HP", mon.stats.HP),
		buildStatCell("Atk", mon.stats.attack),
		buildStatCell("Def", mon.stats.defense),
		buildStatCell("SpA", mon.stats.specialAttack),
		buildStatCell("SpD", mon.stats.specialDefense),
		buildStatCell("Spe", mon.stats.speed),
		buildStatCell("BST", mon.stats.total)
	);
}

function displayLevelUpMovesRow(tracker, movePair) {
	let [key, level] = movePair;
	let move = tracker.library[key];
	let currentRow = document.createElement("tr");
	currentRow.className = "movesRow";
	tracker.body.appendChild(currentRow);
	
	currentRow.append(
		buildBasicCell("moveLevel", level),
		buildBasicCell("moveName", move.name),
		buildTypeCell("moveType", move.type),
		buildSpriteCell("moveSplit", move.split),
		buildBasicCell("movePower", move.power),
		buildBasicCell("moveAccuracy", move.accuracy),
		buildBasicCell("movePP", move.PP),
		buildBasicCell("moveDescription", move.description)
	);
}

function displayMovesRow(tracker, key) {
	let move = tracker.library[key];
	let currentRow = document.createElement("tr");
	currentRow.className = "movesRow";
	tracker.body.appendChild(currentRow);
	
	currentRow.append(
		buildBasicCell("moveName", move.name),
		buildTypeCell("moveType", move.type),
		buildSpriteCell("moveSplit", move.split),
		buildBasicCell("movePower", move.power),
		buildBasicCell("moveAccuracy", move.accuracy),
		buildBasicCell("movePP", move.PP),
		buildBasicCell("moveDescription", move.description)
	);
}

function buildBasicCell(className, value="") {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = className;
	cell.textContent = value;
	
	return cell;
}

function buildSpriteCell(className, spriteKey, alt="") {
	let cell = buildBasicCell(className + "Cell");
	let img = document.createElement("img");
	img.className = className;
	img.alt = alt;
	img.src = sprites[spriteKey].sprite;
	
	cell.append(img);
	return cell;
}

function buildSpeciesNameCell(mon) {
	let cell = buildBasicCell("speciesNameCell");
	
	if (mon.family.cousins)
		cell.append(buildBasicWrapper("speciesRegion", regions[mon.family.region].variant));
	
	cell.append(buildBasicWrapper("speciesName", mon.name));

	if (mon.family.form)
		cell.append(buildBasicWrapper("speciesForm", mon.family.form));

	return cell;
}

function buildBasicWrapper(className, text) {
	let wrapper = document.createElement("div");
	wrapper.className = className;
	wrapper.textContent = text;
	
	return wrapper;
}

function buildTypeCell(className, primary, secondary=null) {
	let cell = buildBasicCell(className + "Cell");
	
	cell.append(buildTypeWrapper(primary));
	if (secondary)
		cell.append(buildTypeWrapper(secondary));
	
	return cell;
}

function buildTypeWrapper(type) {
	let wrapper = document.createElement("div");
	wrapper.className = "typeWrapper";
	wrapper.style.backgroundColor = types[type].color;
	wrapper.textContent = types[type].name;
	
	return wrapper;
}

function buildSpeciesAbilityCell(mon) {
	let cell = buildBasicCell("speciesAbilitiesCell");
	
	if (mon.abilities.primary)
		cell.append(buildBasicWrapper("speciesAbilityPrimary", abilities[mon.abilities.primary].name));
	
	if (mon.abilities.secondary)
		cell.append(buildBasicWrapper("speciesAbilitySecondary", abilities[mon.abilities.secondary].name));
	
	if (mon.abilities.hidden)
		cell.append(buildBasicWrapper("speciesAbilityHidden", abilities[mon.abilities.hidden].name));

	return cell;
}

function buildStatCell(label, value) {
	let cell = buildBasicCell("speciesStatCell");
	
	cell.append(buildBasicWrapper("speciesStatLabel", label));
	
	cell.append(buildBasicWrapper("speciesStatValue", value));
	
	return cell;
}

function displaySpeciesPanel(mon) {
	let speciesPanel = document.getElementById("speciesPanelPrimaryInfo");
	
	speciesPanel.innerText = "";
	
	//sprite
	//speciesPanel.append(buildSpeciesSprite(mon));
	//
	////name
	//speciesPanel.append(buildSpeciesName(mon));
	//
	////dexID
	//speciesPanel.append(buildSpeciesDexID(mon));
	//
	////type
	//speciesPanel.append(buildSpeciesType(mon));
	//
	////abilities
	//speciesPanel.append(buildSpeciesAbilities(mon));
	//
	////stats
	//speciesPanel.append(buildSpeciesStats(mon));
	//
	////changes
	//speciesPanel.append(buildSpeciesChanges(mon));
	//
	////family
	//speciesPanel.append(buildSpeciesFamily(mon));
	//
	////items
	//speciesPanel.append(buildSpeciesItems(mon));
	//
	////egg groups
	//speciesPanel.append(buildSpeciesEggGroups(mon));
	//
	////defensive
	//speciesPanel.append(buildSpeciesDefensiveCoverage(mon));
	//
	////offensive
	//speciesPanel.append(buildSpeciesOffensiveCoverage(mon));
	
	//level up
	populateTable("speciesLearnsetLevelUpTable", mon.learnset.levelup);
	
	//tmhm
	populateTable("speciesLearnsetTMHMTable", mon.learnset.TMHM);
	
	//tutor
	populateTable("speciesLearnsetTutorTable", mon.learnset.tutor);
	
	//egg moves
	populateTable("speciesLearnsetEggMovesTable", mon.learnset.eggmoves);
	
	window.scrollTo(0, 0);
}

function buildSpeciesDexID(mon) {
	
}

function buildSpeciesType(mon) {
	
}

function buildSpeciesAbilities(mon) {
	
}

function buildSpeciesStats(mon) {
	
}

function buildSpeciesChanges(mon) {
	
}

function buildSpeciesFamily(mon) {
	
}

function buildSpeciesItems(mon) {
	
}

function buildSpeciesEggGroups(mon) {
	
}

function buildSpeciesDefensiveCoverage(mon) {
	
}

function buildSpeciesOffensiveCoverage(mon) {
	
}

function buildSpeciesLearnsetLevelUp(mon) {
	
}

function buildSpeciesLearnsetTMHM(mon) {
	
}

function buildSpeciesLearnsetTutor(mon) {
	
}

function buildSpeciesLearnsetEggMoves(mon) {

}