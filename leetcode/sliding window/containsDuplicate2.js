/*
- k window
123413, 3
123 = data
loop from k
    - check el in data; return true
    - del i - k data
    - add i
return false
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let visited = {};
    for(let i = 0; i < k && i < nums.length; i++) {
        if(nums[i] in visited) {
            return true;
        }
        visited[nums[i]] = true;
    }
    for(let i = k; i < nums.length; i++) {
        const num = nums[i];
        if(num in visited) return true;
        visited[num] = true;
        delete visited[nums[i - k]];
    }
    return false;
};
