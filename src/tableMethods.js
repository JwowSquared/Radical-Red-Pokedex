function cmp(func, factor=1) {
    return (a, b) => func(a) == func(b) ? 0 : func(a) < func(b) ? -1 * factor : 1 * factor;
}

function cmpAll(cmps) {
    return (a, b) => {
        let result = 0;
        for (const func of cmps)
            if ((result = func(a, b)))
                return result;
        return 0;
    }
}

function setupTables() {
    setupTable('speciesTable', displaySpeciesRow, 50,
        {
            '#': cmp(x => x.dexID),
            'Sprite': null,
            'Name': cmp(x => x.name),
            'Type': null,
            'Abilities': cmp(x => getAbilityName(x.abilities[1])),
            'HP': cmp(x => x.stats[0], -1),
            'Atk': cmp(x => x.stats[1], -1),
            'Def': cmp(x => x.stats[2], -1),
            'SpA': cmp(x => x.stats[4], -1),
            'SpD': cmp(x => x.stats[5], -1),
            'Spe': cmp(x => x.stats[3], -1),
            'BST': cmp(x => x.stats.reduce((total, y) => total += y, 0), -1),
            'Area': cmp(x => getAreaName(x.ID))  // Assuming a function to get the area name by species ID
        },
        [cmp(x => x.dexID), cmp(x => x.order)]
    );
    
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            loadChunk(trackers['speciesTable'], false);
        }
    };
}

function setupTable(name, displayMethod, maxRows, columns, tieBreaker) {
    let wrapper = document.getElementById(name);
    if (!wrapper) {
        console.log(`Table ${name} could not be created, wrapper missing.`);
        return;
    }
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.className = 'align-middle table table-striped table-dark table-hover';
    table.append(thead);
    table.append(tbody);
    wrapper.append(table);
    
    trackers[name] = {};
    let tracker = trackers[name];
    tracker.body = tbody;
    tracker.displayMethod = displayMethod;
    tracker.maxRows = maxRows;
    
    let sortControls = document.createElement('tr');
    sortControls.className = 'sortControls';
    thead.append(sortControls);
    
    for (const [label, compare] of Object.entries(columns)) {
        let sortOption = document.createElement('th');
        sortControls.append(sortOption);
        sortOption.innerText = label;
        sortOption.className = 'sortLocked';
        if (compare === null)
            continue;
        sortOption.className = 'sortOption';
        sortOption.onclick = function () {
            sortTracker(this, trackers[name], cmpAll([compare].concat(tieBreaker)));
        };
    }
    tracker.sortControls = sortControls.getElementsByClassName('sortOption');
}

function populateTable(name, data) {
    let tracker = trackers[name];
    if (!tracker) {
        console.log(`Tracker ${name} does not exist; cannot populate.`);
        return;
    }
    
    tracker.data = data;
    for (const control of tracker.sortControls)
        control.className = 'sortOption';
    scrollIntoView = false;
    tracker.sortControls[0].click();
    scrollIntoView = true;
}

function sortTracker(selectedOption, tracker, compare) {
    let prevClass = selectedOption.className;
    
    for (const option of tracker.sortControls)
        option.className = 'sortOption';
    
    selectedOption.className = 'sortOption active sortAscending';
    
    if (prevClass === 'sortOption') {
        tracker.data.sort(compare);
    }
    else {
        if (prevClass === 'sortOption active sortAscending') {
            selectedOption.className = 'sortOption active sortDescending';
        }
    
        tracker.data.reverse();
    }
    
    loadChunk(tracker, true);
}

function loadChunk(tracker, toClear) {
    let rowsAdded = 0;
    
    if (toClear) {
        if (scrollIntoView && tracker.body.getBoundingClientRect().top < 0)
            tracker.body.scrollIntoView({behavior: "smooth", block: "start"});
        tracker.body.innerText = "";
        tracker.index = 0;
    }
    
    let data = tracker.data;
    let i = tracker.index;
    for (j = data.length, k = tracker.maxRows; rowsAdded < k && i < j; i++) {
        tracker.displayMethod(tracker, data[i]);
        rowsAdded++;
    }
    tracker.index = i;
}
