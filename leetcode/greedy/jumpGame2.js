/**
 * @param {number[]} nums
 * @return {number}
 [2,3,1,1,4]
 
 */

 var jump = function(nums) {
    if(nums.length === 1) return 0;
    let maxRange = 0, range = 0;
    let steps = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        maxRange = Math.max(nums[i], maxRange);
        if(range === 0) {
            steps++;
            range = maxRange;
        }
        maxRange--;
        range--;
    }
    return steps;
};


