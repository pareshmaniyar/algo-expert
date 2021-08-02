/**
 * @param {number[]} nums
 * @return {number}
 */
/*
WON'T WORK!!!!
[5,6,7,1,2,3,4]
[5,6,1,7,2,3,4]
[5, ...n elements = a, b]
[5, 6, 7, 1, 2, 3]
2, 3 = a, (b + 1)
(b + 1) 
4 + 3 + 2 + 1 = 10
RRLLL,RLRLL,RLLRL,RLLLR,LRRLL,LRLRL,LRLLR,LLRRL,LLRLR,LLLRR
LLLRR,LLRLR,LLRRL,LRLLR
2 * 5 = 10
5, a = 2, b = 3
[6, 7] [2, 1, 3]
ans 1  a = 1, b = 1 ans = 2
[2, 1, -1, 3]
2, [1, -1] [3]
a = 2, b = 1 ans = 3
[2, 3, 1, -1]
[2, 1, 3, -1]

     2
    1 3
  -1
         5
        1  6
         2  7
          3
           4
         2
      1     3
    [2,1,3]
    [2,3,1]

*/

var numOfWays = function(nums) {
    return (recursion(nums, {}) - 1) % (10^9 + 7);
};

function recursion(nums, cache) {
    //base case
    if(nums.length === 0 || nums.length === 1) return 1;
    let pivot = nums[0];
    let left = [];
    let right = [];
    //segregation
    for(const num of nums) {
        if(num === nums[0]) continue;
        if(num < pivot) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    //permutations
    const num = factorial(left.length + right.length, cache);
    const denom = factorial(left.length, cache) * factorial(right.length, cache);
    return recursion(left, cache) * recursion(right, cache) * ( num / denom );
}
/*
[5, 6, 7, 1, 2, 3]
5| 6,7 | 1,2,3
--------
2,1,3
*/
function factorial(num, cache) {
    // console.log(num);
    if(num <= 1) return 1;
    if(num in cache) return cache[num];
    return cache[num] = factorial(num - 1, cache) * num;
}
