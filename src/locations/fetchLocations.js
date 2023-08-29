async function getWildLocations(locations){
    footerP("Fetching locations")
    const rawWildLocations = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/locations/wild_encounter_tables.c`)
    const textWildLocations = await rawWildLocations.text()

    return regexWildLocations(textWildLocations, locations)   
}

async function getRaidLocations(locations){
    const rawRaidLocations = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/locations/raid_encounters.h`)
    const textRaidLocations = await rawRaidLocations.text()

    return regexRaidLocations(textRaidLocations, locations)   
}

async function getManualLocations(locations){
    const rawManualLocations = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/locations/manualLocations.js`)
    const jsonManualLocations = await rawManualLocations.json()

    return regexManualLocations(jsonManualLocations, locations)   
}

async function buildLocationsObj(){
    let locations = {}
    try{
        locations = await getWildLocations(locations)
        locations = await getRaidLocations(locations)
        locations = await getManualLocations(locations)
    }
    catch(e){
        console.log(e.message)
        console.log(e.stack)
        footerP("Fetching backup locations")
        locations = backupData[3]
    }

    await localStorage.setItem("locations", LZString.compressToUTF16(JSON.stringify(locations)))
    return locations
}


async function fetchLocationsObj(){
    if(!localStorage.getItem("locations")){
        window.locations = await buildLocationsObj()
    }
    else{
        window.locations = await JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("locations")))   
    }

    let counter = 0
    window.locationsTracker = []
    Object.keys(locations).forEach(zone => {
        Object.keys(locations[zone]).forEach(method => {
            Object.keys(locations[zone][method]).forEach(speciesName => {
                locationsTracker[counter] = {}
                locationsTracker[counter]["key"] = `${zone}\\${method}\\${speciesName}`
                locationsTracker[counter]["filter"] = []
                counter++
            })
        })
    })
}