async function regexSpecies(textSpecies, species){
    const lines = textSpecies.split("\n")
    let ID = 0

    await lines.forEach(line => {

        const matchSpecies = line.match(/#define *(SPECIES_\w+)/i)
        if(matchSpecies){
            const name = matchSpecies[1]

            const matchID = line.match(/0[xX]?[0-9a-fA-F]+/i)
            if(matchID){
                ID = parseInt(matchID[0])

                species[name] = {}
                species[name]["name"] = name
                species[name]["ID"] = ID
            }
        }
    })
    return species
}









async function regexBaseStats(textBaseStats, species){
    const lines = textBaseStats.split("\n")

    const regex = /baseHP|baseAttack|baseDefense|baseSpeed|baseSpAttack|baseSpDefense|type1|type2|item1|item2|eggGroup1|eggGroup2|ability1|ability2|hiddenAbility/
    let stop = true, value, name

    await lines.forEach(line => {
        checkTimeout()
        if(/#else/i.test(line)){
            stop = true
        }
        else if(/#endif/i.test(line)){
            stop = false
        }


        const matchSpecies = line.match(/SPECIES_\w+/i)
        if(matchSpecies){
            name = matchSpecies[0]
            stop = false
        }


        if(name){
            const matchRegex = line.match(regex)
            if(matchRegex){
                const match = matchRegex[0]



                if(match === "baseHP" || match === "baseAttack" || match === "baseDefense" || match === "baseSpeed" || match === "baseSpAttack" || match === "baseSpDefense"){
                    const matchInt = line.match(/\d+/)
                    if(matchInt)
                        value = parseInt(matchInt[0])
                }
                else if(match === "type1" || match === "type2" || match === "item1" || match === "item2" || match === "eggGroup1" || match === "eggGroup2" || match === "ability1" || match === "ability2" || match === "hiddenAbility"){
                    value = line.match(/\w+_\w+/i)
                    if(value)
                        value = value[0]
                }



                if(!stop){
                    if(match === "ability1" || match === "ability2" || match === "hiddenAbility"){
                        species[name]["abilities"].push(value)
                    }
                    else{
                        species[name][match] = value
                    }
                }
            }
        }
    })
    return await getBST(species)
}



async function regexChanges(textChanges, species){
    const lines = textChanges.split("\n")

    const regex = /baseHP|baseAttack|baseDefense|baseSpeed|baseSpAttack|baseSpDefense|type1|type2|ability1|ability2|hiddenAbility/
    let value, name, abilities = []

    await lines.forEach(line => {
        checkTimeout()
        const matchSpecies = line.match(/SPECIES_\w+/i)
        if(matchSpecies){
            if(name in species && abilities.length >= species[name]["abilities"].length && JSON.stringify(abilities) !== JSON.stringify(species[name]["abilities"])){
                species[name]["changes"].push(["abilities", abilities])
            }
            name = matchSpecies[0]
            abilities = []
        }


        if(name in species){
            const matchRegex = line.match(regex)
            if(matchRegex && !/NOT DEFINED/i.test(line)){
                const match = matchRegex[0]



                if(match === "baseHP" || match === "baseAttack" || match === "baseDefense" || match === "baseSpeed" || match === "baseSpAttack" || match === "baseSpDefense"){
                    const matchInt = line.match(/\d+/)
                    if(matchInt)
                        value = parseInt(matchInt[0])
                }
                else if(match === "type1" || match === "type2"){
                    value = line.match(/\w+_\w+/i)
                    if(value)
                        value = value[0]
                }
                else if(match === "ability1" || match === "ability2" || match === "hiddenAbility"){
                    value = line.match(/\w+_\w+/i)
                    if(value)
                        value = value[0]
                    abilities.push(value)
                }

                if(match in species[name] && species[name][match] !== value){
                    species[name]["changes"].push([match, value])
                }
            }
        }
    })
    return species
}


async function regexChangesGen9(textChangesGen9, species){
    const lines = textChangesGen9.split("\n")
    const stats = ["baseHP", "baseAttack", "baseDefense", "baseSpeed", "baseSpAttack", "baseSpDefense"]

    const regex = /BaseStats|Types|Abilities|HiddenAbility/
    let name, abilities = []

    await lines.forEach(line => {
        checkTimeout()
        const matchSpecies = line.match(/\[(\w+)\]/)
        if(matchSpecies){
            while(abilities.length < 3){
                abilities.push("ABILITY_NONE")
            }
            if(name in species && abilities.length >= species[name]["abilities"].length && JSON.stringify(abilities) !== JSON.stringify(species[name]["abilities"])){
                species[name]["changes"].push(["abilities", abilities])
            }
            name = `SPECIES_${matchSpecies[1]}`
            abilities = []
        }


        if(name in species){
            const matchRegex = line.match(regex)
            if(matchRegex){
                const match = matchRegex[0]

                if(match === "BaseStats"){
                    const matchInt = line.match(/\d+/g)
                    if(matchInt){
                        for(let i = 0; i < matchInt.length; i++){
                            if(species[name][stats[i]] != matchInt[i]){
                                species[name]["changes"].push([stats[i], matchInt[i]])
                            }
                        }
                    }
                }
                else if(match === "Abilities"){
                    const matchAbilities = line.match(/= *(\w+) *,? *(\w+)?/)
                    if(matchAbilities){
                        for(let i = 1; i < matchAbilities.length; i++){
                            if(matchAbilities[i]){
                                const ability = `ABILITY_${matchAbilities[i]}`
                                abilities.push(ability)
                            }
                        }
                        while(abilities.length < 2){
                            abilities.push("ABILITY_NONE")
                        }
                    }
                }
                else if(match === "HiddenAbility"){
                    const matchAbilities = line.match(/= *(\w+)/)
                    if(matchAbilities){
                        const ability = `ABILITY_${matchAbilities[1]}`
                        abilities.push(ability)
                    }
                }
                else if(match === "Types"){
                    const matchTypes = line.match(/= *(\w+) *,? *(\w+)?/)
                    if(matchTypes){
                        const type1 = `TYPE_${matchTypes[1]}`
                        let type2 = type1
                        if(matchTypes[2]){
                            type2 = `TYPE_${matchTypes[2]}`
                        }

                        if(species[name]["type1"] !== type1){
                            species[name]["changes"].push(["type1", type1])
                        }
                        if(species[name]["type2"] !== type2){
                            species[name]["changes"].push(["type2", type2])
                        }
                    }
                }
            }
        }
    })
    return species
}



async function getLevelUpLearnsetsConversionTable(textLevelUpLearnsetsPointers){
    const lines = textLevelUpLearnsetsPointers.split("\n")
    let conversionTable = {}

    await lines.forEach(line => {
        checkTimeout()
        const matchSpecies = line.match(/SPECIES_\w+/i)
        if(matchSpecies){
            const value = matchSpecies[0]


            const matchConversion = line.match(/s\w+LevelUpLearnset/i)
            if(matchConversion){
                const index = matchConversion[0]


                if(conversionTable[index] === undefined){
                    conversionTable[index] = [value]
                }
                else{
                    conversionTable[index].push(value)   
                }
            }
        }
    })
    return conversionTable
}

async function regexLevelUpLearnsets(textLevelUpLearnsets, conversionTable, species){
    const lines = textLevelUpLearnsets.split("\n")
    let speciesArray = []

    await lines.forEach(line => {
        checkTimeout()
        const matchConversion = line.match(/s\w+LevelUpLearnset/i)
        if(matchConversion){
            speciesArray = conversionTable[matchConversion[0]]
        }


        const matchLevelMove = line.match(/(\d+) *, *(MOVE_\w+)/i)
        if(matchLevelMove){
            const level = parseInt(matchLevelMove[1])
            const move = matchLevelMove[2]
            for(let i = 0; i < speciesArray.length; i++)
                species[speciesArray[i]]["levelUpLearnsets"].push([move, level])
        }
    })

    for(const name of Object.keys(conversionTable)){
        if(conversionTable[name].length >= 2){
            for (let j = 0; j < conversionTable[name].length; j++){
                species[conversionTable[name][j]]["forms"] = conversionTable[name]
            }
        }
    }

    return species
}










async function regexTMHMLearnsets(textTMHMLearnsets, species, start, end){
    const lines = textTMHMLearnsets.split("\n")
    let startFound = false, TMHM = 0, count = 0

    await lines.forEach(line => {
        checkTimeout()
        if(line.includes(start))
            startFound = true
        else if(line.includes(end))
            startFound = false


        if(startFound){
            const matchMove = line.trim().match(/^MOVE_\w+/i)
            if(matchMove){
                let move = moves[matchMove[0]]["ingameName"]
                count++


                if(move === "Solar Beam")
                    move = "Solarbeam"
                else if(move === "Will-O-Wisp")
                    move = "Will-o-Wisp"
                else if(move === "U-turn")
                    move = "U-Turn"
                else if(move === "Drainingkiss")
                    move = "Draining Kiss"

                const rawTMHM = fetch(`https://raw.githubusercontent.com/ydarissep/Radical-Red-Pokedex/main/data/species/tm_compatibility/${count} - ${move}.txt`)
                .then(promises => {
                    const textTMHM = promises.text()
                    .then(promises => {
                        const lines = promises.split("\n")

                        lines.forEach(line => {
                            const matchTMHM = line.match(/TM\d+|HM\d+/i)
                            if(matchTMHM)
                                TMHM = matchTMHM[0]


                            const matchSpecies = `SPECIES_${line.trim().toUpperCase()}`
                            if(species[matchSpecies])
                                species[matchSpecies]["TMHMLearnsets"].push(matchMove[0])
                        })
                    })
                })
            }
        }
        
    })

    return species
}







async function regexTutorLearnsets(textTutorLearnsets, species, start, end){
    const lines = textTutorLearnsets.split("\n")
    let startFound = false, ID = 0, count = 0

    const filterUnusedTutor = ["Bug Bite", "Stomping Tantrum", "Fire Punch", "Ice Punch", "Thunder Punch", "Fire Fang", "Ice Fang", "Thunder Fang", "Psychic Fangs", "Play Rough", "Iron Head", "Liquidation", "Hydro Pump", "Drill Run", "Blaze Kick", "Pain Split", 
    "Zen Headbutt", "Weather Ball", "Air Slash", "Hex", "Mystical Fire", "Seed Bomb", "Leaf Blade", "Knock Off", "Power Gem", "Rock Blast", "Pin Missile", "Icicle Spear", "Tail Slap", "Body Slam", "Foul Play", "Iron Defense", "Nasty Plot", "Earth Power", 
    "Aura Sphere", "Heat Wave", "Hurricane", "Power Whip", "High Horsepower", "Bug Buzz", "Phantom Force", "Flare Blitz", "Stored Power", "Gunk Shot", "Tailwind", "Megahorn", "Draco Meteor", "Close Combat", "Dark Hole", "Frenzy Plant", "Hydro Cannon", "Blast Burn"]

    await lines.forEach(line => {
        checkTimeout()
        if(line.includes(start))
            startFound = true
        else if(line.includes(end))
            startFound = false


        if(startFound){
            const matchMove = line.trim().match(/^MOVE_\w+/i)
            if(matchMove){
                let move = moves[matchMove[0]]["ingameName"]
                count++

                if(filterUnusedTutor.includes(move)){
                    const rawTutor = fetch(`https://raw.githubusercontent.com/ydarissep/Radical-Red-Pokedex/main/data/species/tutor_compatibility/${count} - ${move}.txt`)
                    .then(promises => {
                        const textTutor = promises.text()
                        .then(promises => {
                            const lines = promises.split("\n")

                            lines.forEach(line => {
                                if(line.includes(":")){
                                    const matchID= line.match(/\d+/)
                                    if(matchID)
                                        ID = matchID[0]
                                }


                                const matchSpecies = `SPECIES_${line.trim().toUpperCase()}`
                                if(species[matchSpecies])
                                    species[matchSpecies]["tutorLearnsets"].push(matchMove[0])
                            })
                        })
                    })
                } 
            }
        }
        
    })

    return species
    //return altFormsLearnsets(species, "forms", "tutorLearnsets")
}










async function regexEvolution(textEvolution, species){
    const lines = textEvolution.split("\n")
    let name

    await lines.forEach(line =>{
        checkTimeout()
        const matchSpecies = line.match(/\[ *(SPECIES_\w+) *\]/i)
        if(matchSpecies){
            name = matchSpecies[1]
        }

        const matchEvoInfo = line.match(/(\w+), *(\w+), *(\w+)/)
        if(matchEvoInfo){
            let method = matchEvoInfo[1]
            const condition = matchEvoInfo[2]
            const targetSpecies = matchEvoInfo[3]
            const matchHisuian = line.match(/EVO_HISUIAN/)
            if(matchHisuian){
                method += "_HISUIAN_POTENTIAL"
            }
            species[name]["evolution"].push([method, condition, targetSpecies])
        }
    })

    return await getEvolutionLine(species)
}

async function getEvolutionLine(species){
    for (const name of Object.keys(species)){
        let evolutionLine = [name]

        for(let i = 0; i < evolutionLine.length; i++){
            const targetSpecies = evolutionLine[i]
            for(let j = 0; j < species[evolutionLine[i]]["evolution"].length; j++){
                const targetSpeciesEvo = species[targetSpecies]["evolution"][j][2]
                if(!evolutionLine.includes(targetSpeciesEvo)){
                    evolutionLine.push(targetSpeciesEvo)
                }
            }
        }

        for(let i = 0; i < evolutionLine.length; i++){
            const targetSpecies = evolutionLine[i]
            if(evolutionLine.length > species[targetSpecies]["evolutionLine"].length){
                species[targetSpecies]["evolutionLine"] = evolutionLine
            }
        }
    }

    for (const name of Object.keys(species)){
        species[name]["evolutionLine"] = Array.from(new Set(species[name]["evolutionLine"])) // remove duplicates
    }

    return species
}










async function regexForms(textForms, species){
    const lines = textForms.split("\n")
    let speciesArray = []

    await lines.forEach(line => {
        checkTimeout()
        const matchSpecies = line.match(/SPECIES_\w+/i)
        if(/FORM_SPECIES_END/i.test(line)){
            for(let i = 0; i < speciesArray.length; i++)
                species[speciesArray[i]]["forms"] = speciesArray
            speciesArray = []
        }
        else if(matchSpecies){
            speciesArray.push(matchSpecies[0])
        }
    })

    return species
}








async function regexEggMovesLearnsets(textEggMoves, species){
    const lines = textEggMoves.split("\n")
    const speciesString = JSON.stringify(Object.keys(species))
    let name = null

    await lines.forEach(line => {
        checkTimeout()
        if(/egg_moves/i.test(line)){
            name = null
        }
        const matchMove = line.match(/MOVE_\w+/i)
        if(matchMove){
            const move = matchMove[0]
            if(name){
                species[name]["eggMovesLearnsets"].push(move)
            }
        }
        else{
            const matchLine = line.match(/(\w+),/i)
            if(matchLine){
                const testSpecies = `SPECIES_${speciesString.match(matchLine[1])}`
                if(speciesString.includes(testSpecies))
                    name = testSpecies
            }
        }
    })

    return await altFormsLearnsets(species, "evolutionLine", "eggMovesLearnsets")
}



async function regexReplaceAbilities(textReplaceAbilities, species){
    const lines = textReplaceAbilities.split("\n")
    let speciesName = "", ability = "", replaceAbility = ""

    await lines.forEach(line => {
        checkTimeout()
        if(line.includes("{")){
            speciesName = ""
            ability = ""
            replaceAbility = ""
        }
        const matchSpecies = line.match(/SPECIES_\w+/i)
        if(matchSpecies){
            speciesName = matchSpecies[0]
        }
        const matchAbility = line.match(/ABILITY_\w+/i)
        if(matchAbility){
            ability = matchAbility[0]
        }
        const matchReplaceAbility = line.match(/NAME_\w+/i)
        if(matchReplaceAbility){
            replaceAbility = matchReplaceAbility[0].replaceAll("_", "").replace("NAME", "ABILITY_")
        }

        if(speciesName !== "" && ability !== "" && replaceAbility !== ""){
            for (let i = 0; i < species[speciesName]["abilities"].length; i++){
                if(species[speciesName]["abilities"][i] === ability){
                    species[speciesName]["abilities"][i] = replaceAbility
                }
            }
        }
    })

    return species
}



async function regexSprite(textSprite, species){
    const lines = textSprite.split("\n")

    await lines.forEach(line => {
        checkTimeout()
        const matchSpecies = line.match(/SPECIES_\w+/i)
        if(matchSpecies){
            let name = matchSpecies[0]
            if(name === "SPECIES_ENAMORUS_T")
                name = "SPECIES_ENAMORUS_THERIAN"

            const matchURL = line.match(/gFrontSprite\w+Tiles/i)
            if(matchURL){
                let url = `https://raw.githubusercontent.com/ydarissep/Radical-Red-Pokedex/main/data/species/frontspr/${matchURL[0].replace("Tiles", ".png")}`

                species[name]["sprite"] = url
            }
        }
    })

    return species
}













async function altFormsLearnsets(species, input, output){
    for(const name of Object.keys(species)){

        if(species[name][input].length >= 2){

            for (let j = 0; j < species[name][input].length; j++){
                const targetSpecies = species[name][input][j]

                if(species[targetSpecies][output].length <= 0){
                    species[targetSpecies][output] = species[name][output]
                }
            }
        }
    }
    return species
}


async function getBST(species){
    for(const name of Object.keys(species)){
        const baseHP = species[name]["baseHP"]
        const baseAttack = species[name]["baseAttack"]
        const baseDefense = species[name]["baseDefense"]
        const baseSpAttack = species[name]["baseSpAttack"]
        const baseSpDefense = species[name]["baseSpDefense"]
        const baseSpeed = species[name]["baseSpeed"]
        const BST = baseHP + baseAttack + baseDefense + baseSpAttack + baseSpDefense + baseSpeed

        species[name]["BST"] = BST

    }
    return species
}