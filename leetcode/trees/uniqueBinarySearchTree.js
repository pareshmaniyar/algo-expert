/**
 * @param {number} n
 * @return {number}
 - n = 1 return 1
 - n = 2 0 + 1 + 1, 1 + 1 + 0 - 2
    1      2
     \    /
      2  1
 - 3 - 0 + 1 + 2, 1 + 1 + 1, 2 + 1 + 0 = 5
           2    +     1     +    2
 - 4 - 0 + 1 + 3, 1 + 1 + 2, 2 + 1 + 1, 3 + 1 + 0
           5    +     2    +    2     +     5
             n
    - loop i = 0, n
    0 + 1 + n - 1, 1 + 1 + n - 2, ..., n - 1, 1, 0
             
 */
    var numTrees = function(n) {
        return recursiveCall(n + 1, {1: 1, 0: 1});
    };
    
    function recursiveCall(n, cache) {
        if(cache[n]) return cache[n];
        let sum = 0;
        for(let i = 1; i < n; i++) {
            sum += recursiveCall(i, cache) * recursiveCall(n - i, cache);
        }
        return cache[n] = sum;
    }
    