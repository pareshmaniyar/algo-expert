/*

curr = [2,1,3]
 ans = [1,1,1]

*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */

 var minFallingPathSum = function(matrix) {
    const ans = new Array(matrix.length).fill(0);
    let prev;
    let min = +Infinity;
    if(matrix.length === 1) {
        for(let i = 0; i < matrix[0].length; i++) {
            min = Math.min(min, matrix[0][i]);
        }
        return min;
    }
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] += Math.min(
                matrix[i - 1][Math.max(0, j - 1)],
                matrix[i - 1][j],
                matrix[i - 1][Math.min(matrix[0].length - 1, j + 1)]
            );
            if(i === matrix.length - 1) {
                min = Math.min(matrix[i][j], min);
            }
        }
    }
    return min;
};
