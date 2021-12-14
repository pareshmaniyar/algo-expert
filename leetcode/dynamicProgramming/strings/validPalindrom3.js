/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 abcdeca
 acedcba
 acdca
 
 bacabaaa
 aaabacab
 aabaa - 5
 
 */
 var isValidPalindrome = function(s, k) {
    return (s.length - LCS(s, s.split('').reverse().join(''))) <= k;
};

function LCS(a, b) {
    const len1 = a.length;
    const len2 = b.length;
    let prev = Array(len2 + 1).fill(0);
    let current = Array(len2 + 1).fill(0);
    for(let i = 0; i < len1; i++) {
        for(let j = 1; j < len2 + 1; j++) {
            if(a[i] === b[j - 1]) {
                current[j] = prev[j - 1] + 1;
            } else {
                current[j] = Math.max(prev[j], current[j - 1]);
            }
        }
        prev = current;
        current = Array(len2 + 1).fill(0);
    }
    return prev[len2];
}