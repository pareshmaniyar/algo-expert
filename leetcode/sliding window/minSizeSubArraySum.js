/*
BF
- all subarrays sum and find min - O(n^2) - t, s - O(1)

Optimized
i = 0, j = 0, sum = 0, min = +Infinity
- loop until j < len
    - sum += nums[j]
    - sum < k
        - j++
    - sum === k
        - sum === k min = Math.min(min, j - i + 1)
        - sum -= nums[i]
        - j++, i++
    - sum > k
        - sum -= nums[i]
        - i++
return min
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let i = 0, j = 0, sum = 0, min = +Infinity;
    while(j < nums.length) {
        sum += nums[j];
        while(sum >= target) {
            min = Math.min(min, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return min === +Infinity ? 0 : min;
};
