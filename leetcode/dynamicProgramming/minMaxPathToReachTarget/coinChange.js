/*

  0 1 2 3 4 5 6 7 8 9 10 11
1 0 1 2 3 4 5 6 7 8 9 10 11
2 0 1 1 2 2 3 3 4 4 5  5  6
5 0 

*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 var coinChange = function(coins, amount) {
    let curr = new Array(amount + 1).fill(+Infinity);
    curr[0] = 0;
    for(const coin of coins) {
        for(let j = 1; j <= amount; j++) {
            if(coin > j) continue;
            curr[j] = Math.min(curr[j], curr[j - coin] + 1);
        }
    }
    return curr[amount] === +Infinity ? -1 : curr[amount];
};

