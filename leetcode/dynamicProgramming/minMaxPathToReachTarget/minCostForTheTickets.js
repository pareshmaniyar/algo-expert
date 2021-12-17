/*

[1,4,6,7,8,20] - inc order
[2,7,15] - perfect
- BF
i = 0, cost = 0;
- 2, 7, 15 -> add currCost to cost
- 2, 7, 30 -> maxDays

recursion i, cost, maxReach
if i == last
    - maxReach inclusive return cost
    - else return 2 + cost
if(arr[i] <= maxReach) return recursion i + 1, cost, maxReach
let minCost = cost;
- loop thrice for 2, 7, 30
    - min of recursion i + 1, cost, maxReach
return minCost
- Approach 2:
    1  4  6  7  8  20
min 2  4  6  7  9  11
2   2  4  6  8 10  12
7   7  7  7  7  9  16
15 15 15 15 15 15  

*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
 var mincostTickets = function(days, costs) {
    const dates = days.reduce((accum, value) => {
        accum[value] = true;
        return accum;
    }, {});
    const dp = new Array(366).fill(0);
    dp[0] = 0;
    for(let i = 1; i < 366; i++) {
        if(!(i in dates)) {
            dp[i] = dp[i - 1];
            continue;
        }
        dp[i] = Math.min(
            dp[Math.max(0, i - 1)] + costs[0],
            dp[Math.max(0, i - 7)] + costs[1],
            dp[Math.max(0, i - 30)] + costs[2]
        );
    }
    return dp[365];
};

