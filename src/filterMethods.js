function setupFilters() {

	let toggles = {
		"TOGGLE_CHANGED": {name: "Changed"},
		"TOGGLE_LEVELUP": {name: "Levelup"},
		"TOGGLE_EVOLVED": {name: "Evolved"},
		"TOGGLE_HARDCORE": {name: "Hardcore"},
		"TOGGLE_ONLYNEW": {name: "Only New"}
	};

	let filterConfigs = [
		["Name", filterName, 1, species],
		["Region", filterRegion, 1, regions],
		["Type", filterType, 2, types],
		["Move", filterMove, 4, moves],
		["Move Type", filterMoveType, 1, types],
		["Ability", filterAbilities, 1, abilities],
		["Egg Group", filterEggGroup, 1, eggGroups],
		["Held Item", filterHeldItem, 1, items],
		["Level Cap", filterLevelCap, 1, caps],
		["Toggle", filterToggle, 2, toggles]
	];
	
	for (const [name, filter, max, library] of filterConfigs) {
		filters[name] = buildFilter(name, filter, max, library);
	}

	function sortByName(a, b) { return a[1] == b[1] ? 0 : a[1] < b[1] ? -1 : 1; }
	filters["Move"].options.sort(sortByName);
	filters["Ability"].options.sort(sortByName);
	filters["Egg Group"].options.sort(sortByName);
	filters["Held Item"].options.sort(sortByName);
	filters["Name"].options.filter(x => !species[x[0]].family.cousins || species[x[0]].family.cousins[0] === x[0]);
	filters["Toggle"].toggles = {};

	let listContainer = document.getElementById("speciesLists");
	for (const filter of Object.values(filters)) {
		let datalist = document.createElement("datalist");
		datalist.id = filter.ID;
		let options = filter.options;
		for (let i = 0; i < options.length; i++) {
			let option = document.createElement("option");
			option.value = options[i][1];
			option.dataset.idx = i;
			datalist.append(option);
		}
		listContainer.append(datalist);
	}
	
	let selectFilterCategory = document.getElementById("speciesFilterCategory");
	for (const filter of Object.values(filters)) {
		let option = document.createElement("option");
		option.value = filter.name;
		option.innerText = filter.name;
		selectFilterCategory.append(option);
	}
	
	filters.active = {};
	
	let selectedFilter = filters["Name"];
	selectFilterCategory.addEventListener("change", function(event) {
		event.preventDefault();
		selectedFilter = filters[selectFilterCategory.value];
		speciesInput.setAttribute("list", selectedFilter.ID);
	});
	
	let speciesInput = document.getElementById("speciesFilterInput");
	speciesInput.setAttribute("list", selectedFilter.ID);
	speciesInput.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			let input = speciesInput.value.trim();
			let [key, value] = selectedFilter.options.find(x => x[1] === input);
			if (key)
				filterSpecies(selectedFilter, key);
		};
	});
}

function buildFilter(name, filter, max, library) {
	let basic = {};
	basic.ID = "filter" + name;
	basic.name = name;
	basic.filter = filter;
	basic.max = max;
	basic.options = Object.keys(library).map(x => [x, library[x].name]);
	basic.active = [];
	return basic;
}

function filterSpecies(selectedFilter, input) {
	
	selectedFilter.filter(input);

	let results = Object.keys(species);
	for (const filter of Object.values(filters.active))
		results = results.filter(filter);
	
	populateTable("speciesTable", results);
}

function filterName(input) {
	let func = function(x) {
		if (x === input)
			return true;
		
		if (Math.trunc(species[x].dexID) === Math.trunc(species[input].dexID))
			return true;

		return false;
	}
	
	addFilter(filters["Name"], input, func);
}

function filterRegion(input) {
	let func = x => species[x].family.region === input;
	addFilter(filters["Region"], input, func);
}

function filterType(input) {
	let func = x => species[x].type.primary === input || species[x].type.secondary === input;
	addFilter(filters["Type"], input, func);
}

function filterMove(input) {
	let filter = filters["Move"];
	
	if (input === "RECALC") {
		let activeFilters = [...filter.active];
		for (const activeFilter of activeFilters)
			filterMove(activeFilter);
		return;
	}

	let func = function(x) {
		let learnset = species[x].learnset;
		let found = false;
		for (const key in learnset) {
			if (key === "levelup")
				found = learnset.levelup.find(y => y[0] === input);
			else
				found = learnset[key].find(y => y === input);
			if (found)
				return true;
		}
		return false;
	}
	
	let toggles = filters["Toggle"].toggles;
	if (toggles.TOGGLE_LEVELUP)
		func = x => species[x].learnset.levelup.find(y => y[0] === input);

	addFilter(filter, input, func);
}

function filterMoveType(input) {
	let filter = filters["Move Type"];
	
	if (input === "RECALC") {
		let activeFilters = [...filter.active];
		for (const activeFilter of activeFilters)
			filterMoveType(activeFilter);
		return;
	}
	
	let func = function(x) {
		let learnset = species[x].learnset;
		let found = false;
		for (const key in learnset) {
			if (key === "levelup")
				found = learnset.levelup.find(y => moves[y[0]].type === input);
			else
				found = learnset[key].find(y => moves[y].type === input);
			if (found)
				return true;
		}
		return false;
	}
	
	let toggles = filters["Toggle"].toggles;
	if (toggles.TOGGLE_LEVELUP)
		func = x => species[x].learnset.levelup.find(y => moves[y[0]].type === input);
	
	addFilter(filter, input, func);
}

function filterAbilities(input) {
	let func = x => species[x].abilities.primary === input || species[x].abilities.secondary === input || species[x].abilities.hidden === input;
	addFilter(filters["Ability"], input, func);
}

function filterEggGroup(input) {
	let func = x => x => species[x].family.eggGroup.primary === input || species[x].family.eggGroup.secondary === input;
	addFilter(filters["Egg Group"], input, func);
}

function filterHeldItem(input) {
	let func = x => species[x].items.common === input || species[x].items.rare === input;
	addFilter(filters["Held Item"], input, func);
}

function filterLevelCap(input) {
	let filter = filters["Level Cap"];
	
	if (input === "RECALC") {
		let activeFilters = [...filter.active];
		for (const activeFilter of activeFilters)
			filterLevelCap(activeFilter);
		return;
	}

	let toggles = filters["Toggle"].toggles;
	
	let difficulty = "normal";
	if (toggles.TOGGLE_HARDCORE)
		difficulty = "hardcore";
	
	let category = "all";
	if (toggles.TOGGLE_ONLYNEW)
		category = "new";
	
	let func = x => caps[input][difficulty].pokemon[category].contains(x);
	
	if (toggles.TOGGLE_EVOLVED)
		func = x => caps[input][difficulty].pokemon[category].contains(x) && caps[input][difficulty].pokemon.evolved.contains(x);

	addFilter(filter, input, func);
}

function filterToggle(input) {
	let filter = filters["Toggle"];
	let toggles = filter.toggles;

	if (toggles[input] === true)
		toggles[input] = false;
	else
		toggles[input] = true;
	
	if (input === "TOGGLE_CHANGED") {
		addFilter(filter, input, x => species[x].changed != null);
		return;
	}
	
	if (input === "TOGGLE_EVOLVED" || input === "TOGGLE_HARDCORE" || input === "TOGGLE_ONLYNEW")
		filterLevelCap("RECALC");
	if (input === "TOGGLE_LEVELUP") {
		filterMove("RECALC");
		filterMoveType("RECALC");
	}
}

function addFilter(filter, input, func) {
	
	if (filter.active.indexOf(input) === -1)
		filter.active.push(input);
	
	if (filter.active.length >= filter.max) {
		let key = filter.active.shift();
		delete filter.active[key];
	}

	filters.active[input] = func;
	
	console.log("added new filter ", input);
}