function setupFilters() {

	let listContainer = document.getElementById("speciesLists");
	let filterCategories = [
		"name",
		"region",
		"form",
		"type",
		"move",
		"movetype",
		"ability",
		"egg",
		"item",
		"cap",
		"toggle"
	];
	
	let filterLists = {};
	for (let i = 0; i < filterCategories.length; i++)
		filterLists[filterCategories[i]] = [];

	for (const key in species) {
		let mon = species[key];
		filterLists["name"].push(mon.name.name);
		if (mon.name.region)
			filterLists["region"].push(mon.name.region);
		if (mon.name.form)
			filterLists["form"].push(mon.name.form);
	}
	
	filterLists["name"] = [...new Set(filterLists["name"])];
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
	
	filterLists["toggle"] = [
		"Hardcore",
		"Changed",
		"Evolved"
	];
	
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