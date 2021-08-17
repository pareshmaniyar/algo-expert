/*
5 3 _ [1, 2, 3]
6 _ _
_ 9 8

# get valid values
- 9 + 9 + 9

# traverse, recurse, backtrack
- solve (i, j)
    - if(filled, move to next value) return solve(valid values)
    - validValues = getValidValues
    - loop valid
        - put value
        - solve()
        - remove value
    - return false

m - spaces
Time - not sure but 9 ^ m

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 var solveSudoku = function(board) {
    return fillBoard(0, 0, board);
};

function fillBoard(i, j, board) {
    const len = board.length;
    if(i === len) return true;
    if(board[i][j] !== ".") {
        if(j === len - 1) {
            i++;
            j = 0;
        } else {
            j++;
        }
        return fillBoard(i, j, board);
    }
    const validValues = getValidValues(i, j, board);
    for(const value of validValues) {
        board[i][j] = value;
        if(fillBoard(i, j, board)) return true;
        board[i][j] = ".";
    }
    return false;
}

function getValidValues(i, j, board) {
    const result = {};
    for(let i = 0; i < board.length; i++) {
        result[i] = true;
    }
    for(let k = 0; k < board.length; k++) {
        delete result[board[k][j]];
        delete result[board[j][k]];
    }
    let offset = [Math.floor(i / 3) * 3, Math.floor(j / 3) * 3];
    for(let x = 0; x < 3; x++) {
        for(let y = 0; y < 3; y++) {
            const val = board[x + offset[0]][y + offset[0]];
            delete result[val];
        }
    }
    return Object.keys(result);
}
