/*

- matrix with l, values

*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    const dp = [];
    let maxLength = 0;
    // create pseudo matrix
    for(let i = 0; i < matrix.length; i++) {
        dp[i] = [];
        for(let j = 0; j < matrix[0].length; j++) {
            dp[i][j] = parseInt(matrix[i][j]);
            if(matrix[i][j] === '1') maxLength = 1;
        }
    }
    // build max arr
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[0].length; j++) {
            if(matrix[i][j] === '0') continue;
            dp[i][j] = 1 + Math.min(
                dp[i][j - 1],
                dp[i - 1][j],
                dp[i - 1][j - 1]
            );
            if(dp[i][j] > maxLength) {
                maxLength = dp[i][j];
            }
        }
    }
    return maxLength * maxLength;
};
