async function getMoves(moves){
    footerP("Fetching moves")
    const rawMoves = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/moves/battle_moves.c`)
    const textMoves = await rawMoves.text()

    return regexMoves(textMoves, moves)
}

async function getMovesDescription(moves){
    const rawMovesDescription = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/moves/attack_descriptions.string`)
    const textMovesDescription = await rawMovesDescription.text()

    return regexMovesDescription(textMovesDescription, moves)
}

async function getMovesIngameName(moves){
    const rawMovesIngameName = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/moves/attack_name_table%20long.string`)
    const textMovesIngameName = await rawMovesIngameName.text()

    return regexMovesIngameName(textMovesIngameName, moves)
}

async function getVanillaMovesDescription(moves){
    const rawVanillaMovesDescription = await fetch("https://raw.githubusercontent.com/ProfLeonDias/pokefirered/decapitalization/src/move_descriptions.c")
    const textVanillaMovesDescription = await rawVanillaMovesDescription.text()

    return regexVanillaMovesDescription(textVanillaMovesDescription, moves)
}

async function getMovesFlags(moves){
    const rawMovesFlags = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/moves/move_tables.s`)
    const textMovesFlags = await rawMovesFlags.text()

    return regexMovesFlags(textMovesFlags, moves)
}


async function buildMovesObj(){
    let moves = {}
    try{
        moves = await getMoves(moves)
        moves = await getVanillaMovesDescription(moves)
        moves = await getMovesDescription(moves)
        moves = await getMovesIngameName(moves)
        moves = await getMovesFlags(moves)
    }
    catch(e){
        console.log(e.message)
        console.log(e.stack)
        footerP("Fetching backup moves")
        moves = backupData[0]
    }

    await localStorage.setItem("moves", LZString.compressToUTF16(JSON.stringify(moves)))
    return moves
}


async function fetchMovesObj(){
    if(!localStorage.getItem("moves")){
        window.moves = await buildMovesObj()
    }
    else{
        window.moves = await JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("moves")))
    }

    window.movesTracker = []
    for(let i = 0, j = Object.keys(moves).length; i < j; i++){
        movesTracker[i] = {}
        movesTracker[i]["key"] = Object.keys(moves)[i]
        movesTracker[i]["filter"] = []
    }
}
