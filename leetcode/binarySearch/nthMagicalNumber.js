/*
5:48
a, b
n - 1,2,3,4
2,3 - 2,3,4,6

Brute force
- loop from 1 = i
    - i % a || i % b k++
    - if k === n return i

start = 1

- start + end
    - 


*/

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var nthMagicalNumber = function(n, a, b) {
    let start = 1, end = Math.min(a, b) * n, mid;
    const gcd = (a1, b1) => {
        if(b1===0) return a1;
        return gcd(b1, a1%b1)
    }
    let lcm = Math.floor((a * b) / gcd(a, b)), num;
    while(start < end) {
        mid = Math.floor((start + end) / 2);
        num = Math.floor(mid/a) + Math.floor(mid/b) - Math.floor(mid/lcm);
        if(num < n) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    // console.log("Asf");
    return start % 1000000007;
};



