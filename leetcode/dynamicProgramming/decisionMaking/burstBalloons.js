/**
 * @param {number[]} nums
 * @return {number}
 */
/*

Burst Balloon

3,1,5,8



  0 1 2 3
0 3 4 
1   1 6 
2     5 48
3       8

*/

var maxCoins = function(nums) {
    const len = nums.length;
    const mat = new Array(len);
    for(let i = 0; i < len; i++) {
        mat[i] = new Array(len).fill(0); // ??
    }
    for(let size = 1; size < len + 1; size++) {
        for(let start = 0; start + size < len + 1; start++) {
            let end = start + size - 1;
            for(let last = start; last <= end; last++) {
                let leftIn = 0;
                let rightIn = 0;
                if(last - 1 >= start) {
                    leftIn = mat[start][last - 1];
                }
                if(last + 1 <= end) {
                    rightIn = mat[last + 1][end];
                }
                let curr = nums[last];
                let leftOut = nums[start - 1] || 1;
                let rightOut = nums[end + 1] || 1;
                curr *= leftOut * rightOut;
                let final = curr + leftIn + rightIn;
                if(mat[start][end] < final) {
                    mat[start][end] = final;
                }
            }
        }
    }
    return mat[0][len - 1];
};



