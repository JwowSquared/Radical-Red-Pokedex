const graph = document.getElementById("statsGraph")
const graphStats = [...graph.children]
const statDisplays = [...document.querySelectorAll(".statsGraphHeader")]


const speciesPanelMainContainer = document.getElementById("speciesPanelMainContainer")
const speciesPanelCloseButton = document.getElementById("speciesPanelCloseButton")
const speciesName = document.getElementById("speciesName")
const speciesID = document.getElementById("speciesID")
const speciesPanelInputSpecies = document.getElementById("speciesPanelInputSpecies")
const speciesPanelInputSpeciesDataList = document.getElementById("speciesPanelInputSpeciesDataList")
const speciesSprite = document.getElementById("speciesSprite")
const speciesType1 = document.getElementById("speciesType1")
const speciesType2 = document.getElementById("speciesType2")
const speciesAbilities = document.getElementById("speciesAbilities")
const speciesBaseStatsGraph = document.getElementById("speciesBaseStatsGraph")
const speciesEvolutionsText = document.getElementById("speciesEvolutionsText")
const speciesEvoTable = document.getElementById("speciesEvoTable")
const speciesFormes = document.getElementById("speciesFormes")
const speciesFormesText = document.getElementById("speciesFormesText")
const speciesEggGroups = document.getElementById("speciesEggGroups")
const speciesHeldItems = document.getElementById("speciesHeldItems")
const speciesChanges = document.getElementById("speciesChanges")
const speciesHeldItemsContainer = document.getElementById("speciesHeldItemsContainer")
const speciesChangesContainer = document.getElementById("speciesChangesContainer")
const speciesDefensiveTypeChart = document.getElementById("speciesDefensiveTypeChart")
const recommendedCoverageContainer = document.getElementById("recommendedCoverageContainer")
const recommendedCoverage = document.getElementById("recommendedCoverage")
const speciesOffensiveTypeChart = document.getElementById("speciesOffensiveTypeChart")
const speciesStrategiesContainer = document.getElementById("speciesStrategiesContainer")
const speciesStrategies = document.getElementById("speciesStrategies")
const speciesPanelLevelUpFromPreviousEvoTable = document.getElementById("speciesPanelLevelUpFromPreviousEvoTable")
const speciesPanelLevelUpTable = document.getElementById("speciesPanelLevelUpTable")
const speciesPanelTMHMTable = document.getElementById("speciesPanelTMHMTable")
const speciesPanelTutorTable = document.getElementById("speciesPanelTutorTable")
const speciesPanelEggMovesTable = document.getElementById("speciesPanelEggMovesTable")


async function createSpeciesPanel(name){
    panelSpecies = name
    speciesPanel("show")

    const row = document.getElementById(`${name}`)

    speciesName.innerText = sanitizeString(name)
    speciesID.innerText = `#${species[name]["ID"]}`

    speciesSprite.className = `sprite${name}`
    speciesSprite.src = getSpeciesSpriteSrc(name)

    speciesType1.innerText = sanitizeString(species[name]["type1"])
    speciesType2.innerText = sanitizeString(species[name]["type2"])
    speciesType1.className = `${species[name]["type1"]} background`
    speciesType2.className = `${species[name]["type2"]} background`

    if(speciesType1.innerText === speciesType2.innerText)
        speciesType2.classList.add("hide")
    else
        speciesType2.classList.remove("hide")






    while (speciesAbilities.firstChild)
        speciesAbilities.removeChild(speciesAbilities.firstChild)

    for (let i = 0; i < species[name]["abilities"].length; i++){
        const ability = species[name]["abilities"][i]
        if(i === 1 && ability === species[name]["abilities"][0]){
            continue
        }
        else if(i === 2 && (ability === species[name]["abilities"][0] || ability === "ABILITY_NONE") && (ability === species[name]["abilities"][1] || ability === "ABILITY_NONE")){
            continue
        }
        if(species[name]["abilities"][i] !== "ABILITY_NONE"){
            const abilityContainer = document.createElement("div")
            const abilityName = document.createElement("span")
            const abilityDescription = document.createElement("span")

            abilityName.innerText = abilities[ability]["ingameName"]
            abilityDescription.innerText = abilities[ability]["description"]

            if(i === 2){
                abilityName.className = "bold"
            }
            else{
                abilityName.className = "italic"
            }
            abilityName.classList.add("hyperlink")

            abilityDescription.className = "speciesPanelAbilitiesDescriptionPadding"
            abilityContainer.className = "flex wrap"

            if(isHardcoreRestricted(abilities[ability]["name"])){
                abilityName.style.color = "#FF8F8F"
            }

            abilityName.addEventListener("click", async() => {
                if(!speciesButton.classList.contains("activeButton")){
                    tracker = speciesTracker
                    await tableButtonClick("species")
                }
                deleteFiltersFromTable()

                createFilter(abilities[ability]["ingameName"], "Ability")
                speciesPanel("hide")
                window.scrollTo({ top: 0})
            })

            abilityContainer.append(abilityName)
            abilityContainer.append(abilityDescription)
            speciesAbilities.append(abilityContainer)
        }
    }






    let monStats = [species[name]["baseHP"],
    species[name]["baseAttack"], 
    species[name]["baseDefense"], 
    species[name]["baseSpAttack"], 
    species[name]["baseSpDefense"], 
    species[name]["baseSpeed"],
    species[name]["BST"]]

    
    graphStats.forEach ((stat, index) => {
        statDisplays[index].innerText = monStats[index]

        if(index !== 6){
            stat.style.width = `${(monStats[index] / 255) * graph.offsetWidth}px`
            stat.style.background = `hsl(${monStats[index]*0.7},85%,45%)`
        }
        else{
            stat.style.width = `${(monStats[index] / 255) * graph.offsetWidth/6}px`
            stat.style.background = `hsl(${(monStats[index]*1)/6},85%,45%)`   
        }
    })



    while(speciesEvoTable.firstChild){
        speciesEvoTable.removeChild(speciesEvoTable.firstChild)
    }

    if(species[name]["evolutionLine"].length > 1){
        speciesEvolutionsText.classList.remove("hide")
        let speciesArray = [species[name]["evolutionLine"][0]]
        let targetSpeciesArray = []
        const rootContainer = document.createElement("td")
        rootContainer.append(createClickableImgAndName(species[name]["evolutionLine"][0], false, false, false))
        speciesEvoTable.append(rootContainer)

        mainLoop: while(speciesArray.length > 0){

            let speciesEvoTableContainer = document.createElement("td")

            for(let i = 0; i < speciesArray.length; i++){
                const targetSpecies = speciesArray[i]
                for(let j = 0; j < species[targetSpecies]["evolution"].length; j++){
                    if(species[targetSpecies]["evolutionLine"].indexOf(targetSpecies) >= species[targetSpecies]["evolutionLine"].indexOf(species[targetSpecies]["evolution"][j][2])){ // prevent infinite loop (dialga)
                        break mainLoop
                    }
                    speciesEvoTableContainer.append(createClickableImgAndName(species[targetSpecies]["evolution"][j][2], species[targetSpecies]["evolution"][j], false, false))
                    speciesEvoTable.append(speciesEvoTableContainer)

                    targetSpeciesArray.push(species[targetSpecies]["evolution"][j][2])
                }
            }

            targetSpeciesArray =  Array.from(new Set(targetSpeciesArray))

            speciesArray = targetSpeciesArray
            targetSpeciesArray = []
        }
    }
    else{
        speciesEvolutionsText.classList.add("hide")
    }

    speciesEvoTable.style.display = "ruby"
    speciesEvoTable.className = ""

    if(speciesEvoTable.offsetWidth > 525){
        speciesEvoTable.classList.add("resizeEvo1")
    }
    if(speciesEvoTable.offsetWidth > 400){
        speciesEvoTable.classList.add("resizeEvo2")
    }
    if(speciesEvoTable.offsetWidth > 350){
        speciesEvoTable.classList.add("resizeEvo3")
    }



    

    while (speciesFormes.firstChild)
        speciesFormes.removeChild(speciesFormes.firstChild)


    if(species[name]["forms"].length <= 1)
        speciesFormesText.classList.add("hide")
    else
        speciesFormesText.classList.remove("hide")

    if(species[name]["forms"].length > 1){
        for (let i = 0; i < species[name]["forms"].length; i++){
            speciesFormes.append(createClickableImgAndName(species[name]["forms"][i]))
        }
    }



















    while (speciesEggGroups.firstChild) 
        speciesEggGroups.removeChild(speciesEggGroups.firstChild)
    while (speciesHeldItems.firstChild)
        speciesHeldItems.removeChild(speciesHeldItems.firstChild)
    while (speciesChanges.firstChild)
        speciesChanges.removeChild(speciesChanges.firstChild)




    const eggGroup1 = document.createElement("div")
    const eggGroup2 = document.createElement("div")
    eggGroup1.innerText = sanitizeString(species[name]["eggGroup1"])
    eggGroup2.innerText = sanitizeString(species[name]["eggGroup2"])
    speciesEggGroups.append(eggGroup1)
    if(species[name]["eggGroup1"] !== species[name]["eggGroup2"])
        speciesEggGroups.append(eggGroup2)





    if(species[name]["item1"] !== "ITEM_NONE"){
        const heldItem1 = document.createElement("div")
        heldItem1.innerText = `50% ${sanitizeString(species[name]["item1"])}`
        speciesHeldItems.append(heldItem1)
    }
    if(species[name]["item2"] !== "ITEM_NONE"){
        const heldItem2 = document.createElement("div")
        heldItem2.innerText = `5% ${sanitizeString(species[name]["item2"])}`
        speciesHeldItems.append(heldItem2)
    }

    if(speciesHeldItems.firstChild)
        speciesHeldItemsContainer.classList.remove("hide")
    else
        speciesHeldItemsContainer.classList.add("hide")







    if(species[name]["changes"].length !== 0){
        for (let i = 0; i < species[name]["changes"].length; i++){
            const stat = species[name]["changes"][i][0]
            const oldStat = species[name]["changes"][i][1]
            const newStat = species[name][stat]
            createChange(stat, oldStat, newStat, name, speciesChanges)
        }
    }
    if(speciesChanges.firstChild)
        speciesChangesContainer.classList.remove("hide")
    else
        speciesChangesContainer.classList.add("hide")









    while (speciesDefensiveTypeChart.firstChild)
        speciesDefensiveTypeChart.removeChild(speciesDefensiveTypeChart.firstChild)

    Object.keys(typeChart).forEach(type => {
        const defensiveTypeEffectivenessContainer = document.createElement("span")
        const checkType = document.createElement("span")
        const defensiveTypeEffectivenessValue = document.createElement("span")
        defensiveTypeEffectivenessContainer.className = "flex flexCenter flexColumn speciesDefensiveTypeChartMarginTop"
        checkType.innerText = sanitizeString(type)
        checkType.className = `background2 ${type}`

        defensiveTypeEffectivenessValue.innerText = getPokemonResistanceValueAgainstType(species[name], type)

        defensiveTypeEffectivenessValue.className = `typeChartDefensive${defensiveTypeEffectivenessValue.innerText} background3`
        defensiveTypeEffectivenessContainer.append(checkType)
        defensiveTypeEffectivenessContainer.append(defensiveTypeEffectivenessValue)
        speciesDefensiveTypeChart.append(defensiveTypeEffectivenessContainer)
    })





    while (recommendedCoverage.children.length > 0)
        recommendedCoverage.removeChild(recommendedCoverage.firstChild)

    for(const type of getSpeciesBestCoverageTypes(species[name])){
        const recommendationContainer = document.createElement("span"); recommendationContainer.className = "speciesOffensiveTypeChartMarginTop"
        const recommendationType = document.createElement("span")
        const recommendationScore = document.createElement("div")

        recommendationType.innerText = sanitizeString(type[0])
        recommendationType.className = `background ${type[0]}`

        recommendationScore.innerText = type[1].toFixed(2)

        recommendationContainer.append(recommendationType)
        recommendationContainer.append(recommendationScore)
        recommendedCoverage.append(recommendationContainer)
    }

    if(recommendedCoverage.children.length === 0){
        recommendedCoverageContainer.classList.add("hide")
    }
    else{
        recommendedCoverageContainer.classList.remove("hide")
    }





    while (speciesOffensiveTypeChart.firstChild)
        speciesOffensiveTypeChart.removeChild(speciesOffensiveTypeChart.firstChild)

    Object.keys(typeChart).forEach(type => {
        const offensiveTypeEffectivenessContainer = document.createElement("span")
        const checkType = document.createElement("span")
        const offensiveTypeEffectivenessValue = document.createElement("span")
        offensiveTypeEffectivenessContainer.className = "flex flexCenter flexColumn speciesOffensiveTypeChartMarginTop"
        checkType.innerText = sanitizeString(type)
        checkType.className = `background2 ${type}`

        offensiveTypeEffectivenessValue.innerText = getPokemonEffectivenessValueAgainstType(species[name], type)

        offensiveTypeEffectivenessValue.className = `typeChartOffensive${offensiveTypeEffectivenessValue.innerText} background3`
        offensiveTypeEffectivenessContainer.append(checkType)
        offensiveTypeEffectivenessContainer.append(offensiveTypeEffectivenessValue)
        speciesOffensiveTypeChart.append(offensiveTypeEffectivenessContainer)
    })














    if(strategies[name]){
        speciesStrategiesContainer.classList.remove("hide")
        while(speciesStrategies.firstChild){
            speciesStrategies.removeChild(speciesStrategies.firstChild)
        }
        for(let i = 0; i < strategies[name].length; i++){
            speciesStrategies.append(createSpeciesStrategy(strategies[name][i], name))
        }
    }
    else{
        speciesStrategiesContainer.classList.add("hide")
    }














    buildSpeciesPanelLevelUpFromPreviousEvoTable(speciesPanelLevelUpFromPreviousEvoTable, name)
    buildSpeciesPanelDoubleLearnsetsTable(speciesPanelLevelUpTable, name, "levelUpLearnsets")
    buildSpeciesPanelSingleLearnsetsTable(speciesPanelTMHMTable, name, "TMHMLearnsets")
    buildSpeciesPanelSingleLearnsetsTable(speciesPanelTutorTable, name, "tutorLearnsets")
    buildSpeciesPanelSingleLearnsetsTable(speciesPanelEggMovesTable, name, "eggMovesLearnsets")
}





speciesPanelInputSpecies.addEventListener("input", e => {
    const value = e.target.value
    if(speciesIngameNameArray.includes(value)){
        const species = `SPECIES_${value.replaceAll(" ", "_").toUpperCase()}`
        createSpeciesPanel(species)
        window.scrollTo(0, 0)
        speciesPanelInputSpecies.blur()
        speciesPanelInputSpecies.value = ""
    }
})






function createClickableImgAndName(speciesName, evoConditions = false, showName = true, miniSprite = true){
    const container = document.createElement("div")
    const sprite = document.createElement("img")
    const name = document.createElement("span")
    
    const hrefContainer = document.createElement("a")
    hrefContainer.href = `${window.location.origin + window.location.pathname}?species=${speciesName}`
    hrefContainer.onclick = function(){return false}
    hrefContainer.classList.add("hrefContainer")

    container.className = "flexCenter flex flexRow hyperlink"

    sprite.src = getSpeciesSpriteSrc(speciesName)
    sprite.className = `sprite${speciesName}`
    if(miniSprite){
        sprite.classList.add("miniSprite")
    }
    else{
        sprite.classList.add("miniSprite3")
    }

    if(evoConditions){
        const evoCondition = document.createElement("span")
        if(evoConditions[0] !== "EVO_MEGA"){
            evoCondition.innerText = `${sanitizeString(evoConditions[0])} (${sanitizeString(evoConditions[1])})`
        }
        else{
            evoCondition.innerText = `Mega`
        }
        evoCondition.innerText += ` ➝ `
        evoCondition.className = "evoMethod"
        container.append(evoCondition)
    }
    if(showName){
        name.innerText = sanitizeString(species[speciesName]["name"])
        name.className = "underline"
    }

    container.append(sprite)
    container.append(name)

    container.addEventListener("click", () => {
        createSpeciesPanel(speciesName)
    })

    hrefContainer.append(container)

    return hrefContainer
}








function createChange(stat, oldStat = [""], newStat = [""], speciesName, obj){

    if(typeof newStat == "object"){
        for (let i = 0; i < newStat.length; i++){


            const changeMainContainer = document.createElement("div")
            const changeContainer = document.createElement("span")
            const statContainer = document.createElement("span")

            const oldStatContainer = document.createElement("span")
            const newStatContainer = document.createElement("span")

            statContainer.innerText = replaceStatString(`${stat}${i}`)


            if(newStat[i] !== oldStat[i]){
                if(oldStat[i] in abilities){
                    oldStatContainer.innerText = abilities[oldStat[i]]["ingameName"]
                }
                else{
                    oldStatContainer.innerText = `${sanitizeString(oldStat[i])}`
                }
                if(newStat[i] in abilities){
                    newStatContainer.innerText = abilities[newStat[i]]["ingameName"]
                }
                else{
                    newStatContainer.innerText = `${sanitizeString(newStat[i])}`
                }
                appendChangesToObj(changeMainContainer, statContainer, changeContainer, oldStatContainer, newStatContainer, obj)   
            }


        }
    }
    else if(newStat !== oldStat){


        const changeMainContainer = document.createElement("div")
        const changeContainer = document.createElement("span")
        const statContainer = document.createElement("span")

        const oldStatContainer = document.createElement("span")
        const newStatContainer = document.createElement("span")

        statContainer.innerText = replaceStatString(stat)


        oldStatContainer.innerText = `${sanitizeString(oldStat)}`
        newStatContainer.innerText = `${sanitizeString(newStat)}`
        if(!isNaN(newStat)){
            if(newStat > oldStat){
                changeContainer.classList.add("buff")
            }
            else{
                changeContainer.classList.add("nerf")
            }
        }
        else if(stat === "type1" || stat === "type2"){
            oldStatContainer.className = `${oldStat} background2`
            newStatContainer.className = `${newStat} background2`
        }
        appendChangesToObj(changeMainContainer, statContainer, changeContainer, oldStatContainer, newStatContainer, obj)   
    }
}



function appendChangesToObj(changeMainContainer, statContainer, changeContainer, oldStatContainer, newStatContainer, obj){
    changeMainContainer.className = "flex flexAlign"
    changeContainer.classList.add("textAlign")
    changeContainer.classList.add("changeTextAlignFlex")
    statContainer.classList.add("speciesPanelStatPadding")
    oldStatContainer.classList.add("reduceOpacity")
    newStatContainer.classList.add("bold")

    const changeContainerTransition = document.createElement("span")
    changeContainerTransition.innerText = " ➝ "

    changeContainer.append(oldStatContainer, changeContainerTransition, newStatContainer)

    changeMainContainer.append(statContainer, changeContainer)
    obj.append(changeMainContainer)
}







function replaceStatString(stat){
    const replaceStringObject = {
        "type1": "Type 1",
        "type2": "Type 2",
        "eggGroup1": "Egg Group 1",
        "eggGroup2": "Egg Group 2",
        "abilities": "Ability",
        "abilities0": "Ability 1",
        "abilities1": "Ability 2",
        "abilities2": "HA",
        "baseHP": "HP",
        "baseAttack": "Atk",
        "baseDefense": "Def",
        "baseSpAttack": "SpA",
        "baseSpDefense": "SpD",
        "baseSpeed": "Spe",
    }
    if(stat in replaceStringObject){
        return replaceStringObject[stat]
    }
    else{
        return stat
    }
}




















function createSpeciesStrategy(strategy, speciesName){
    const strategyContainer = document.createElement("div")
    const strategyName = document.createElement("h3"); strategyName.className = "strategyName"
    const strategySpriteContainer = document.createElement("span"); strategySpriteContainer.className = "strategySpriteContainer"
    const strategySprite = document.createElement("img"); strategySprite.className = `miniSprite sprite${speciesName} strategySprite`
    const strategyTagsContainer = document.createElement("div"); strategyTagsContainer.className = "strategyTagsContainer"
    const strategyInfo = document.createElement("div"); strategyInfo.className = "strategyInfo"
    const strategyMoves = document.createElement("div"); strategyMoves.className = "strategyTableContainer"
    const strategyMovesTable = document.createElement("table"); strategyMovesTable.className = "strategyTable"
    const strategyMovesTbody = document.createElement("Tbody")
    const strategyMisc = document.createElement("div"); strategyMisc.className = "strategyTableContainer"
    const strategyMiscTable = document.createElement("table"); strategyMiscTable.className = "strategyTable"
    const strategyMiscTbody = document.createElement("Tbody")
    const strategyCommentContainer = document.createElement("div"); strategyCommentContainer.className = "strategyCommentContainer"
    const strategyExportButton = document.createElement("button"); strategyExportButton.className = "strategyExportButton"; strategyExportButton.type = "button"
    
    strategyName.innerText = strategy["name"]
    strategySpriteContainer.append(strategySprite)
    strategySprite.src = sprites[speciesName]
    strategySpriteContainer.append(strategyName)
    strategyContainer.append(strategySpriteContainer)

    if(strategy["tags"].length > 0){
        for(let i = 0; i < strategy["tags"].length; i++){
            const strategyTag = document.createElement("span"); strategyTag.className = "strategyTag"
            strategyTag.innerText = strategy["tags"][i].trim()
            strategyTagsContainer.append(strategyTag)
        }
        strategyContainer.append(strategyTagsContainer)
    }

    strategyMoves.append(strategyMovesTable)
    strategyMovesTable.append(strategyMovesTbody)
    strategyMisc.append(strategyMiscTable)
    strategyMiscTable.append(strategyMiscTbody)

    for(let i = 0; i < strategy["moves"].length; i++){
        strategyMovesTbody.append(createStrategyMove(i, strategy["moves"][i]))
    }
    strategyMiscTbody.append(createStrategyMisc("Item", strategy["item"], speciesName))
    strategyMiscTbody.append(createStrategyMisc("Ability", strategy["ability"], speciesName))
    strategyMiscTbody.append(createStrategyMisc("Nature", strategy["nature"], speciesName))
    strategyMiscTbody.append(createStrategyMisc("EVs", strategy["evs"], speciesName))

    for(let i = 0; i < strategy["comment"].length; i++){
        const strategyComment = document.createElement("div")
        if(strategy["comment"][i] === ""){
            strategyComment.append(document.createElement("br"))
        }
        else{
            strategyComment.innerText = strategy["comment"][i]
        }
        strategyCommentContainer.append(strategyComment)
    }

    strategyExportButton.innerText = "Export"

    strategyInfo.append(strategyMoves)
    strategyInfo.append(strategyMisc)
    strategyInfo.append(strategyCommentContainer)
    strategyContainer.append(strategyInfo)

    if(strategy["paste"].length > 0){
        strategyContainer.append(strategyExportButton)

        strategyExportButton.addEventListener("click", () => {
            let paste = ""

            for(let i = 0; i < strategy["paste"].length; i++){
                if(strategy["paste"][i] !== ""){
                    paste += `${strategy["paste"][i]}\n`
                }
            }

            try{
                navigator.clipboard.writeText(paste).then(() => {
                    strategyExportButton.classList.add("exportSuccess")
                    strategyExportButton.innerText = "Exported"
                })
                setTimeout(() => {
                    strategyExportButton.classList.remove("exportSuccess")
                    strategyExportButton.innerText = "Export"
                }, "3000");
            }
            catch(e){
                try{
                    copyToClipboard(paste)
                    strategyExportButton.classList.add("exportSuccess")
                    strategyExportButton.innerText = "Exported"
                    setTimeout(() => {
                        strategyExportButton.classList.remove("exportSuccess")
                        strategyExportButton.innerText = "Export"
                    }, "3000");
                }
                catch(e){
                    strategyExportButton.classList.add("exportFailure")
                    strategyExportButton.innerText = "Nuh uh"
                    console.log(e)
                }
            }
            
        })
    }

    return strategyContainer
}









function createStrategyMove(num, move){
    const moveContainer = document.createElement("tr"); moveContainer.className = "strategyTr"
    const moveNum = document.createElement("td"); moveNum.className = "strategyLabel"
    const moveName = document.createElement("td"); moveName.className = "strategyData"

    moveNum.innerText = `Move ${num + 1}:`
    if(/\/|\(|\)/.test(move)){
        moveName.innerText = move.trim()
    }
    else{
        moveName.innerText = sanitizeString(move)
    }
    moveContainer.append(moveNum)
    moveContainer.append(moveName)
    return moveContainer
}







function createStrategyMisc(label, value, speciesName){
    const miscContainer = document.createElement("tr"); miscContainer.className = "strategyTr"
    const miscLabel = document.createElement("td"); miscLabel.className = "strategyLabel"
    const miscValue = document.createElement("td"); miscValue.className = "strategyData"

    miscLabel.innerText = `${label}:`
    if(label === "EVs"){
        if(value){
            for(let i = 0; i < value.length; i++){
                if(value[i] > 0){
                    if(!miscValue.innerText == ""){
                        miscValue.innerText += " / "
                    }
                    if(i === 0)
                        miscValue.innerText += `${value[i]} HP`
                    else if(i === 1)
                        miscValue.innerText += `${value[i]} Atk`
                    else if(i === 2)
                        miscValue.innerText += `${value[i]} Def`
                    else if(i === 3)
                        miscValue.innerText += `${value[i]} SpA`
                    else if(i === 4)
                        miscValue.innerText += `${value[i]} SpD`
                    else if(i === 5)
                        miscValue.innerText += `${value[i]} Spe`
                }
            }
        }
        else{
            miscValue.innerText = `Hardcore-Mode` // RR specific code, change string for other repo
        }
    }
    else{
        if(/\/|\(|\)/.test(value)){
            miscValue.innerText = value.trim()
        }
        else{
            miscValue.innerText = sanitizeString(value)
        }
    }
    miscContainer.append(miscLabel)
    miscContainer.append(miscValue)
    return miscContainer
}




















function buildSpeciesPanelLevelUpFromPreviousEvoTable(table, name, label = "", asc = 0){

    let evolutionLineArray = [name]
    for(let i = species[name]["evolutionLine"].indexOf(name) - 1; i >= 0; i--){
        const targetSpecies = species[name]["evolutionLine"][i]
        for(let j = 0; j < species[targetSpecies]["evolution"].length; j++){
            if(evolutionLineArray.includes(species[targetSpecies]["evolution"][j][2]) && !evolutionLineArray.includes(targetSpecies)){
                evolutionLineArray.push(targetSpecies)
            }
        }
    }

    const Tbody = table.querySelector("tbody")
    const THead = table.querySelector("thead")

    if(!Tbody || !THead){
        return
    }

    while(Tbody.firstChild){
        Tbody.removeChild(Tbody.firstChild)
    }

    let movesArray = []

    for(let i = 1; i < evolutionLineArray.length; i++){
        sortLearnsetsArray(THead, species[evolutionLineArray[i]]["levelUpLearnsets"], label, asc).forEach(move => {
            if(!speciesCanLearnMove(species[name], move[0]) && !movesArray.includes(move[0])){

                movesArray.push(move[0])

                const row = document.createElement("tr")
    
                const moveName = document.createElement("td")
                moveName.innerText = moves[move[0]]["ingameName"]
                moveName.className = "bold"
                if(isHardcoreRestricted(move[0])){
                    moveName.style.color = "#FF8F8F"
                }
                row.append(moveName)
    
                const typeContainer = document.createElement("td")
                const type = document.createElement("div")
                type.innerText = sanitizeString(moves[move[0]]["type"])
                type.className = `${moves[move[0]]["type"]} background`
                typeContainer.append(type)
                row.append(typeContainer)
    
                const splitContainer = document.createElement("td")
                const splitIcon = document.createElement("img")
                splitIcon.src = `src/moves/${moves[move[0]]["split"]}.png`
                splitIcon.className = `${sanitizeString(moves[move[0]]["split"])} splitIcon`
                splitContainer.append(splitIcon)
                row.append(splitContainer)
    
                const power = document.createElement("td")
                power.className = "speciesPanelLearnsetsPower"
                if(moves[move[0]]["power"] != 0){
                    power.innerText = moves[move[0]]["power"]
                }
                else{
                    power.innerText = "-"   
                }
                row.append(power)
    
                const accuracy = document.createElement("td")
                accuracy.className = "speciesPanelLearnsetsAccuracy"
                if(moves[move[0]]["accuracy"] != 0){
                    accuracy.innerText = moves[move[0]]["accuracy"]
                }
                else{
                    accuracy.innerText = "-"   
                }
                row.append(accuracy)
    
                const PP = document.createElement("td")
                PP.className = "speciesPanelLearnsetsPP"
                PP.innerText = moves[move[0]]["PP"]
                row.append(PP)
    
                const description = document.createElement("td")
                description.className = "speciesPanelLearnsetsEffect"
                for (let j = 0; j < moves[move[0]]["description"].length; j++){
                    description.innerText += moves[move[0]]["description"][j]
                }
    
                row.addEventListener('click', function () {
                    createPopupForMove(moves[move[0]])
                    overlay.style.display = 'block'
                }) 
    
                row.append(description)
    
                Tbody.append(row)
            }
        })
    }

    if(Tbody.children.length > 0){
        table.classList.remove("hide")
    }
    else{
        table.classList.add("hide")
    }
}


function buildSpeciesPanelDoubleLearnsetsTable(table, name, input, label = "", asc = 0){

    const Tbody = table.querySelector("tbody")
    const THead = table.querySelector("thead")

    if(!Tbody || !THead){
        return
    }

    while(Tbody.firstChild){
        Tbody.removeChild(Tbody.firstChild)
    }

    sortLearnsetsArray(THead, species[name][input], label, asc).forEach(move => {
        const row = document.createElement("tr")

        const level = document.createElement("td")
        level.innerText = move[1]
        row.append(level)

        const moveName = document.createElement("td")
        moveName.innerText = moves[move[0]]["ingameName"]
        moveName.className = "bold"
        if(isHardcoreRestricted(move[0])){
            moveName.style.color = "#FF8F8F"
        }
        row.append(moveName)

        const typeContainer = document.createElement("td")
        const type = document.createElement("div")
        type.innerText = sanitizeString(moves[move[0]]["type"])
        type.className = `${moves[move[0]]["type"]} background`
        typeContainer.append(type)
        row.append(typeContainer)

        const splitContainer = document.createElement("td")
        const splitIcon = document.createElement("img")
        splitIcon.src = `src/moves/${moves[move[0]]["split"]}.png`
        splitIcon.className = `${sanitizeString(moves[move[0]]["split"])} splitIcon`
        splitContainer.append(splitIcon)
        row.append(splitContainer)

        const power = document.createElement("td")
        power.className = "speciesPanelLearnsetsPower"
        if(moves[move[0]]["power"] != 0){
            power.innerText = moves[move[0]]["power"]
        }
        else{
            power.innerText = "-"   
        }
        row.append(power)

        const accuracy = document.createElement("td")
        accuracy.className = "speciesPanelLearnsetsAccuracy"
        if(moves[move[0]]["accuracy"] != 0){
            accuracy.innerText = moves[move[0]]["accuracy"]
        }
        else{
            accuracy.innerText = "-"   
        }
        row.append(accuracy)

        const PP = document.createElement("td")
        PP.className = "speciesPanelLearnsetsPP"
        PP.innerText = moves[move[0]]["PP"]
        row.append(PP)

        const description = document.createElement("td")
        description.className = "speciesPanelLearnsetsEffect"
        for (let j = 0; j < moves[move[0]]["description"].length; j++){
            description.innerText += moves[move[0]]["description"][j]
        }

        row.addEventListener('click', function () {
            createPopupForMove(moves[move[0]])
            overlay.style.display = 'block'
        }) 

        row.append(description)

        Tbody.append(row)
    })
}


function buildSpeciesPanelSingleLearnsetsTable(table, name, input, label = "", asc = 0){

    const Tbody = table.querySelector("tbody")
    const THead = table.querySelector("thead")

    if(!Tbody || !THead){
        return
    }

    while(Tbody.firstChild){
        Tbody.removeChild(Tbody.firstChild)
    }

    sortLearnsetsArray(THead, species[name][input], label, asc).forEach(move => {
        const row = document.createElement("tr")

        const moveName = document.createElement("td")
        moveName.innerText = moves[move]["ingameName"]
        moveName.className = "bold"
        if(isHardcoreRestricted(move)){
            moveName.style.color = "#FF8F8F"
        }
        row.append(moveName)

        const typeContainer = document.createElement("td")
        const type = document.createElement("div")
        type.innerText = sanitizeString(moves[move]["type"])
        type.className = `${moves[move]["type"]} background`
        typeContainer.append(type)
        row.append(typeContainer)

        const splitContainer = document.createElement("td")
        const splitIcon = document.createElement("img")
        splitIcon.src = `src/moves/${moves[move]["split"]}.png`
        splitIcon.className = `${sanitizeString(moves[move]["split"])} splitIcon`
        splitContainer.append(splitIcon)
        row.append(splitContainer)

        const power = document.createElement("td")
        power.className = "speciesPanelLearnsetsPower"
        if(moves[move]["power"] != 0){
            power.innerText = moves[move]["power"]
        }
        else{
            power.innerText = "-"   
        }
        row.append(power)

        const accuracy = document.createElement("td")
        accuracy.className = "speciesPanelLearnsetsAccuracy"
        if(moves[move]["accuracy"] != 0){
            accuracy.innerText = moves[move]["accuracy"]
        }
        else{
            accuracy.innerText = "-"   
        }
        row.append(accuracy)

        const PP = document.createElement("td")
        PP.className = "speciesPanelLearnsetsPP"
        PP.innerText = moves[move]["PP"]
        row.append(PP)

        const description = document.createElement("td")
        description.className = "speciesPanelLearnsetsEffect"
        for (let j = 0; j < moves[move]["description"].length; j++){
            description.innerText += moves[move]["description"][j]
        }

        row.addEventListener('click', function () {
            createPopupForMove(moves[move])
            overlay.style.display = 'block'
        }) 

        row.append(description)

        Tbody.append(row)
    })
}



function sortLearnsetsArray(thead, learnsetsArray, label, asc){
    let index = ""

    if(asc == 0){
        thead.querySelectorAll("th").forEach(th => {
            if(th.classList.contains("th-sort-asc")){
                asc = 1
                label = th.innerText
            }
            else if(th.classList.contains("th-sort-desc")){
                asc = -1
                label = th.innerText
            }
        })
    }


    if(asc == 0){
        return learnsetsArray
    }

    if(label === "Name" || label === "Type" || label === "Split" || label === "Power"){
        index = label.toLowerCase()
    }
    else if(label === "Level"){
        index = "level"
    }
    else if(label === "Acc"){
        index = "accuracy"
    }
    else if(label === "Effect"){
        index = "description"
    }
    else if(label === "PP"){
        index = label.toUpperCase()
    }
    else{
        return learnsetsArray
    }

    learnsetsArray.sort((a, b) => {
        let stringA = ""
        let stringB = ""

        if(index === "level"){
            stringA = parseInt(a[1])
            stringB = parseInt(b[1])
        }
        else if(Array.isArray(a)){
            stringA += moves[a[0]][index]
            stringB += moves[b[0]][index]
    
            if(!isNaN(stringA)){
                stringA = parseInt(moves[a[0]][index])
            }
            if(!isNaN(stringB)){
                stringB = parseInt(moves[b[0]][index])
            }
        }
        else{
            stringA += moves[a][index]
            stringB += moves[b][index]
    
            if(!isNaN(stringA)){
                stringA = parseInt(moves[a][index])
            }
            if(!isNaN(stringB)){
                stringB = parseInt(moves[b][index])
            }
        }

        return stringA > stringB ? (1 * asc) : (-1 * asc)
    })

    thead.querySelectorAll("th").forEach(th => {
        th.classList.remove("th-sort-asc", "th-sort-desc")
        if(th.innerText === label){
            th.classList.toggle("th-sort-asc", asc > 0)
            th.classList.toggle("th-sort-desc", asc < 0)
        }
    })

    return learnsetsArray
}







document.querySelectorAll("#speciesPanelLevelUpFromPreviousEvoTableTHead, #speciesPanelLevelUpTableTHead, #speciesPanelTMHMTableTHead, #speciesPanelTutorTableTHead, #speciesPanelEggMovesTableTHead").forEach(thead => {
    thead.querySelectorAll("th").forEach(th => {
        th.addEventListener("click", () => {
            const offset = window.scrollY
            if(th.classList.contains("th-sort-desc")){
                buildSpeciesPanelLevelUpFromPreviousEvoTable(speciesPanelLevelUpFromPreviousEvoTable, panelSpecies, th.innerText, 1)
                buildSpeciesPanelDoubleLearnsetsTable(speciesPanelLevelUpTable, panelSpecies, "levelUpLearnsets", th.innerText, 1)
                buildSpeciesPanelSingleLearnsetsTable(speciesPanelTMHMTable, panelSpecies, "TMHMLearnsets", th.innerText, 1)
                buildSpeciesPanelSingleLearnsetsTable(speciesPanelTutorTable, panelSpecies, "tutorLearnsets", th.innerText, 1)
                buildSpeciesPanelSingleLearnsetsTable(speciesPanelEggMovesTable, panelSpecies, "eggMovesLearnsets", th.innerText, 1)
            }
            else{
                buildSpeciesPanelLevelUpFromPreviousEvoTable(speciesPanelLevelUpFromPreviousEvoTable, panelSpecies, th.innerText, -1)
                buildSpeciesPanelDoubleLearnsetsTable(speciesPanelLevelUpTable, panelSpecies, "levelUpLearnsets", th.innerText, -1)
                buildSpeciesPanelSingleLearnsetsTable(speciesPanelTMHMTable, panelSpecies, "TMHMLearnsets", th.innerText, -1)
                buildSpeciesPanelSingleLearnsetsTable(speciesPanelTutorTable, panelSpecies, "tutorLearnsets", th.innerText, -1)
                buildSpeciesPanelSingleLearnsetsTable(speciesPanelEggMovesTable, panelSpecies, "eggMovesLearnsets", th.innerText, -1)
            }
            //speciesPanelMainContainer.classList.remove("hide")
            window.scroll({top: offset})
        })
    })
})







speciesPanelCloseButton.addEventListener("click", () => {
    speciesPanel("hide")
})

async function speciesPanel(param){
    if(param === "hide"){
        speciesPanelMainContainer.classList.add("hide")
    }
    else if(param === "show"){
        speciesPanelMainContainer.classList.remove("hide")
    }
    else{
        speciesPanelMainContainer.classList.toggle("hide")
    }
    refreshURLParams()
}