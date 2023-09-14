function setupFilters() {

	let listContainer = document.getElementById("speciesLists");
	let filterLists = {
		"filterName": [],
		"filterRegional": [],
		"filterForm": [],
		"filterType": [],
		"filterEggGroup": [],
		"filterMove": [],
		"filterMoveOfType": [],
		"filterAbility": [],
		"filterItem": [],
		"filterLevelCap": []
	};
	
	for (const key in caps) {
		filterLists["filterLevelCap"].push(caps[key].name);
	}
	
	for (const key in types) {
		filterLists["filterType"].push(types[key].name);
	}
	
	for (const key in moves) {
		filterLists["filterMove"].push(moves[key].name);
	}
	
	for (const key in abilities) {
		filterLists["filterAbility"].push(abilities[key].name);
	}
	
	for (const key in species) {
		let mon = species[key];
		filterLists["filterName"].push(mon.name.name);
		if (mon.name.region)
			filterLists["filterRegional"].push(mon.name.region);
		if (mon.name.form)
			filterLists["filterForm"].push(mon.name.form);
	}
	
	filterLists["filterRegional"] = [...new Set(filterLists["filterRegional"])];
	filterLists["filterForm"] = [...new Set(filterLists["filterForm"])];
	
	let masterlist = document.createElement("datalist");
	masterlist.id = "filterAll";
	for (const key in filterLists) {
		let datalist = document.createElement("datalist");
		datalist.id = key;
		for (const element of filterLists[key]) {
			let option = document.createElement("option");
			option.value = element;
			datalist.append(option);
			masterlist.append(option);
		}
		listContainer.append(datalist);
	}
}