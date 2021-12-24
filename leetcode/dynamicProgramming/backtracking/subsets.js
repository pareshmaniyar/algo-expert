/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = [];
    traverse(0, [], nums, result);
    return result;
};

function traverse(index, buffer, nums, result) {
    result.push([...buffer]);
    if(index === nums.length) {
        return;
    }
    for(let i = index; i < nums.length; i++) {
        buffer.push(nums[i]);
        traverse(i + 1, buffer, nums, result);
        buffer.pop();
    }
}
