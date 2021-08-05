/**
 * @param {number[][]} matrix
 * @return {number}
 */

/*

9 9 4
6 6 8
2 1 1

1 1 2
2 2 1
3 4 2


*/

var longestIncreasingPath = function(matrix) {
    const rowLen = matrix.length, colLen = matrix[0].length;
    const aux = JSON.parse(JSON.stringify(matrix));
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            aux[i][j] = -1;
        }
    }
    
    let res = 1;
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            res = Math.max(dfs(i, j), res);
        }
    }
    function dfs(i, j) {
        if(aux[i][j] != -1) return aux[i][j];
        const adjEl = getValidValues(i, j, rowLen, colLen);
        let res = 1;
        for(const [x, y] of adjEl) {
            res = Math.max(res, 1 + dfs(x, y));
        }
        return aux[i][j] = res;
    }
    function getValidValues(i, j, rowLen, colLen) {
        const x = [i - 1, i + 1, i, i];
        const y = [j, j, j - 1, j + 1];
        const values = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]];
        let res = [];
        for(const [x, y] of values) {
            if(x >= 0 && y >= 0 
               && x < rowLen && y < colLen
               && matrix[i][j] < matrix[x][y]) {
                res.push([x, y]);
            }
        }
        return res;
    }
    return res;
};



