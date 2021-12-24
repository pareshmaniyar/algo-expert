/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*



*/

var permuteUnique = function(nums) {
    const result = [];
    nums.sort((a, b) => (a - b));
    const used = new Array(nums.length).fill(false);
    dfs([], result, nums, used);
    return result;
};

function dfs(buffer, result, nums, used) {
    if(buffer.length === nums.length) {
        result.push([...buffer]);
        return;
    }
    for(let i = 0; i < nums.length; i++) {
        if(used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        used[i] = true;
        buffer.push(nums[i]);
        dfs(buffer, result, nums, used);
        used[i] = false;
        buffer.pop();
    }
}

// Second soln!!!

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const data = {};
    for(const val of nums) {
        data[val] = data[val] || 0;
        data[val]++;
    }
    const result = [];
    backtrack([], nums, data, result);
    return result
};

function backtrack(buffer, nums, data, result) {
    if(buffer.length == nums.length) {
        result.push([...buffer]);// call by reference
        return;
    }
    for(const [val, count] of Object.entries(data)) {
        if(count === 0) continue;
        buffer.push(val);
        data[val]--;
        backtrack(buffer, nums, data, result);
        data[val]++;
        buffer.pop();
    }
}
