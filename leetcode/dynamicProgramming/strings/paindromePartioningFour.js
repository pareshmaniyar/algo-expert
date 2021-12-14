/**
 * @param {string} s
 * @return {boolean}
 abcbdd - T
 aaaaa - T
 aa - F
 abcd - F
 - Approach 1:
    - a|abcbdd
    - SO( ^ 2)
    - O(n ^ 2)
    - isPalindrome build using DP
        - matrix with 1 length as true
        - if length is 2, check first and second char
        - compare first and last and precompute value in matrix
    - O(n ^ 2)
    - loop for first partition
        - loop for second partition
            - check both palindrome - O(1) return true
    - return false
    a aa
      0 1 2
    0 t t 
    1   t t
    2     t

*/

var checkPartitioning = function(s) {
    const palindromMatrix = getPalindromeMatrix(s);
    const sLen = s.length;
    for(let i = 1; i < sLen; i++) { // O(n)
        if(!palindromMatrix[0][i - 1]) continue;
        for(let j = i + 1; j < sLen; j++) { // O(n)
            if(palindromMatrix[i][j - 1] && palindromMatrix[j][sLen - 1]) return true;
        }
    }
    return false;
};

function getPalindromeMatrix(s) {
    const sLen = s.length;
    const matrix = new Array(sLen).fill(1);
    for(let i = 0; i < sLen; i++) {
        const row = new Array(sLen).fill(false);
        matrix[i] = row;
        matrix[i][i] = true;
    }
    for(let length = 2; length < sLen + 1; length++) {
        for(let start = 0; start < sLen - length + 1; start++) {
            if(length === 2) {
                matrix[start][start + length - 1] = s[start] === s[start + 1];
            } else {
                matrix[start][start + length - 1] = s[start] === s[start + length - 1]
                    && matrix[start + 1][start + length - 2];
            }
        }
    }
    return matrix;
}

function isPalindrome(string, start, end) {
    while(start <= end && start >= 0 && end < string.length) {
        if(string[start] != string[end]) return false;
        start++;end--;
    }
    return true;
}

