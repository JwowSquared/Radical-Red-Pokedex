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
			let comp = library[a.value][property][subproperty] == library[b.value][property][subproperty] ? 0 : library[a.value][property][subproperty] < library[b.value][property][subproperty] ? -1 : 1;
			return comp == 0 ? tiebreaker(a, b) : comp;
		};
	}
	
	tracker.data.sort(compare);
}