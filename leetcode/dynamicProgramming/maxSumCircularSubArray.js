/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    const n = nums.length;
    let curMax = 0;
    let maxSum = nums[0];
    let curMin = 0;
    let maxMin = nums[0];
    let sum = 0;
    for(let i = 0; i < n; i++) {
        curMax = Math.max(nums[i], curMax + nums[i]);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(nums[i], curMin + nums[i]);
        maxMin = Math.min(maxMin, curMin);
        sum += nums[i];
    };
    return maxSum > 0 ? Math.max(sum - maxMin, maxSum): maxSum;
};