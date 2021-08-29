/*
TLE!!! - N ^ 2, but I want O(N) time

2,1,5,0,4,6

0,0,1,0,1,2 - Time - O(N ^ 2), Space - O(N)

  i j
- N ^ 2
- loop i
    - 
0,0,1,0,1,1

- brute force
    - 3 loops - N ^ 3
Final - sart from right, Time - O(N), Space - O(1) - WRONG!

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const dp = Array(nums.length).fill(0);
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] <= nums[j]) continue;
            dp[i] = Math.max(dp[i], dp[j] + 1);
            if(dp[i] === 2) return true;
        }
    }
    //console.log(dp);
    return false;
};