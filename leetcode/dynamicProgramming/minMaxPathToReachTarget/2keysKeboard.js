/*

1 - 1
2 - 2
3 - 3
4 - 3 A, P - AA, C, P - AAAA
5 -   AAAAA
   0 1 2 3 4 5 6
1  0 0
2  0 0 2
4  0 0 2 3

- copyCount
recursion n, count = 1
    - min of loop
        - 
AAAA|AAAA|AAAA|AAAA
AAAAA|AAAAA
24 - 1,2,3,4,6,8,12
1 + soln(8) * 24/8
1 + soln(3) * 24/3

4 - 1,2
1 + soln(1) * 4 = 
1 + soln(2) * 2 = 

*/

/**
 * @param {number} n
 * @return {number}
 */
 var minSteps = function(n) {
    let res = 0;
    for(let i = 2; i * i <= n;) {
        if(n % i === 0) {
            n /= i;
            res += i;
        } else {
            i++;
        }
    }
    if(n != 1) res += n;
    return res;
};
