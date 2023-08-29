function recalculateMoveFilters() {
	myMoves = []
		myMoveList = document.querySelectorAll("#speciesFilterContainer > div")
		for (let i = 0; i < myMoveList.length; i++) {
			myMoveText = myMoveList[i].innerText.split(": ")
			if (myMoveText[0] === "Move") {
				myMoves.push(myMoveText[1])
				myMoveList[i].click()
			}
		}
		
		for (let i = 0; i < myMoves.length; i++) {
			createFilter(myMoves[i], "Move")
		}
}

function capFilterByLevelUp (value, label) {
	let moveName = null
    Object.keys(moves).forEach(move => {
        if(moves[move]["ingameName"] === value){
            moveName = move
        }
    })
    if(moveName){
        for(let i = 0, j = tracker.length; i < j; i++){
            let name = tracker[i]["key"]
            if(tracker === locationsTracker){
                name = tracker[i]["key"].split("\\")[2]
            }
            if(!speciesCanLearnMoveByLevelUp(species[name], moveName, "levelUpLearnsets")){
                tracker[i]["filter"].push(`filter${label}${value}`.replaceAll(" ", ""))
            }
        }
    }
}

function speciesCanLearnMoveByLevelUp(speciesObj, moveName, index) {

    for(let j = 0; j < speciesObj[index].length; j++){
        if(speciesObj[index][j][0] == moveName && speciesObj[index][j][1] <= caps[capidx][difficulty]){
            return true
        }
    }

    return false
}

function selectFilter(value, label){
    if(label === "Item"){
        filterSpeciesItem(value, label)
    }
    else if(label === "Move"){
		if (isFilteringByLevelUp)
			capFilterByLevelUp(value, label)
		else
			filterSpeciesMove(value, label)
    }
    else if(label === "Type"){
        filterType(value, label)
    }
    else if(label === "Ability"){
        filterSpeciesAbility(value, label)   
    }
    else if(label === "Egg Group"){
        filterSpeciesEggGroup(value, label)   
    }
    else if(label === "Form"){
        filterSpeciesForm(value, label)   
    }
    else if(label === "Split"){
        filterMovesSplit(value, label)
    }
    else if(label === "Base Stats"){
        filterBaseStats(value, label)
    }
    else if(label === "Flag"){
        filterMovesFlags(value, label)
    }
}

function clearLevelCapFilter() {
	
	if (!isFilteringByLevelCap)
		return
	
	for(let i = 0, j = speciesTracker.length; i < j; i++){
        for(let k = 0; k < speciesTracker[i]["filter"].length; k++){
			if(speciesTracker[i]["filter"][k] == `filter${caps[capidx]["Name"]}${difficulty}`.replaceAll(" ", "")){
				speciesTracker[i]["filter"].splice(k, 1)
			}
        }
    }
	
	for(let i = 0, j = locationsTracker.length; i < j; i++){
        for(let k = 0; k < locationsTracker[i]["filter"].length; k++){
			if(locationsTracker[i]["filter"][k] == `filter${caps[capidx]["Name"]}${difficulty}`.replaceAll(" ", "")){
				locationsTracker[i]["filter"].splice(k, 1)
			}
        }
    }
	
    lazyLoading(true)
}

function showLevelCapFilter() {
    
	capDisplayText.innerText = `${caps[capidx]["Name"]} (${caps[capidx][difficulty]})`
	
	if (!isFilteringByLevelCap) {
		return
	}

	filterByLevelCap()
	
	filterList()
	lazyLoading(true)
}

async function buildLevelCaps() {
	
	for (let i = 0; i < 18; i++) {
	
		let filterInfo = constructFilter(i)

		handleEvolutions(filterInfo, "Normal")
		handleEvolutions(filterInfo, "Hardcore")
		
		handleForms(filterInfo, "Normal")
		handleForms(filterInfo, "Hardcore")

		if (i > 0) {
			filterInfo["New Pokemon"]["Normal"] = filterInfo["Pokemon"]["Normal"].filter(x => !caps[i - 1]["Pokemon"]["Normal"].includes(x))
			filterInfo["New Pokemon"]["Hardcore"] = filterInfo["Pokemon"]["Hardcore"].filter(x => !caps[i - 1]["Pokemon"]["Hardcore"].includes(x))
			filterInfo["New Location Keys"] = filterInfo["Location Keys"].filter(x => !caps[i - 1]["Location Keys"].includes(x))
		}
		else {
			filterInfo["New Pokemon"]["Normal"] = filterInfo["Pokemon"]["Normal"]
			filterInfo["New Pokemon"]["Hardcore"] = filterInfo["Pokemon"]["Hardcore"]
			filterInfo["New Location Keys"] = filterInfo["Location Keys"]
		}

		caps.push(filterInfo)
	}
	showLevelCapFilter()
}

function constructFilter(i) {

	filterInfo = {}
	
	filterInfo["Name"] = rawCaps[i]["Name"]
	filterInfo["ID"] = rawCaps[i]["ID"]
	filterInfo["Normal"] = rawCaps[i]["Normal"]
	filterInfo["Hardcore"] = rawCaps[i]["Hardcore"]
	
	filterInfo["Encounters"] = []
	filterInfo["Pokemon"] = {"Normal": [], "Hardcore":[]}
	filterInfo["New Pokemon"] = {"Normal": [], "Hardcore":[]}
	filterInfo["Evolved Pokemon"] = {"Normal": [], "Hardcore":[]}
	
	filterInfo["Locations"] = []
	filterInfo["Location Keys"] = []
	filterInfo["New Location Keys"] = []
	
	filterInfo["Locked"] = []
	filterInfo["Methods"] = []
	filterInfo["Items"] = {"All": [],"Normal": [],"Hardcore": []}
	
	//Compile info from all level caps up to and including i
	for (let j = 0; j <= i; j++) {
	
		filterInfo["Locations"].push(...rawCaps[j]["Locations"])
	
		filterInfo["Methods"].push(...rawCaps[j]["Methods"])
	
		for (const zone in rawCaps[j]["Locked"]) {
			
			if (!(zone in filterInfo["Locked"])) {
				filterInfo["Locked"][zone] = {}
			}
		
			for (const method in rawCaps[j]["Locked"][zone]) {
				filterInfo["Locked"][zone][method] = rawCaps[j]["Locked"][zone][method]
			}
		}
		
		filterInfo["Items"]["All"].push(...rawCaps[j]["Items"]["All"])
		filterInfo["Items"]["Normal"].push(...rawCaps[j]["Items"]["Normal"])
		filterInfo["Items"]["Hardcore"].push(...rawCaps[j]["Items"]["Hardcore"])
	}
	
	for (const zone of filterInfo["Locations"]) {
		for (const method of filterInfo["Methods"]) {
			if (!locations[zone] || !locations[zone][method]) {
				continue
			}
			//if zone + method is in Locked and this.ID is less than the requirement, skip
			if (zone in filterInfo["Locked"] && method in filterInfo["Locked"][zone] && filterInfo["Locked"][zone][method] > filterInfo["ID"]) {
				continue
			}
			
			//Grab pokemon from locations
			filterInfo["Encounters"].push(...Object.keys(locations[zone][method]))
			
			//Add location to location keys
			filterInfo["Location Keys"].push(`${zone}${method}`)
		}
	}
	
	filterInfo["Encounters"] = [...new Set(filterInfo["Encounters"])]
	
	return filterInfo
}

function handleForms(filterInfo, difficulty) {
	
	for (const pokemon of filterInfo["Pokemon"][difficulty]) {
		if (altforms[pokemon]) {
			if (altforms[pokemon]["Req"] <= filterInfo["ID"]) {
				filterInfo["Pokemon"][difficulty].push(...altforms[pokemon]["Forms"])
				if (filterInfo["Evolved Pokemon"][difficulty].indexOf(pokemon) > -1) {
					filterInfo["Evolved Pokemon"][difficulty].push(...altforms[pokemon]["Forms"])
				}
			}
		}
	}
}

function handleEvolutions(filterInfo, difficulty) {
	
	let devolvedEncounters = []
	for (const encounter of filterInfo["Encounters"])
		devolvedEncounters.push(species[encounter]["evolutionLine"][0])
	devolvedEncounters = [...new Set(devolvedEncounters)]
	
	let evolutionTree = []
	for (const encounter of devolvedEncounters) {
		evolutionTree.push([encounter, 1])
		while (evolutionTree.length > 0) {
			
			let [base, minLevel] = evolutionTree.shift()
			let canEvolve = false
			
			for (const [evoCategory, evoCriteria, evoTarget] of species[base]["evolution"]) {
				let levelToEvolve = speciesLevelToEvolve(base, minLevel, evoCategory, evoCriteria, evoTarget, filterInfo, difficulty)
				if (levelToEvolve <= filterInfo[difficulty]) {
					canEvolve = true
					evolutionTree.push([evoTarget, levelToEvolve])
					if (evoCategory === "EVO_MEGA") { //override to include "fully" evolved mons and their mega in the Evolved Pokemon results
						filterInfo["Evolved Pokemon"][difficulty].push(base)
					}
				}
			}
			
			if (!canEvolve) {
				filterInfo["Evolved Pokemon"][difficulty].push(base)
			}
			
			filterInfo["Pokemon"][difficulty].push(base)
		}
	}
}

function speciesLevelToEvolve(base, minLevel, evoCategory, evoCriteria, evoTarget, filterInfo, difficulty) {

	//only method that doesnt require a level up
	if (evoCategory === "EVO_ITEM" || evoCategory === "EVO_MEGA") {
		if (filterInfo["Items"]["All"].indexOf(evoCriteria) > -1 || filterInfo["Items"][difficulty].indexOf(evoCriteria) > -1)
			return minLevel
		return 101
	}
	
	if (evoCategory === "EVO_FRIENDSHIP" || evoCategory === "EVO_FRIENDSHIP_DAY" || evoCategory === "EVO_FRIENDSHIP_NIGHT") {
		return minLevel + 1
	}

	let evoLevelCategories = ["EVO_LEVEL", "EVO_LEVEL_DAY", "EVO_LEVEL_NIGHT", "EVO_MALE_LEVEL", "EVO_FEMALE_LEVEL", "EVO_LEVEL_ATK_GT_DEF", "EVO_LEVEL_ATK_LT_DEF", "EVO_LEVEL_ATK_EQ_DEF", "EVO_LEVEL_SILCOON", "EVO_LEVEL_CASCOON", "EVO_LEVEL_NINJASK", "EVO_LEVEL_SPECIFIC_TIME_RANGE", "EVO_NATURE_TOXTRICITY", "EVO_NATURE_LOWKEY", "EVO_TYPE_IN_PARTY", "EVO_RAINY_FOGGY_OW"]
	
	if (difficulty === "Normal")
		evoLevelCategories.push("EVO_LEVEL_SHEDINJA")

	if (evoLevelCategories.indexOf(evoCategory) > -1) {
		return Number(evoCriteria)
	}
	
	if (evoCategory === "EVO_MOVE") {
		for (const [move, level] of species[base]['levelUpLearnsets']) {
			if (move === evoCriteria) {
				return level
			}
		}
		return 101
	}
	
	if (evoCategory === "EVO_MOVE_TYPE") {
		for (const [move, level] of species[base]['levelUpLearnsets']) {
			if (moves[move]["type"] === evoCriteria) {
				return level
			}
		}
		return 101
	}
}

function filterByLevelCap() {
	
	for(let i = 0, j = speciesTracker.length; i < j; i++) {
		
		let name = speciesTracker[i]["key"]
		let toFilter = false
		
		if(!isFilteringByOnlyNew && caps[capidx]["Pokemon"][difficulty].indexOf(name) == -1) {
			toFilter = true
		}
		else if(isFilteringByOnlyNew && caps[capidx]["New Pokemon"][difficulty].indexOf(name) == -1) {
			toFilter = true
		}
		if (isFilteringByEvolved && caps[capidx]["Evolved Pokemon"][difficulty].indexOf(name) == -1) {
			toFilter = true
		}
		
		if (toFilter) {
			speciesTracker[i]["filter"].push(`filter${caps[capidx]["Name"]}${difficulty}`.replaceAll(" ", ""))
		}
	}
	
	for (let i = 0, j = locationsTracker.length; i < j; i++) {
		
		const zone = locationsTracker[i]["key"].split("\\")[0]
		const method = locationsTracker[i]["key"].split("\\")[1]
		let toFilter = false

		if (!isFilteringByOnlyNew && caps[capidx]["Location Keys"].indexOf(`${zone}${method}`) == -1) {
			toFilter = true
		}
		
		else if (isFilteringByOnlyNew && caps[capidx]["New Location Keys"].indexOf(`${zone}${method}`) == -1) {
			toFilter = true
		}
		
		if (toFilter) {
			locationsTracker[i]["filter"].push(`filter${caps[capidx]["Name"]}${difficulty}`.replaceAll(" ", ""))
		}
	}
}