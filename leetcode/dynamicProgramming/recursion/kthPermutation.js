/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
    let perm = new Array(n);
    let fact = 1;
    for(let i = 0; i < n; i++) {
        perm[i] = i + 1;
        fact *= (i + 1);
    }
    fact = fact / n;
    let result = new Array(n);
    let divisor, remainder;
    k = k - 1;
    while(perm.length > 0) {
        divisor = Math.floor(k / fact);
        result[n - perm.length] = perm[divisor];
        k = k % fact;
        perm = perm.slice(0, divisor).concat(perm.slice(divisor + 1));
        fact = fact / perm.length;
    }
    return result.join('');
};

