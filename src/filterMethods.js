function setupFilters() {

	let listContainer = document.getElementById("speciesLists");
	let filterConfigs = [
		["Name", [species, "name", "name"]],
		["Region", [species, "name", "region"]],
		["Form", [species, "name", "form"]],
		["Type", [types, "name"]],
		["Move", [moves, "name"]],
		["Move Type", [types, "name"]],
		["Ability", [abilities, "name"]],
		["Egg Group", [eggGroups, "name"]],
		["Held Item", [items, "name"]],
		["Level Cap", [caps, "Name"]]
	];
	
	let filterLists = {};
	for (let i = 0; i < filterCategories.length; i++)
		filterLists[filterNames[i]] = [];

	for (const key in species) {
		let mon = species[key];
		filterLists[filterNames[0]].push(mon.name.name);
		if (mon.name.region)
			filterLists["Region"].push(mon.name.region);
		if (mon.name.form)
			filterLists["Form"].push(mon.name.form);
	}
	
	filterLists["Name"] = [...new Set(filterLists["Name"])];
	filterLists["region"] = [...new Set(filterLists["region"])];
	filterLists["form"] = [...new Set(filterLists["form"])];

	for (const key in types) {
		filterLists["type"].push(types[key].name);
	}
	filterLists["movetype"] = filterLists["type"];
	
	for (const key in moves) {
		filterLists["move"].push(moves[key].name);
	}
	
	for (const key in abilities) {
		filterLists["ability"].push(abilities[key].name);
	}
	
	for (const key in eggGroups) {
		filterLists["egg"].push(eggGroups[key].name);
	}
	
	for (const key in items) {
		filterLists["item"].push(items[key].name);
	}
	
	for (let i = 0; i < caps.length; i++) {
		filterLists["cap"].push(caps[i].Name);
	}
	
	filterConfigs.push("Toggle", [
		"Hardcore",
		"Changed",
		"Evolved",
		"Levelup"
	]);
	
	for (const key in filterLists) {
		let datalist = document.createElement("datalist");
		datalist.id = key;
		for (const element of filterLists[key]) {
			let option = document.createElement("option");
			option.value = element;
			datalist.append(option);
		}
		listContainer.append(datalist);
	}
	
	
	
	let selectFilterCategory = document.getElementById("speciesFilterCategory");
	for (let i = 0; i < filterCategories.length; i++) {
		let option = document.createElement("option");
		option.value = filterCategories[i];
		option.innerText = filterCategories[i];
		selectFilterCategory.append(option);
	}
	selectFilterCategory.addEventListener("change", function(event) {
		event.preventDefault();
		console.log("select ", selectFilterCategory.value);
	});
	
	let speciesInput = document.getElementById("speciesFilterInput");
	speciesInput.setAttribute("list", "name");
	speciesInput.addEventListener("change", function(event) {
		event.preventDefault();
		let input = speciesInput.value.trim();
		if (filterCategories.indexOf(input) !== -1) {
			speciesInput.setAttribute("list", input);
			speciesInput.value = " ";
			return;
		}
		filterSpecies(input);
	});
}

function filterSpecies(input) {
	console.log("filter ", input);
}