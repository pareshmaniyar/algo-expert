/*

Pattern
      0
      1
     10
     11
    100
    101
    110
    111
   1000
   1001
   1010
   1011
-------------------
left - find upper bound or right - min
right - find lower bound or left - min
1010101
1110110
- trim to make size equal
- make each one zero is diff is greater than multiples of 2
*/
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var rangeBitwiseAnd = function(left, right) {
    let bitLeft = left.toString(2);
    let bitRight = right.toString(2);
    let l = bitLeft.length;
    let r = bitRight.length;
    // trim
    if(l - r > 0) {
        bitLeft = bitLeft.substring(l - r);
    } else if(r - l > 0) {
        bitRight = bitRight.substring(r - l);
    }
    // diff
    let diff = right - left;
    let result = parseInt(bitLeft, 2) & parseInt(bitRight, 2);
    result = result.toString(2);
    let len = result.length;
    let pow = 0;
    while(Math.pow(2, pow) <= diff && pow < len) {
        result = replaceAt(result, len - pow - 1, "0");
        pow++;
    }
    return parseInt(result, 2).toString(10);
};

function replaceAt(s, index, replacement) {
    return s.substr(0, index) + replacement + s.substr(index + replacement.length);
}

