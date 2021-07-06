/**
 * @param {number[][]} grid
 * @return {number}

- Thoughts
    - two robots intersection
        - store indices
- Approach 1:
    - find possibilities for both of them [] []
        - get current count, add the next count, update maxCount if necessary
        

 */

        var cherryPickup = function(grid) {
            let rowLen = grid.length;
            let colLen = grid[0].length;
            let robot1 = [0, 0], robot2 = [0, colLen - 1];
            const maxCount = { count: 0 };
            let currentCount = 0;
            currentCount = grid[0][0] + grid[0][colLen - 1];
            let cache = {};
            robotTraversal(robot1, robot2, rowLen, colLen, currentCount, maxCount, grid, cache);
            return maxCount.count;
        };
        
        function robotTraversal(robot1, robot2, rowLen, colLen, currentCount, maxCount, grid, cache) {
            let robot1Next = getValidValues(robot1, rowLen, colLen);
            let robot2Next = getValidValues(robot2, rowLen, colLen);
            let nextValues = [];
            let counts = [];
            for(let i = 0; i < robot1Next.length; i++) {
                for(let j = 0; j < robot2Next.length; j++) {
                    const [x1, y1] = robot1Next[i];
                    const [x2, y2] = robot2Next[j];
                    nextValues.push([ [x1, y1], [x2, y2] ]);
                    if(y1 === y2) {
                        counts.push(grid[x1][y1] + currentCount);
                    } else {
                        counts.push(grid[x1][y1] + grid[x2][y2] + currentCount);
                    }
                }
            }
            for(let i = 0; i < nextValues.length; i++) {
                maxCount.count = Math.max(maxCount.count, counts[i]);
                if(cache[`r1-${robot1[0]}-${robot1[1]}--r2-${robot2[0]}-${robot2[1]}`]) continue;
                robotTraversal(nextValues[i][0], nextValues[i][1], rowLen, colLen, counts[i], maxCount, grid, cache);
            }
            cache[`r1-${robot1[0]}-${robot1[1]}--r2-${robot2[0]}-${robot2[1]}`] = true;
        }
        /*
        1003
        0003
        0033
        9033
        9 + 1 + 3 * 4 = 22
        */
        function getValidValues(index, rowLen, colLen) {
            let result = [];
            let [i, j] = index;
            let options = [[i + 1, j - 1], [i + 1, j], [i + 1, j + 1]];
            for(const [idx, idy] of options) {
                if(idx >= 0 && idx < rowLen && idy >= 0 && idy < colLen) {
                    result.push([idx, idy]);
                }
            }
            return result;
        }