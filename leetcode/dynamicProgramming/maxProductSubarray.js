/*

2,3,-2,3,-1,2,3,-3
2,6,12,., .,.,., .

[  |     |    |   ]

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let max = nums[0];
    let left = 1;
    let right = 1;
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        left *= nums[i];
        right *= nums[len - 1 - i];
        max = Math.max(max, left, right);
        left = left === 0 ? 1: left;
        right = right === 0 ? 1: right;
    }
    return max;
};
