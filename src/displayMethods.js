function displaySpeciesRow(tracker, key) {
	let mon = tracker.library[key];
	let currentRow = document.createElement("tr");
	currentRow.className = "speciesRow";
	currentRow.onclick = function() {
		displaySpeciesPanel(mon);
	};
	tracker.body.appendChild(currentRow);
	
	let dexIDCell = document.createElement("td");
	dexIDCell.scope = "col";
	dexIDCell.className = "speciesDexIDCell";
	dexIDCell.textContent = Math.trunc(mon.dexID);
	currentRow.appendChild(dexIDCell);

	appendSpriteCell(currentRow, mon);
	
	appendNameCell(currentRow, mon);
	
	appendTypeCell(currentRow, mon.type.primary, mon.type.secondary);
	
	appendAbilitiesCell(currentRow, mon);
	
	appendStatCells(currentRow, mon);
}

function displayLevelUpMovesRow(tracker, movePair) {
	let [key, level] = movePair;
	let move = tracker.library[key];
	let currentRow = document.createElement("tr");
	currentRow.className = "movesRow";
	tracker.body.appendChild(currentRow);
	
	appendBasicCell(currentRow, "moveLevel", level);
	appendBasicCell(currentRow, "moveName", move.name);
	appendTypeCell(currentRow, move.type);
	appendSplitCell(currentRow, move.split);
	appendBasicCell(currentRow, "movePower", move.power);
	appendBasicCell(currentRow, "moveAccuracy", move.accuracy);
	appendBasicCell(currentRow, "movePP", move.PP);
	appendBasicCell(currentRow, "moveDescription", move.description);
}

function displayMovesRow(tracker, key) {
	let move = tracker.library[key];
	let currentRow = document.createElement("tr");
	currentRow.className = "movesRow";
	tracker.body.appendChild(currentRow);
	
	appendBasicCell(currentRow, "moveName", move.name);
	appendTypeCell(currentRow, move.type);
	appendSplitCell(currentRow, move.split);
	appendBasicCell(currentRow, "movePower", move.power);
	appendBasicCell(currentRow, "moveAccuracy", move.accuracy);
	appendBasicCell(currentRow, "movePP", move.PP);
	appendBasicCell(currentRow, "moveDescription", move.description);
}

function appendBasicCell(row, className, value) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = className;
	cell.textContent = value;
	
	row.appendChild(cell);
}

function appendSplitCell(row, value) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "moveSplit";
	cell.textContent = "Split!";
	
	row.appendChild(cell);
}

function displaySpeciesPanel(mon) {
	let speciesPanel = document.getElementById("speciesPanelPrimaryInfo");
	
	speciesPanel.innerText = "";
	
	//sprite
	speciesPanel.append(buildSpeciesSprite(mon));
	
	//name
	speciesPanel.append(buildSpeciesName(mon));
	
	//dexID
	speciesPanel.append(buildSpeciesDexID(mon));
	
	//type
	speciesPanel.append(buildSpeciesType(mon));
	
	//abilities
	speciesPanel.append(buildSpeciesAbilities(mon));
	
	//stats
	speciesPanel.append(buildSpeciesStats(mon));
	
	//changes
	speciesPanel.append(buildSpeciesChanges(mon));
	
	//family
	speciesPanel.append(buildSpeciesFamily(mon));
	
	//items
	speciesPanel.append(buildSpeciesItems(mon));
	
	//egg groups
	speciesPanel.append(buildSpeciesEggGroups(mon));
	
	//defensive
	speciesPanel.append(buildSpeciesDefensiveCoverage(mon));
	
	//offensive
	speciesPanel.append(buildSpeciesOffensiveCoverage(mon));
	
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

function buildSpeciesSprite(mon) {
	let container = document.createElement("div");
	container.className = "speciesSpriteContainer";
	
	let img = document.createElement("img");
	img.className = "speciesSprite";
	img.alt = mon.name;
	img.src = sprites[mon.ID].sprite;
	
	container.append(img);
	return container;
	
}

function buildSpeciesName(mon) {
	let container = document.createElement("div");
	container.className = "speciesNameContainer";
	
	if (mon.name.specifier) {
		let specifier = document.createElement("div");
		specifier.className = "speciesSpecifier";
		specifier.textContent = mon.name.specifier;
		container.appendChild(specifier);
	}
	
	let name = document.createElement("div");
	name.className = "speciesName";
	name.textContent = mon.name.name;
	container.appendChild(name);

	
	if (mon.name.classification) {
		let classification = document.createElement("div");
		classification.className = "speciesClassification";
		classification.textContent = mon.name.classification;
		container.appendChild(classification);
	}

	return container;
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

function appendSpriteCell(row, mon) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesSpriteCell";
	
	let img = document.createElement("img");
	img.className = "speciesSprite";
	img.alt = mon.name;
	img.src = sprites[mon.ID].sprite;
	
	cell.appendChild(img);
	row.appendChild(cell);
}

function appendNameCell(row, mon) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesNameCell";
	
	if (mon.name.specifier) {
		let specifier = document.createElement("div");
		specifier.className = "speciesSpecifier";
		specifier.textContent = mon.name.specifier;
		cell.appendChild(specifier);
	}
	
	let name = document.createElement("div");
	name.className = "speciesName";
	name.textContent = mon.name.name;
	cell.appendChild(name);

	
	if (mon.name.classification) {
		let classification = document.createElement("div");
		classification.className = "speciesClassification";
		classification.textContent = mon.name.classification;
		cell.appendChild(classification);
	}

	row.appendChild(cell);
}

function appendTypeCell(row, primary, secondary=null) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesTypeCell";
	
	let primaryType = document.createElement("div");
	primaryType.className = "speciesType";
	primaryType.style.backgroundColor = types[primary].color;
	primaryType.textContent = types[primary].name;
	cell.appendChild(primaryType);
	
	if (secondary) {
		let secondaryType = document.createElement("div");
		secondaryType.className = "speciesType";
		secondaryType.style.backgroundColor = types[secondary].color;
		secondaryType.textContent = types[secondary].name;
		cell.appendChild(secondaryType);
	}
	
	row.appendChild(cell);
}

function appendAbilitiesCell(row, mon) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesAbilitiesCell";
	
	if (mon.abilities.primary) {
		let primary = document.createElement("div");
		primary.className = "speciesAbilityPrimary";
		primary.textContent = abilities[mon.abilities.primary].name;
		cell.appendChild(primary);
	}
	
	if (mon.abilities.secondary) {
		let secondary = document.createElement("div");
		secondary.className = "speciesAbilitySecondary";
		secondary.textContent = abilities[mon.abilities.secondary].name;
		cell.appendChild(secondary);
	}
	
	if (mon.abilities.hidden) {
		let hidden = document.createElement("div");
		hidden.className = "speciesAbilityHidden";
		hidden.textContent = abilities[mon.abilities.hidden].name;
		cell.appendChild(hidden);
	}

	row.appendChild(cell);
}

function appendStatCells(row, mon) {
	let statLabels = ["HP", "Atk", "Def", "SpA", "SpD", "Spe", "BST"];
	let statValues = ["HP", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"];

	for (let i = 0; i < statValues.length; i++) {
		let cell = document.createElement("td");
		cell.scope = "col";
		cell.className = "speciesStatCell";
		
		let statLabel = document.createElement("div");
		statLabel.className = "speciesStatLabel";
		statLabel.textContent = statLabels[i];
		cell.appendChild(statLabel);
		
		let statValue = document.createElement("div");
		statValue.className = "speciesStatValue";
		statValue.textContent = mon.stats[statValues[i]];
		cell.appendChild(statValue);
		row.appendChild(cell);
	}
}