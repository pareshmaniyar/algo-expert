/*
[5,4,0,3,1,6,2]
[1,1,1,1,1,1,1]


*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 var arrayNesting = function(nums) {
    const visited = Array(nums.length).fill(false);
    let maxCount = 1;
    for(let i = 0; i < nums.length; i++) {
        if(visited[i]) continue;
        visitNode(i, 1);
    }
    function visitNode(node, count) {
        if(visited[node]) return;
        maxCount = Math.max(maxCount, count);
        visited[node] = true;
        visitNode(nums[node], count + 1);
    }
    return maxCount;
};

