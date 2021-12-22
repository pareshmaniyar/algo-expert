/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => (a - b));
    dfs(0, [], target);
    function dfs(i, ans, target) {
        if(target === 0) {
            result.push([...ans]);
            return;
        }
        if(target < 0) return;
        for(let k = i; k < candidates.length; k++) {
            if(i != k && candidates[k] === candidates[k - 1]) continue;
            ans.push(candidates[k]);
            dfs(k + 1, ans, target - candidates[k]);
            ans.pop();
        }
    }
    return result;
};
