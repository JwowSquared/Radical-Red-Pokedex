function displaySpeciesRow(tracker, key) {
	let currentRow = document.createElement("tr");
	currentRow.id = key;
	currentRow.className = "speciesRow";
	currentRow.onclick = function() {
		displaySpeciesPanel(key);
	};
	tracker.body.appendChild(currentRow);
	
	let dexIDCell = document.createElement("td");
	dexIDCell.scope = "col";
	dexIDCell.className = "speciesDexIDCell";
	dexIDCell.textContent = species[key].dexID;
	currentRow.appendChild(dexIDCell);

	appendSpriteCell(currentRow, key);
	
	appendNameCell(currentRow, key);
	
	appendTypeCell(currentRow, key);
	
	appendAbilitiesCell(currentRow, key);
	
	appendStatCells(currentRow, key);
}


function displaySpeciesPanel(key) {
	speciesPanel.innerText = "";
	
	//sprite
	speciesPanel.append(buildSpeciesSprite(key));
	
	//name
	speciesPanel.append(buildSpeciesName(key));
	
	//dexID
	speciesPanel.append(buildSpeciesDexID(key));
	
	//type
	speciesPanel.append(buildSpeciesType(key));
	
	//abilities
	speciesPanel.append(buildSpeciesAbilities(key));
	
	//stats
	speciesPanel.append(buildSpeciesStats(key));
	
	//changes
	speciesPanel.append(buildSpeciesChanges(key));
	
	//family
	speciesPanel.append(buildSpeciesFamily(key));
	
	//items
	speciesPanel.append(buildSpeciesItems(key));
	
	//egg groups
	speciesPanel.append(buildSpeciesEggGroups(key));
	
	//defensive
	speciesPanel.append(buildSpeciesDefensiveCoverage(key));
	
	//offensive
	speciesPanel.append(buildSpeciesOffensiveCoverage(key));
	
	//level up
	speciesPanel.append(buildSpeciesLearnsetLevelUp(key));
	
	//tmhm
	speciesPanel.append(buildSpeciesLearnsetTMHM(key));
	
	//tutor
	speciesPanel.append(buildSpeciesLearnsetTutor(key));
	
	//egg moves
	speciesPanel.append(buildSpeciesLearnsetEggMoves(key));
	
	window.scrollTo(0, 0);
}


function buildSpeciesSprite(key) {
	let container = document.createElement("div");
	container.className = "speciesSpriteContainer";
	
	let img = document.createElement("img");
	img.className = "speciesSprite";
	img.alt = species[key].name;
	img.src = sprites[key].sprite;
	
	container.append(img);
	return container;
	
}

function buildSpeciesName(key) {
	let container = document.createElement("div");
	container.className = "speciesNameContainer";
	
	if (species[key].form.region) {
		let region = document.createElement("div");
		region.className = "speciesRegion";
		region.textContent = species[key].form.region;
		container.appendChild(region);
	}
	
	let name = document.createElement("div");
	name.className = "speciesName";
	name.textContent = species[key].name;
	container.appendChild(name);

	
	if (species[key].form.name) {
		let form = document.createElement("div");
		form.className = "speciesForm";
		form.textContent = species[key].form.name;
		container.appendChild(form);
	}

	return container;
}

function buildSpeciesDexID(key) {
	
}

function buildSpeciesType(key) {
	
}

function buildSpeciesAbilities(key) {
	
}

function buildSpeciesStats(key) {
	
}

function buildSpeciesChanges(key) {
	
}

function buildSpeciesFamily(key) {
	
}

function buildSpeciesItems(key) {
	
}

function buildSpeciesEggGroups(key) {
	
}

function buildSpeciesDefensiveCoverage(key) {
	
}

function buildSpeciesOffensiveCoverage(key) {
	
}

function buildSpeciesLearnsetLevelUp(key) {
	
}

function buildSpeciesLearnsetTMHM(key) {
	
}

function buildSpeciesLearnsetTutor(key) {
	
}

function buildSpeciesLearnsetEggMoves(key) {

}

function appendSpriteCell(row, key) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesSpriteCell";
	
	let img = document.createElement("img");
	img.className = "speciesSprite";
	img.alt = species[key].name;
	img.src = sprites[key].sprite;
	
	cell.appendChild(img);
	row.appendChild(cell);
}

function appendNameCell(row, key) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesNameCell";
	
	if (species[key].form.region) {
		let region = document.createElement("div");
		region.className = "speciesRegion";
		region.textContent = species[key].form.region;
		cell.appendChild(region);
	}
	
	let name = document.createElement("div");
	name.className = "speciesName";
	name.textContent = species[key].name;
	cell.appendChild(name);

	
	if (species[key].form.name) {
		let form = document.createElement("div");
		form.className = "speciesForm";
		form.textContent = species[key].form.name;
		cell.appendChild(form);
	}

	row.appendChild(cell);
}

function appendTypeCell(row, key) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesTypeCell";
	
	let primary = document.createElement("div");
	primary.className = "speciesType";
	primary.style.backgroundColor = types[species[key].type.primary].color;
	primary.textContent = types[species[key].type.primary].name;
	cell.appendChild(primary);
	
	if (species[key].type.secondary) {
		let secondary = document.createElement("div");
		secondary.className = "speciesType";
		secondary.style.backgroundColor = types[species[key].type.secondary].color;
		secondary.textContent = types[species[key].type.secondary].name;
		cell.appendChild(secondary);
	}
	
	row.appendChild(cell);
}

function appendAbilitiesCell(row, key) {
	let cell = document.createElement("td");
	cell.scope = "col";
	cell.className = "speciesAbilitiesCell";
	
	if (species[key].ability.primary) {
		let primary = document.createElement("div");
		primary.className = "speciesAbilityPrimary";
		primary.textContent = abilities[species[key].ability.primary].name;
		cell.appendChild(primary);
	}
	
	if (species[key].ability.secondary) {
		let secondary = document.createElement("div");
		secondary.className = "speciesAbilitySecondary";
		secondary.textContent = abilities[species[key].ability.secondary].name;
		cell.appendChild(secondary);
	}
	
	if (species[key].ability.hidden) {
		let hidden = document.createElement("div");
		hidden.className = "speciesAbilityHidden";
		hidden.textContent = abilities[species[key].ability.hidden].name;
		cell.appendChild(hidden);
	}

	row.appendChild(cell);
}

function appendStatCells(row, key) {
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
		statValue.textContent = species[key].stats[statValues[i]];
		cell.appendChild(statValue);
		row.appendChild(cell);
	}
}