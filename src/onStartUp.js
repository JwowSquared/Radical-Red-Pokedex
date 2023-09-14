async function fetchData() {
	let loadingScreen = document.getElementById("loadingScreen");
	let files = [
		"species",
		"sprites",
		"abilities",
		"moves",
		"locations",
		"types",
		"caps",
		"eggGroups",
		"items"
	];
	try {
		let requests = [];
		for (let i = 0; i < files.length; i++)
			requests.push(new Request(`https://raw.githubusercontent.com/${repo}/master/data/${files[i]}.js`));
		
		const cache = await caches.open(version);
		
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
		eggGroups = await responses[7].json();
		items = await responses[8].json();
	}
	catch (e) {
		showMessage(loadingScreen, "Error encountered. Please wait a few minutes and refresh the page.");
		showMessage(loadingScreen, "If that doesn't work, ping @JwowSquared in the Radical Red discord.");
		console.log(e);
		return;
	}
	loadingScreen.className = "hide";
	document.querySelector("main").className = "";
}

function showMessage(parent, message) {
	let p = document.createElement("p");
	p.innerText = message;
	parent.append(p);
}

async function onStartup() {
	
	await fetchData();
	
	setupTable("speciesLearnsetLevelUpTable", moves, displayLevelUpMovesRow, Object.keys(moves).length, sortLevelUpMovesRow, [
		["Level", ["level"]],
		["Name", ["name"]],
		["Type", ["type"]],
		["Split", ["split"]],
		["Power", ["power"]],
		["Acc", ["accuracy"]],
		["PP", ["PP"]],
		["Description", []],
	]);
	
	setupTable("speciesLearnsetTMHMTable", moves, displayMovesRow, Object.keys(moves).length, sortMovesRow, [
		["Name", ["name"]],
		["Type", ["type"]],
		["Split", ["split"]],
		["Power", ["power"]],
		["Acc", ["accuracy"]],
		["PP", ["PP"]],
		["Description", []],
	]);
	
	setupTable("speciesLearnsetTutorTable", moves, displayMovesRow, Object.keys(moves).length, sortMovesRow, [
		["Name", ["name"]],
		["Type", ["type"]],
		["Split", ["split"]],
		["Power", ["power"]],
		["Acc", ["accuracy"]],
		["PP", ["PP"]],
		["Description", []],
	]);
	
	setupTable("speciesLearnsetEggMovesTable", moves, displayMovesRow, Object.keys(moves).length, sortMovesRow, [
		["Name", ["name"]],
		["Type", ["type"]],
		["Split", ["split"]],
		["Power", ["power"]],
		["Acc", ["accuracy"]],
		["PP", ["PP"]],
		["Description", []],
	]);
	
	setupTable("speciesTable", species, displaySpeciesRow, 50, sortSpeciesRow, [
		["#", ["dexID"]],
		["Sprite", []],
		["Name", ["name", "name"]],
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
	
	setupFilters();
}

function loadChunk(tracker, toClear) {
	let rowsAdded = 0;
	
	if (toClear) {
		tracker.sortControls[0].parentNode.parentNode.scrollIntoView({behavior: "smooth", block: "nearest"});
		tracker.body.innerText = "";
		tracker.index = 0;
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

onStartup();