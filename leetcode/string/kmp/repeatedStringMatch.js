/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

/*

abcd$cdabcdab - Z algo
- make prefix tree for a


01001234
- special prefix for b
aabbaabb$bbaabb|aabbaabb|aa
010012340001234567891234|56
aad
adaada|adaada

*/
// const cache = {};
var repeatedStringMatch = function(a, b) {
    let count = 1;
    let s = a;
    while(s.length < b.length) {
        s += a;
        count++;
    }
    if(search(s, b)) {
     return count;
    }
    return search(s + a, b) ? count + 1: -1;
};

function search(a, b) {
    const prefix = buildPrefix(b);
    let i = 0, j = 0;
    while(i < a.length && j < b.length) {
        if(a[i] === b[j]) {
            i++;
            j++;
        } else {
            if(j === 0) {
                i++;
            } else {
                j = prefix[j - 1];
            }
        }
    }
    return j === b.length;
}

function buildPrefix(s) {
    const len = s.length;
    const result = new Array(len).fill(0);
    let i = 0, j = 1;
    while(j < len) {
        if(s[i] === s[j]) {
            result[j] = i + 1;
            i++;
            j++;
        } else {
            if(i === 0) {
                j++;
            } else {
                i = result[i - 1];
            }
        }
    }
    return result;
}

