/*
[1,7,4,6,9,2,5] - 6

[1, 7, 9, 10, 9] - 3
1+1+1
[7, 1, 4, 6, 10, 9] - 4
1+1+1+1
- 2 times pass
- pass positive
- pass negative

- 1 time pass
- find inversions

*/
/**
 * @param {number[]} nums
 * @return {number}
 */

 function findFirstDiff(nums) {
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] > 0) {
            return true
        } else if (nums[i] - nums[i - 1] < 0) {
            return false;
        }
    }
    return false;
}

var wiggleMaxLength = function(nums) {
    if(nums.length === 1) return nums.length;
    let inversions = 1;
    let inc = findFirstDiff(nums);
    let comp;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] > 0) {
            if(inc) {
                inversions++;
                inc = false;
            }
        } else if(nums[i] - nums[i - 1] < 0) {
            if(!inc) {
                inversions++;
                inc = true;
            }
        }
    }
    return inversions;
};