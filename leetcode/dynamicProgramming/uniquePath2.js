/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

 var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    function travelRobot(i, j, m, n, cache) {
        if(i > m - 1 || j > n - 1) return 0;
        if(obstacleGrid[i][j] === 1) return 0;
        if(i === m - 1 && j === n - 1) return 1;
        if(cache[`${i}-${j}`]) return cache[`${i}-${j}`];
        let count = 0;
        count += travelRobot(i + 1, j, m, n, cache);
        count += travelRobot(i, j + 1, m, n, cache);
        cache[`${i}-${j}`] = count;
        return count;
    }
   return travelRobot(0, 0, m, n, {});
};

