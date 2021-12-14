/**
 * @param {string} s
 * @return {number}
 aacaba
 a acaba
 ac aba
 left, right
 a: 1   a: 3, c: 1, b: 1
 a: 1, c: 1 | a: 3, b: 1
 a: 2, c: 1
 
 */
 var numSplits = function(s) {
    let left = {}, right = {}, sum = 0;
    for(let i = 0; i < s.length; i++) {
        manupulateData(right, s[i], 1);
    }
    for(let i = 0; i < s.length; i++) {
        manupulateData(left, s[i], 1);
        manupulateData(right, s[i], -1);
        if(Object.keys(left).length === Object.keys(right).length) sum++;
    }
    return sum;
};

function manupulateData(map, key, value) {
    if(!map[key]) {
        map[key] = 0;
    }
    if(value === 1) {
        map[key]++;    
    } else {
        map[key]--;
    }
    if(map[key] <= 0) {
        delete map[key];
    }
}