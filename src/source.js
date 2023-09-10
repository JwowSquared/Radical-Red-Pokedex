let repo = "JwowSquared/JwowSquared.github.io";

let species = null;
let sprites = null;
let abilities = null;
let moves = null;
let locations = null;
let types = null;
let caps = null;

let trackers = {};

function compareBasic(a, b) {
	return a == b ? 0 : a < b ? -1 : 1;
}

const propComparator = (library, property) =>
  (a, b) => library[a.key][property] == library[b.key][property] ? 0 : library[a.key][property] < library[b.key][property] ? -1 : 1;
  
const subpropComparator = (library, property, subproperty) =>
  (a, b) => library[a.key][property][subproperty] == library[b.key][property][subproperty] ? 0 : library[a.key][property][subproperty] < library[b.key][property][subproperty] ? -1 : 1;

function clearFilter(tracker, targetFilter) {
	for (const [value, filters] of tracker.data) {
		for (let i = 0; i < filters.length; i++) {
			if (filters[i] === targetFilter)
				filters.splice(i, 1);
		}
	}
}

function showMessage(parent, message) {
	let p = document.createElement("p");
	p.innerText = message;
	parent.append(p);
}

async function onStartup() {
	
	let loadingScreen = document.getElementById("loadingScreen");
	let files = [
		"species",
		"sprites",
		"abilities",
		"moves",
		"locations",
		"types",
		"caps"
	];
	try {
		let requests = [];
		for (let i = 0; i < files.length; i++)
			requests.push(new Request(`https://raw.githubusercontent.com/${repo}/master/data/${files[i]}.js`));
		
		const cache = await caches.open("rrdex release 1.0");
		
		let responses = [];
		for (let i = 0; i < requests.length; i++) {
			showMessage(loadingScreen, `Loading ${files[i]}...`);
			let response = await cache.match(requests[i]);
			if (!response) {
				response = await fetch(requests[i]);
				await cache.put(requests[i], response);
			}
			responses.push(await cache.match(requests[i]));
		}
	
		showMessage(loadingScreen, "Parsing JSON...");
		species = await responses[0].json();
		sprites = await responses[1].json();
		abilities = await responses[2].json();
		moves = await responses[3].json();
		locations = await responses[4].json();
		types = await responses[5].json();
		caps = await responses[6].json();
	}
	catch (e) {
		showMessage(loadingScreen, "Error encountered. Please wait a few minutes and refresh the page.");
		showMessage(loadingScreen, "If that doesn't work, ping @JwowSquared in the Radical Red discord.");
		console.log(e);
		return;
	}
	loadingScreen.className = "hide";
	document.querySelector("main").className = "";
	
	setupTable("speciesTable", species, displaySpeciesRow, 50, sortSpeciesRow, [
		["#", ["dexID"]],
		["Sprite", []],
		["Name", ["name"]],
		["Type", []],
		["Abilities", ["abilities", "primary"]],
		["HP", ["stats", "HP"]],
		["Atk", ["stats", "attack"]],
		["Def", ["stats", "defense"]],
		["SpA", ["stats", "specialAttack"]],
		["SpD", ["stats", "specialDefense"]],
		["Spe", ["stats", "speed"]],
		["BST", ["stats", "total"]]
	]);
	
	populateTable("speciesTable", Object.keys(species));
	
	window.onscroll = function(ev) {
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
		loadChunk(trackers["speciesTable"], false);
		}
	};
}

function setupTable(name, library, displayMethod, maxRows, sortMethod, sortOptions) {
	let wrapper = document.getElementById(name);
	if (!wrapper) {
		console.log(`Table ${name} could not be created, wrapper missing.`);
		return;
	}
	let table = document.createElement("table");
	let thead = document.createElement("thead");
	let tbody = document.createElement("tbody");
	table.className = "align-middle table table-striped table-dark table-hover";
	table.append(thead);
	table.append(tbody);
	wrapper.append(table);
	
	trackers[name] = {};
	let tracker = trackers[name];
	tracker.body = tbody;
	tracker.library = library;
	tracker.displayMethod = displayMethod;
	tracker.maxRows = maxRows;
	
	let sortControls = document.createElement("tr");
	sortControls.className = "sortControls";
	thead.append(sortControls);
	
	for (const [sortLabel, sortProperties] of sortOptions) {
		let sortOption = document.createElement("th");
		sortControls.append(sortOption);
		sortOption.innerText = sortLabel;
		sortOption.className = "sortLocked";
		if (sortProperties.length === 0)
			continue;
		sortOption.className = "sortOption";
		sortOption.onclick = function () {
			sortTracker(this, trackers[name], sortMethod, sortProperties);
		};
	}
	tracker.sortControls = sortControls.getElementsByClassName("sortOption");
}

function populateTable(name, data) {
	let tracker = trackers[name];
	if (!tracker) {
		console.log(`Tracker ${name} does not exist; cannot populate.`);
		return;
	}
	
	tracker.data = [];
	for (const element of data)
		tracker.data.push({"value": element, "filters": []});
	
	tracker.sortControls[0].click();
}

function sortTracker(selectedOption, tracker, sortMethod, sortProperties) {
	let prevClass = selectedOption.className;
	
	for (const option of tracker.sortControls)
		option.className = "sortOption";
	
	selectedOption.className = "sortOption active sortAscending";
	
	if (prevClass === "sortOption") {
		sortMethod(tracker, sortProperties);
	}
	else {
		if (prevClass === "sortOption active sortAscending") {
			selectedOption.className = "sortOption active sortDescending";
		}
	
		tracker.data.reverse();
	}
	
	loadChunk(tracker, true);
}

function basicCompare (a, b) {
	return a == b ? 0 : a < b ? -1 : 1;
}

function sortSpeciesRow(tracker, properties) {
	let library = tracker.library;
	let compare = basicCompare;
	function tiebreaker (a, b) {
		let comp = basicCompare(library[a.value].dexID, library[b.value].dexID);
		if (comp !== 0)
			return comp;

		comp = basicCompare(library[a.value].form.siblings.indexOf(a.value), library[b.value].form.siblings.indexOf(b.value));
		if (comp !== 0)
			return comp;
		
		comp = basicCompare(library[a.value].form.cousins.indexOf(a.value), library[b.value].form.cousins.indexOf(b.value));
		return comp; //theoretically impossible for two species to still be equal at this point
	};
	if (properties.length === 1) {
		let property = properties[0];
		compare = function (a, b) {
			let comp = library[a.value][property] == library[b.value][property] ? 0 : library[a.value][property] < library[b.value][property] ? -1 : 1;
			return comp == 0 ? tiebreaker(a, b) : comp;
		};
	}
	else if (properties.length === 2) {
		let property = properties[0];
		let subproperty = properties[1];
		compare = function (a, b) {
			let comp = library[a.key][property][subproperty] == library[b.key][property][subproperty] ? 0 : library[a.key][property][subproperty] < library[b.key][property][subproperty] ? -1 : 1;
			return comp == 0 ? tiebreaker(a, b) : comp;
		};
	}
	
	tracker.data.sort(compare);
}

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

function loadChunk(tracker, toClear) {
	let rowsAdded = 0;
	
	if (toClear) {
		tracker.body.innerText = "";
		tracker.index = 0;
		window.scrollTo(0, 0); //wtf do i do about this?
	}
	
	let data = tracker.data;
	let i = tracker.index;
	for (j = data.length, k = tracker.maxRows; rowsAdded < k && i < j; i++) {
		if (data[i].filters.length === 0) {
			tracker.displayMethod(tracker, data[i].value);
			rowsAdded++;
		}
	}
	tracker.index = i;
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

onStartup();