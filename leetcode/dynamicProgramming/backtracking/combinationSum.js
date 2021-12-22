/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/*

[2,3,6,7], target = 7

  0 1 2 3 4 5 6 7
2 1 0 1 0 1 0 1 0
3 1 0 1 1 1 1 2 1
6 1 0 1 1 1 1 3 1
7 1 0 1 1 1 1 3 2
prev + curr - val

- while not reached 0
    - while same row to check for same value
        - keep adding in result
    - move to top 


*/

var combinationSum = function(candidates, target) {
    const result = [];
    dfs(0, [], target);
    function dfs(i, ans, target) {
        if(target === 0) {
            result.push([...ans]);
            return;
        }
        if(target < 0) return;
        for(let k = i; k < candidates.length; k++) {
            ans.push(candidates[k]);
            dfs(k, ans, target - candidates[k]);
            ans.pop();
        }
    }
    return result;
};

