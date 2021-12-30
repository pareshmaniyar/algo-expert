/**
 * @param {string} s
 * @return {boolean}
 */
/*

abcabcabcabc

*/
var repeatedSubstringPattern = function(s) {
    const len = s.length;
    const prefix = new Array(len).fill(0);
    let i = 0, j = 1;
    while(j < len) {
        if(s[i] === s[j]) {
            prefix[j] = i + 1;
            i++;
            j++;
        } else {
            if(i === 0) {
                j++;
            } else {
                i = prefix[i - 1];
            }
        }
    }
    // console.log(prefix);
    if(prefix[len - 1] === 0) return false;
    const repLength = len - prefix[len - 1];
    return (len % (repLength) === 0);
};