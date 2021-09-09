/*
[1,2,3,4,5,6]
Brute force
recursion|backtracking
[1,2,3,4,5,6]

TLE!!!!

*/

/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
    return recurse(slices, {})
};

function recurse(slices, cache) {
    const join = slices.join(), len = slices.length;
    if(len === 0) return 0;
    if(cache[join]) return cache[join];
    if(len === 3)
        return cache[join] = Math.max(slices[0], slices[1], slices[2]);
    let maxCount = 0, arr1, arr2;
    for(let i = 0; i < len; i++) {
        [arr1, arr2] = getValidArray(slices, i);
        maxCount = Math.max(maxCount, arr1[1] + recurse(arr2, cache));
    }
    // console.log(slices, maxCount);
    return cache[join] = maxCount;
}

function getValidArray(slices, start) {
    let arr1 = [], arr2 = [];
    const len = slices.length;
    for(let i = start; i < start + len; i++) {
        if(i < start + 3) {
            arr1.push(slices[i % len]);
        } else {
            arr2.push(slices[i % len]);
        }
    }
    return [arr1, arr2];
}


