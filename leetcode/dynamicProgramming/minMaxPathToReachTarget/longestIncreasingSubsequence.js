/**
 * @param {number[]} nums
 * @return {number}
 */
/*

     10(6)
    /    \
   9(5)  101
  /
 2(1)
   \
   5(2)
   /   \
  3(1)  7(1)

nlogn solution

*/
var lengthOfLIS = function(nums) {
    const length = nums.length;
    const incSeq = new Array(length).fill(-Infinity);
    incSeq[0] = 0;
    const traverse = new Array(length).fill(-1);
    let len = 0;
    for(let i = 1; i < length; i++) {
        if(nums[incSeq[len]] < nums[i]) {
            len++;
            incSeq[len] = i;
            traverse[i] = incSeq[len - 1];
            continue;
        }
        let lo = 0, hi = len, mid;
        while(lo < hi) {
            mid = Math.floor((lo + hi) / 2);
            if(nums[incSeq[mid]] < nums[i]) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        incSeq[hi] = i;
        traverse[i] = hi > 0 ? incSeq[hi - 1] : -1;
    }
    console.log(traverse);
    return len + 1;
};

/*

0,1,2,3,4,5

*/






/////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
/*

     10(6)
    /    \
   9(5)  101
  /
 2(1)
   \
   5(2)
   /   \
  3(1)  7(1)
n^2

*/
var lengthOfLIS = function(nums) {
    const len = nums.length;
    const dp = new Array(len).fill(0);
    let max = 0;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] = dp[i] + 1;
        max = Math.max(max, dp[i]);
    }
    return max;
};
