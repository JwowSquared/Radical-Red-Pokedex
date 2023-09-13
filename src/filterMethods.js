function setupFilters() {
	
	let filterSpeciesType = [];
	let filterMoveOfType = [];
	let filterMoveName = [];
	let filterAbilityName = [];
	let filterSpeciesName = [];
	let filterSpeciesEggGroup = [];
	let filterSpeciesItems = [];
	let filterSpeciesNameQualifier = [];
	let filterSpeciesNameClassification = [];
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
		filterSpeciesName.push(mon.name.name);
		if (mon.name.qualifier)
			filterSpeciesNameQualifier.push(mon.name.qualifier);
		if (mon.name.classification)
			filterSpeciesNameClassification.push(mon.name.classification);
	}
	
	filterSpeciesNameQualifier = [...new Set(filterSpeciesNameQualifier)];
	filterSpeciesNameClassification = [...new Set(filterSpeciesNameClassification)];
	
	//console.log(filterSpeciesType);
	//console.log(filterMoveOfType);
	//console.log(filterMoveName);
	//console.log(filterAbilityName);
	//console.log(filterSpeciesName);
	//console.log(filterSpeciesEggGroup);
	//console.log(filterSpeciesItems);
	//console.log(filterSpeciesFormRegion);
	//console.log(filterSpeciesFormName);
}