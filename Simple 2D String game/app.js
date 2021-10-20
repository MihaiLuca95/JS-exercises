let map = 
`
■■■■■■■■■■
■▪□▪▪▪▪▪▪■
■▪▪▪▪▪▪▪▪■
■▪▪▪▪▪▪▪▪■
■▪▪▪▪▪▪▪●■
■▪▪▪▪▪▪▪▪■
■▪▪▪▪▪▪▪▪■
■▪▪▪▪▪▪▪▪■
■▪▪▪▪▪▪▪▪■
■■■■■■■■■■
`
const renderMap = (map) => gameMapContainer.innerHTML = map;

const moveTemp =(map, cb) => {
    let idx = map.indexOf("●");
    let newMap = cb(idx);
    return newMap;
}

const moveTempEnemy =(map, cb) => {
    let idx = map.indexOf("□");
    let newMap = cb(idx);
    return newMap;
}

const action = (e) => {
    switch(e.code) {
        case "ArrowUp" : 
            map = moveTemp(map, (idx) => map.charAt(idx-11) === "■" ? map.substring(0, idx) + "▪" + map.substring(idx+1, idx+77) + "●" + map.substring(idx+78) : map.substring(0, idx-11) + "●" + map.substring(idx-10, idx) + "▪" + map.substring(idx+1));
            renderMap(map);
            break;
        case "ArrowDown" : 
            map = moveTemp(map, (idx) => map.charAt(idx+11) === "■" ? map.substring(0, idx-77) + "●" + map.substring(idx-76, idx) + "▪" + map.substring(idx+1) : map.substring(0, idx) + "▪" + map.substring(idx+1, idx+11) + "●" + map.substring(idx+12));
            renderMap(map);
            break;
        case "ArrowRight" : 
            map = moveTemp(map, (idx) => map.charAt(idx+1) === "■" ? map.substring(0, idx-7) + "●" + map.substring(idx-6, idx) + "▪" + map.substring(idx+1) : map.substring(0, idx) + "▪" + "●" + map.substring(idx+2));
            renderMap(map);
            break;
        case "ArrowLeft" : 
            map = moveTemp(map, (idx) => map.charAt(idx-1) === "■" ? map.substring(0, idx) + "▪" + map.substring(idx+1, idx+7) + "●" + map.substring(idx+8) : map.substring(0, idx-1) + "●" + "▪" + map.substring(idx+1));
            renderMap(map);
            break;
        default:  
    }
}

const actionEnemy = (dir) => {
    if (dir == "Up") {
        map = moveTempEnemy(map, (idx) => map.charAt(idx-11) === "■" ? map.substring(0, idx) + "▪" + map.substring(idx+1, idx+77) + "□" + map.substring(idx+78) : map.substring(0, idx-11) + "□" + map.substring(idx-10, idx) + "▪" + map.substring(idx+1));
        renderMap(map);
    } else if (dir == "Right") {
        map = moveTempEnemy(map, (idx) => map.charAt(idx+1) === "■" ? map.substring(0, idx-7) + "□" + map.substring(idx-6, idx) + "▪" + map.substring(idx+1) : map.substring(0, idx) + "▪" + "□" + map.substring(idx+2));
        renderMap(map);
    } else if (dir == "Left") {
        map = moveTempEnemy(map, (idx) => map.charAt(idx-1) === "■" ?  map.substring(0, idx) + "▪" + map.substring(idx+1, idx+7) + "□" + map.substring(idx+8) : map.substring(0, idx-1) + "□" + "▪" + map.substring(idx+1));
        renderMap(map);
    } else if (dir == "Down") {
        map = moveTempEnemy(map, (idx) => map.charAt(idx+11) === "■" ? map.substring(0, idx-77) + "□" + map.substring(idx-76, idx) + "▪" + map.substring(idx+1) : map.substring(0, idx) + "▪" + map.substring(idx+1, idx+11) + "□" + map.substring(idx+12));
        renderMap(map);
    } 
}

setInterval( () => { 
    let idxP = map.indexOf('●');
    let idxE = map.indexOf('□');

    let idxDiff = idxE - idxP;
    let rows = Math.round(idxDiff / 11);
    let cols = idxDiff - rows * 11;

    if (rows > 0) {
        actionEnemy("Up")
    } else if (cols > 0) {
        actionEnemy("Left")
    } else if (rows < 0) {
        actionEnemy("Down")
    } else if (cols < 0) {
        actionEnemy("Right")
    }
    }, 1000) 

///////////////////////
renderMap(map);