/**
 * @param {number} k
 * @return {number}
 */
/*

- k % 2 === 0 return -1
BF

num = 1
while num % k != 0 && num < 9007199254740991
    num = num + 1;

*/

var smallestRepunitDivByK = function(k) {
    let num = 1, len = 1;
    let rem = num % k;
    let seen = {};
    while(rem != 0) {
        if(rem in seen) return -1;
        seen[rem] = true;
        num = (rem * 10) + 1;
        rem = num % k;
        len++;
    }
    return len;
};
