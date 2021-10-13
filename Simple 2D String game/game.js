let map = 
`
##########
#......p.#
#........#
#........#
#........#
#........#
#........#
#........#
#........#
##########
`

function renderMap(map) {
    gameMapContainer.innerHTML = map;
}

function moveRight(map) {
    let idx = map.indexOf('p');
    let newMap = map.substring(0, idx) + "." + "p" + map.substring(idx+2);
    return newMap;

}

// HW2: Create the moveLeft() function
function moveLeft(map) {
    let idx = map.indexOf('p');
    let newMap = map.substring(0, idx-1) + "p" + "." + map.substring(idx+1);
    return newMap;
}



/////////////////////////////////
renderMap(map);