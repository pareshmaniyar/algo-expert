/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/*

s = "aabc"
p = "a*b."

   "" a * b .
"" T  F T F F
a  F  T T F F
a  F  F T F F
b  F  F F T F
c  F  F F F T


if(letter is same || .) {
    dp[i][j] = dp[i - 1][j - 1]
}
if(*) {
    dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && chars are same)
}

*/

var isMatch = function(s, p) {
    const slen = s.length, plen = p.length;
    const mat = new Array(slen + 1);
    for(let i = 0; i <= slen; i++) {
        mat[i] = new Array(plen + 1).fill(false);
    }
    mat[0][0] = true;
    for(let i = 2; i <= plen; i++) {
        if(p[i - 1] === '*') mat[0][i] = mat[0][i - 2];
    }
    for(let i = 1; i <= slen; i++) {
        for(let j = 1; j <= plen; j++) {
            if(p[j - 1] === "*") {
                mat[i][j] = mat[i][j - 2]
                    || (mat[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === "."));
                continue;
            }
            if(p[j - 1] === "." || p[j - 1] === s[i - 1]) {
                mat[i][j] = mat[i - 1][j - 1];
            }
        }
    }
    return mat[slen][plen];
};



