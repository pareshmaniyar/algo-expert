/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/*

levenshtein distance
  "" r o s
"" 0 1 2 3
h  1 1 2 3
o  2 2 1 2
r  3 2 2 2
s  4 3 3 2
e  5 4 4 3

*/

var minDistance = function(word1, word2) {
    const len1 = word1.length, len2 = word2.length;
    if(len1 === 0 || len2 === 0) return len1 || len2;
    const mat = new Array(len1 + 1);
    for(let i = 0; i < len1 + 1; i++) {
        mat[i] = new Array(len2 + 1).fill(+Infinity);
    }
    mat[0][0] = 0;
    for(let j = 1; j < len2 + 1; j++) {
        mat[0][j] = mat[0][j - 1] + 1;
    }
    for(let i = 1; i < len1 + 1; i++) {
        mat[i][0] = mat[i - 1][0] + 1;
    }
    for(let i = 1; i < len1 + 1; i++) {
        for(let j = 1; j < len2 + 1; j++) {
            if(word1[i - 1] === word2[j - 1]) {
                mat[i][j] = Math.min(mat[i][j], mat[i - 1][j - 1]);
            }
            mat[i][j] = Math.min(
                mat[i][j],
                mat[i - 1][j - 1] + 1,
                mat[i][j - 1] + 1,
                mat[i - 1][j] + 1
            );
        }
    }
    return mat[len1][len2];
};