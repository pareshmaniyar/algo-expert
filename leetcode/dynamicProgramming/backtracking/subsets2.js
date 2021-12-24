/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
[1,2,2]
 0
[[],[1], [1,2], [1,2,2],]

recursion buffer, index // [1, 2]
- add to result
- i = start to end
    - if i > start && arr[i] === arr[i - 1] continue
    - add to buffer
    - recurse i + 1
    - remove from buffer

1: 1
2: 2

*/

var subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a, b) => (a - b))
    traverse(0, [], nums, result);
    return result;
};

function traverse(index, buffer, nums, result) {
    result.push([...buffer]);
    for(let i = index; i < nums.length; i++) {
        if(i > index && nums[i] === nums[i - 1]) continue;
        buffer.push(nums[i]);
        traverse(i + 1, buffer, nums, result);
        buffer.pop();
    }
}



