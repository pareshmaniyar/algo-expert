/**
 * @param {number[][]} grid
 * @return {number}
 - Approach 1:
    - from top left to bottom right
        - BFS
        - cache -> -1
    DFS would be better
 */

        var maxAreaOfIsland = function(grid) {
            let maxCount = 0;
            for(let i = 0; i < grid.length; i++) {
                for(let j = 0; j < grid[0].length; j++) {
                    if(grid[i][j] != 1) continue;
                    maxCount = Math.max(findOtherIsLands(i, j, grid), maxCount);
                }
            }
            return maxCount;
        };
        
        function findOtherIsLands(i, j, grid) {
            let queue = [[i, j]];
            let count = 0;
            grid[i][j] = -1;
            while(queue.length != 0) {
                let [x, y] = queue.pop();
                let values = getValidNeighbours(x, y, grid);
                for(let i = 0; i < values.length; i++) {
                    if(grid[values[i][0]][values[i][1]] === 1) {
                        queue.push(values[i]);
                        grid[values[i][0]][values[i][1]] = -1;
                    }
                }
                count++;
            }
            return count
        }
        
        function getValidNeighbours(x, y, grid) {
            let result = [];
            let values = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
            for(let i = 0; i < values.length; i++) {
                if(values[i][0] < grid.length
                   && values[i][0] >= 0 
                   && values[i][1] >= 0 
                   && values[i][1] < grid[0].length) {
                    result.push(values[i]);
                }
            }
            return result;
        }
        
        
        