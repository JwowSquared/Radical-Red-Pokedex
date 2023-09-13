function basicCompare (a, b) {
	return a == b ? 0 : a < b ? -1 : 1;
}

function sortSpeciesRow(tracker, properties) {
	let library = tracker.library;
	let compare = basicCompare;
	function tiebreaker (a, b) {
		let comp = basicCompare(library[a.value].dexID, library[b.value].dexID);
		return comp;
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

function sortLevelUpMovesRow(tracker, property) {
	let library = tracker.library;
	let compare = basicCompare;
	property = property[0];
	function tiebreaker (a, b) {
		let comp = basicCompare(a.value[1], b.value[1]);
		if (comp !== 0)
			return comp;
		
		comp = basicCompare(library[a.value[0]].name, library[b.value[0]].name);
		return comp;
	};
	if (property === "level") {
		compare = function (a, b) {
			let comp = basicCompare(a.value[1], b.value[1]);
			return comp == 0 ? tiebreaker(a, b) : comp;
		};
	}
	else {
		compare = function (a, b) {
			let comp = library[a.value[0]][property] == library[b.value[0]][property] ? 0 : library[a.value[0]][property] < library[b.value[0]][property] ? -1 : 1;
			return comp == 0 ? tiebreaker(a, b) : comp;
		};
	}
	tracker.data.sort(compare);
}

function sortMovesRow(tracker, property) {
	let library = tracker.library;
	let compare = basicCompare;
	property = property[0];
	function tiebreaker (a, b) {
		let comp = basicCompare(library[a.value].name, library[b.value].name);
		return comp;
	};
	compare = function (a, b) {
		let comp = library[a.value][property] == library[b.value][property] ? 0 : library[a.value][property] < library[b.value][property] ? -1 : 1;
		return comp == 0 ? tiebreaker(a, b) : comp;
	};

	tracker.data.sort(compare);
}