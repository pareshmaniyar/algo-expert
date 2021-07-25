/**
 * @param {number[]} stones
 * @return {boolean}
 k
 k - 1, k, k + 1
 [0,1,3,5,6,8,12,17]
 [1,2,3,3,4,4, 5, 6]
    1,2,2,1,3, 4, 5
    1,2,2,1,3, 4, 5
    1,2,2,1,2, 4, 5
 [0,1,3,4,8,9,11]
 [1,2,3,2,0,0,0]
 [0,1,3,6,7]
 [1,2,3,4,3]
 WON"T WORK
 */

 var canCross = function(stones) {
    const len = stones.length;
    const maxJumps = Array(len).fill(0);
    maxJumps[0] = 1;
    for(let i = 0; i < len; i++) {
        let pt = i + 1;
        while(pt < len && stones[pt] <= maxJumps[i] + stones[i]) {
            maxJumps[pt] = Math.max(maxJumps[pt], 1 + stones[pt] - stones[i]);
            pt++;
        }
        if(maxJumps[len - 1] > 0) return true;
    }
    console.log(stones);
    console.log(maxJumps);
    return false;
};


