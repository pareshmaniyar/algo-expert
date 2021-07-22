/**
 * @param {number[][]} matrix
 * @return {number}
 - Examples:
 [
 [0, 1, 1, 1],
 [1, 1, 1, 1],
 [0, 1, 1, 1]
 ]
 [
 [0, 1, 1, 1],
 [1, 1, 2, 2],
 [0, 1, 2, 3]
 ]
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
[
  [1,0,1],
  [1,1,0],
  [1,2,0]
]
 - Approach 1:
[
[0,1,1,1],
[1,1,2,2],
[0,1,2,3]
]

 */

var countSquares = function(matrix) {
    let count = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(!matrix[i][j]) continue;
            if(!(i === 0 || j === 0)) {
                matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
            }
            count += matrix[i][j];
        }
    }
    return count;
};




