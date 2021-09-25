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


/*

[1,2,3,4,5,6]
Brute force
recursion|backtracking
[1,2,3,4,5,6]
.. .. .. .. .. ..

.. .. .. - largest
.. .. .. .. .. .. - Can't pick adjacent maybe
1,2,3,4,5,6
- select n from 3n
1 - yes, no
2 - no, yes
3 - yes, no
4 - yes, no
5 - yes, no
6 - yes, no
2 ^ n
1 - yes => 2 - no =>
1 - no => 2 - yes, no

TLE below soln, no cache
*/

/**
 * @param {number[]} slices
 * @return {number}
 */
 var maxSizeSlices = function(slices) {
    let count = { max: 0 };
    let left = slices.slice(0, slices.length - 1);
    let right = slices.slice(1, slices.length);
    findMaxSum(0, [...left, 0], (slices.length / 3), 0, count, {}, false, []);
    findMaxSum(0, [0, ...right], (slices.length / 3), 0, count, {}, false, []);
    return count.max;
};

function findMaxSum(curr, slices, toBeAdded, currentCount, count, cache, prevTaken) {
    if(toBeAdded === 0) {
        count.max = Math.max(count.max, currentCount);
        // console.log(arr);
        return;
    }
    if(curr === slices.length) return;
    // yes
    if(!prevTaken) {
        findMaxSum(curr + 1, slices, toBeAdded - 1, currentCount + slices[curr], count, cache, true);
    }
    // no
    findMaxSum(curr + 1, slices, toBeAdded, currentCount, count, cache, false);
}



