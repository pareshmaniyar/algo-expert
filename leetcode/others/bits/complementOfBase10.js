/**
 * @param {number} n
 * @return {number}
 */
/*

10 -> 3
2 -> 1
1010


*/

var bitwiseComplement = function(n) {
    if(n === 0) return 1;
    let res = Math.floor(Math.log2(n));// 3
    let result = new Array(res + 1).fill("0"); // 0000
    while(res >= 0) {
        result[res] = "1"; // 0101
        n = n % Math.pow(2, res); // n = 0
        res = Math.floor(Math.log2(n)); // res = 0
    }
    let soln2 = 0;
    for(let i = 0; i < result.length; i++) {
        if(result[i] === "0") {
            soln2 += Math.pow(2, i);
        }
    }
    return soln2;
};
