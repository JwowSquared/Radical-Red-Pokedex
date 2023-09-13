function setupFilters() {
	
	let filterSpeciesType = [];
	let filterMoveOfType = [];
	let filterMoveName = [];
	let filterAbilityName = [];
	let filterSpeciesName = [];
	let filterSpeciesEggGroup = [];
	let filterSpeciesItems = [];
	let filterSpeciesFormRegion = [];
	let filterSpeciesFormName = [];
	let filterLevelCapName = [];
	//toggles
	//mon.changes.length
	//mon.evolution.length
	
	for (const key in types) {
		filterSpeciesType.push(types[key].name);
		filterMoveOfType.push(types[key].name);
	}
	
	for (const key in moves) {
		filterMoveName.push(moves[key].name);
	}
	
	for (const key in abilities) {
		filterAbilityName.push(abilities[key].name);
	}
	
	for (const key in species) {
		let mon = species[key];
		filterSpeciesName.push(mon.name);
		if (mon.forms.region)
			filterSpeciesFormRegion.push(mon.forms.region);
		if (mon.forms.name)
			filterSpeciesFormName.push(mon.forms.name);
	}
	
	filterSpeciesEggGroup = [...new Set(filterSpeciesEggGroup)];
	filterSpeciesItems = [...new Set(filterSpeciesItems)];
	filterSpeciesFormRegion = [...new Set(filterSpeciesFormRegion)];
	filterSpeciesFormName = [...new Set(filterSpeciesFormName)];
	
	console.log(filterSpeciesType);
	console.log(filterMoveOfType);
	console.log(filterMoveName);
	console.log(filterAbilityName);
	console.log(filterSpeciesName);
	console.log(filterSpeciesEggGroup);
	console.log(filterSpeciesItems);
	console.log(filterSpeciesFormRegion);
	console.log(filterSpeciesFormName);
}