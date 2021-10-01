/*
abcde afce
   a  f  c  e
  
a  a  a  a  a
b  a  a  a  a
c  a  a  ac ac
d  a  a  ac ac
e  a  a  ac ace

m * n

*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const matrix = [];
    for(let i = 0; i < text1.length + 1; i++) {
        matrix.push([]);
        for(let j = 0; j < text2.length + 1; j++) {
            matrix[i].push(0);
        }
    }
    let ans;
    for(let i = 1; i < text1.length + 1; i++) {
        for(let j = 1; j < text2.length + 1; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                ans = matrix[i - 1][j - 1] + 1;
            } else {
                ans = matrix[i - 1][j] > matrix[i][j - 1] ? matrix[i - 1][j] : matrix[i][j - 1];
            }
            matrix[i][j] = ans;
        }
    }
    return matrix[text1.length][text2.length];
};

