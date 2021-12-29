/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

 var isMatch = function(s, p) {
    const slen = s.length, plen = p.length;
    const mat = new Array(slen + 1);
    for(let i = 0; i <= slen; i++) {
        mat[i] = new Array(plen + 1).fill(false);
    }
    mat[0][0] = true;
    for(let i = 1; i <= plen; i++) {
        if(p[i - 1] === '*') mat[0][i] = mat[0][i - 1];
    }
    for(let i = 1; i <= slen; i++) {
        for(let j = 1; j <= plen; j++) {
            if(p[j - 1] === "*") {
                mat[i][j] = mat[i - 1][j] || mat[i][j - 1] || mat[i - 1][j - 1];
                continue;
            }
            if(p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
                mat[i][j] = mat[i - 1][j - 1];
            }
        }
    }
    return mat[slen][plen];
};
