/**
 * @param {string} instructions
 * @return {boolean}
 */
/*

GLGLGG
four times
check if any time we get the up at 0,0

*/

var isRobotBounded = function(instructions) {
    let index = [0, 0], dir = "north";
    const moves = instructions.split('');
    for(let i = 0; i < 4; i++) {
        for(const move of moves) {
            dir = getNextMove(index, dir, move);
        }
        if(index[0] === 0 && index[1] === 0 && dir === "north") return true;
    }
    return false;
};

function incDir(index, dir) {
    if(dir === "north") {
        index[1]++;
    } else if(dir === "west") {
        index[0]--;
    } else if(dir === "south") {
        index[1]--;
    } else if(dir === "east") {
        index[0]++;
    }
}

function changeDir(dir, left) {
    switch(dir) {
        case "north": return left ? "west" : "east";
        case "south": return left ? "east" : "west";
        case "east": return left ? "north" : "south";
        case "west": return left ? "south" : "north";
    }
}

function getNextMove(index, dir, move) {
    switch(move) {
        case "G": incDir(index, dir); return dir;
        case "L": return changeDir(dir, true);
        case "R": return changeDir(dir, false);
    }
}
