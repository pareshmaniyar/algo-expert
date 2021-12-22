/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*

[1,2,3]



*/

var permute = function(nums) {
    const result = [];
    dfs(0, result, nums);
    return result;
};

function dfs(index, result, nums) {
    if(index === nums.length) {
        result.push([...nums]);
        return;
    }
    // if(index >= nums.length) return;
    for(let i = index; i < nums.length; i++) {
        swap(nums, i, index);
        dfs(index + 1, result, nums);
        swap(nums, i, index);
    }
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}