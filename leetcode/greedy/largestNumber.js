/*
[3,30,34,5,9]
9,5, 34 3 30

343 3431 3435
3435 343 3431
3433 343 3431
3433343
3433433
nlogn
343, 3433

*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const num = nums.sort((a, b) => {
        return (a + '' + b) > (b + '' + a) ? -1 : 1;
    }).join('');
    if(parseInt(num) === 0) return "0";
    return num;
};
