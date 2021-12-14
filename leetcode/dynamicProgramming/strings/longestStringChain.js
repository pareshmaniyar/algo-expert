/**
 * @param {string[]} words
 * @return {number}
 sort - length
 ["xbc","pcxbcf","xb","cxbc","pcxbc"]
 ["xb","xbc","cxbc","pcxbc", "pcxbcf]
    1     2      3       4         5
cxbc, pcxbc
- length diff is 1, LCS length smaller string
n ^ 2 * m
   "" a b  c
""  . . .  .
a   . a a  a
b   . a ab ab
a   . a ab ab
c   . a ab abc
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length)
    const len = words.length;
    const result = Array(len).fill(1);
    let maxLength = 1;
    for(let i = 1; i < len; i++) {
        for(let j = i - 1; j >= 0; j--) {
            let prospect = words[j];
            let parent = words[i];
            if(parent.length - prospect.length > 1) break;
            if(isPredecessor(prospect, parent)) {
                result[i] = Math.max(result[i], result[j] + 1);
                maxLength = Math.max(maxLength, result[i]);
            }
        }
    }
    return maxLength;
};

function isPredecessor(prospect, parent) {
    if(parent.length - prospect.length != 1) return false;
    const matrix = Array(parent.length + 1);
    for(let i = 0; i < 1 + parent.length; i++) {
        matrix[i] = Array(prospect.length + 1).fill(0);
    }
    for(let i = 1; i < 1 + parent.length; i++) {
        for(let j = 1; j < 1 + prospect.length; j++) {
            if(parent[i - 1] === prospect[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(
                    matrix[i - 1][j],
                    matrix[i][j - 1]
                );
            }
        }
    }
    return matrix[parent.length][prospect.length] === prospect.length;
}



