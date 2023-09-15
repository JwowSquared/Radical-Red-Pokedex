function setupFilters() {

	let listContainer = document.getElementById("speciesLists");
	let filterConfigs = [
		["filterName", "Name", species, "name", "name"],
		["filterRegion", "Region", regions, "name"],
		["filterForm", "Form", species, "name", "form"],
		["filterType", "Type", types, "name"],
		["filterMove", "Move", moves, "name"],
		["filterMoveType", "Move Type", types, "name"],
		["filterAbility", "Ability", abilities, "name"],
		["filterEggGroup", "Egg Group", eggGroups, "name"],
		["filterHeldItem", "Held Item", items, "name"],
		["filterLevelCap", "Level Cap", caps, "name"]
	];
	
	let filterLists = {};
	for (const [key, name, library, property, subproperty] of filterConfigs) {
		filterLists[key] = {};
		let filter = filterLists[key];
		filter.name = name;
		filter.list = [];
		for (const book in library) {
			let page = library[book][property];
			if (subproperty)
				page = page[subproperty];
			if (page)
				filter.list.push({key:book, text:page});
		}
		const ids = filter.list.map(({ title }) => title);
		const filtered = books.filter(({ title }, index) =>
		!ids.includes(title, index + 1));
 
console.log(filtered);
		filter.list = filter.list.filter(el => ![...new Set(filter.)]);
	}
	filterLists["Toggle"] = [
		["TOGGLE_HARDCORE", "Hardcore"],
		["TOGGLE_CHANGED", "Changed"],
		["TOGGLE_EVOLVED", "Evolved"],
		["TOGGLE_LEVELUP", "Levelup"],
		["TOGGLE_REGIONAL", "Regional"]
	];
	
	for (const key in filterLists) {
		let datalist = document.createElement("datalist");
		datalist.id = key;
		for (const [data, value] of filterLists[key]) {
			let option = document.createElement("option");
			option.value = value;
			option.setAttribute("data-value", data);
			datalist.append(option);
		}
		listContainer.append(datalist);
	}
	
	
	
	let selectFilterCategory = document.getElementById("speciesFilterCategory");
	for (const key of Object.keys(filterLists)) {
		let option = document.createElement("option");
		option.value = key;
		option.innerText = key;
		selectFilterCategory.append(option);
	}
	selectFilterCategory.addEventListener("change", function(event) {
		event.preventDefault();
		let filter = selectFilterCategory.value;
		filterSpecies(filter, input);
	});
	
	let speciesInput = document.getElementById("speciesFilterInput");
	speciesInput.setAttribute("list", "name");
	speciesInput.addEventListener("change", function(event) {
		event.preventDefault();
		let input = speciesInput.value;
		let filter = selectFilterCategory.value;
		filterSpecies(filter, input);
	});
}

function filterSpecies(filter, input) {
	console.log(filter, input);
}