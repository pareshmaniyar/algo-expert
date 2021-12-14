/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length, cache = {};
    function traverse(i, j) {
        if(i < 0 || j < 0 || i >= m || j >= n) return +Infinity;
        if(i === m - 1 && j === n - 1) return grid[i][j];
        if(`${i}-${j}` in cache) return cache[`${i}-${j}`];
        return cache[`${i}-${j}`] = grid[i][j] + Math.min(traverse(i + 1, j), traverse(i, j + 1));
    }
    return traverse(0, 0);
};
