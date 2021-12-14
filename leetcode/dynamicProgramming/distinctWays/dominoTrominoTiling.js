/*
n = 1 return 1
n = 2 return 1
1 - 1
2 - 2
3 - 5
4 - 1+3,2+2,3+1 = 5 + 4 + 5 = 14 - 3 = 11
5 - 1+4,2+3,3+2,4+1 = 11 + 10 + 10 + 11 = 42 - 18 = 24
6 - 1+5,2+4,3+3,4+2,5+1= 24 + 22 + 25 + 22 + 24 = 117 - 64 = 53
3, 18, 64
 15, 44

*/

/**
 * @param {number} n
 * @return {number}
 */
 var numTilings = function(n) {
    const dp = new Array(n + 1).fill(1);
    const mod = 1000000007;
    dp[2] = 2;
    for(let i = 3; i < n + 1; i++) {
        dp[i] = ((2 * dp[i - 1]) % mod + (dp[i - 3] % mod)) % mod;
    }
    return dp[n];
};


