let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 3, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const renderMap = (map) => {
    let output = ``

    map.forEach(row => {
        row.forEach(col => {                       //HWa: How many times will it execute ?
            if(col == 0) {                         //Answer: forEach(row) = 10 ori se va executa 
                output += `▪`;                     //        forEach(col) = 10*10=100 ori se va executa (la fiecare ciclul(iteratie) a lui forEach(row) --> forEach(col) se executa de 10 ori .)
            } else if(col == 1) {
                output += `■`;
            } else if(col == 2) {
                output += `●`;
            } else if(col == 3) {
                output += `□`;
            } 
        });
        output += `\n`
    });

    gameMapContainer.innerHTML = output;
}

const findRobotAndMove = (map, robot, dirUpDown, dirRightLeft, idxUpAndDown, idxLeftAndRight, isWallUp, isWallDown) => {
    for(row = 0; row < map.length; row++) {        
        for(col = 0; col < map.length; col++) {  
            if(map[row][col] == robot) {
                if(map[row+dirUpDown][col+dirRightLeft] != 1) {
                    map[row][col] = 0
                    map[row+idxUpAndDown][col+idxLeftAndRight] = robot
                    return map
                } else {
                    map[row][col] = 0
                    map[row+isWallUp][col+isWallDown] = robot
                    return map
                }
            }                                                    
        }
    }
} 
   
const action = (e) => {
    switch(e.code) {
        case "ArrowUp" : 
            map = findRobotAndMove(map, 2, -1, 0, -1, 0, 7, 0);
            renderMap(map);
            break;
        case "ArrowDown" : 
            map = findRobotAndMove(map, 2, 1, 0, 1, 0, -7, 0);
            renderMap(map);
            break;
        case "ArrowRight" : 
            map = findRobotAndMove(map, 2, 0, 1, 0, 1, 0, -7);
            renderMap(map);
            break;
        case "ArrowLeft" : 
            map = findRobotAndMove(map, 2, 0, -1, 0, -1, 0, 7);
            renderMap(map);
            break;
        default:  
    }
}

const actionEnemy = (dir) =>{
    if (dir == "Up") {
        map = findRobotAndMove(map, 3, -1, 0, -1, 0, 7, 0);
        renderMap(map);
    } else if (dir == "Right") {
        map = findRobotAndMove(map, 3, 0, 1, 0, 1, 0, -7);
        renderMap(map);
    } else if (dir == "Left") {
        map = findRobotAndMove(map, 3, 0, -1, 0, -1, 0, 7);
        renderMap(map);
    } else if (dir == "Down") {
        map = findRobotAndMove(map, 3, 1, 0, 1, 0, -7, 0);
        renderMap(map);
    } 
}

setInterval( () => { 
    const findRobot = (map, robot) => {
        for(row = 0; row < map.length; row++) {        
            for(col = 0; col < map.length; col++) {                                        
                if(map[row][col] == robot) {
                    return [row, col];
                }     
            }
        }
    }

    if (findRobot(map, 2) && findRobot(map, 3)) {
        if (findRobot(map, 2)[0] > findRobot(map, 3)[0]) {
            actionEnemy("Down")
        } else if (findRobot(map, 2)[0] < findRobot(map, 3)[0]) {
            actionEnemy("Up")
        } else if (findRobot(map, 2)[1] < findRobot(map, 3)[1]) {
            actionEnemy("Left")
        } else if (findRobot(map, 2)[1] > findRobot(map, 3)[1]) {
            actionEnemy("Right")
        } 
    } 
}, 1000); 

///////////////////////
renderMap(map);