/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
Took quite some time!

*/
 var isOneEditDistance = function(s, t) {
    const sLen = s.length, tLen = t.length;
    if(sLen === tLen) return isReplaceble(s, t);
    return sLen > tLen ? isInsertable(s, t) : isInsertable(t, s);
};

function isReplaceble(s, t) {
    let index = -1;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== t[i]) {
            if(index != -1) return false;
            index = i;
        }
    }
    if(index === -1) return false;
    return (
        (s.substring(0, index) === t.substring(0, index))
        && (s.substring(index + 1) === t.substring(index + 1))
    );
}
// xxxbax xxxbx
function isInsertable(s, t) {
    let cache = {};
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char in cache) {
            cache[char]++;
        } else {
            cache[char] = 1;
        }
    }
    for(let i = 0; i < t.length; i++) {
        const char = t[i];
        if(char in cache) {
            cache[char]--;
            if(cache[char] === 0) {
                delete cache[char];
            }
        } else {
            return false;
        }
    }
    if(Object.keys(cache).length !== 1) return false;
    const key = Object.keys(cache)[0];
    if(cache[key] !== 1) return false;
    let lastIndex = 0;
    for(let i = 0; i < s.length; i++) {
        let index = s.indexOf(key, lastIndex);
        let newString = `${s.substring(0, index)}${s.substring(index + 1)}`;
        if(newString == t) return true;
        lastIndex = index + 1;
    }
    return false;
}

/*
- WONT WORK HEAP OUT OF MEMORY
*/
var isOneEditDistance = function(s, t) {
    // edge check
    const sLen = s.length, tLen = t.length;
    if(sLen - tLen === 0 && sLen - tLen === 1 && tLen - sLen === 0 && tLen - sLen === 1) return false;
    let matrix = new Array(sLen + 1).fill(0);
    for(let i = 0; i < sLen + 1; i++) {
        matrix[i] = new Array(tLen + 1).fill(0);
        matrix[i][0] = i;
    }
    for(let i = 0; i < tLen + 1; i++) {
        matrix[0][i] = i;
    }
    //console.log(matrix);
    for(let i = 1; i < sLen + 1; i++) {
        for(let j = 1; j < tLen + 1; j++) {
            let leftChar = s[i - 1];
            let rightChar = t[j - 1];
            matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
            if(leftChar === rightChar) {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i][j]);
            }
        }
    }
    // console.log(matrix);
    return matrix[sLen][tLen] === 1;
};
