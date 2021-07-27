/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 - [7,2,5,10,8] 2
 - 7 2,5,10,8 | 7,2 5,10,8 | 7,2,5 10,8 | 
 - [7,2,5,10,8] 3
 - 7 2 5,10,8 | 7,2 5, 10,8 | 7,2 5,10 8
 m < nums.length
 - 7,2,5,10,8 - 3
 - 7 + 2,5,10,8 - 2 | 7,2 + 5,10,8 - 2 | ... | 7,2,5
 - recursion arr, divide
    - if divide is 1 return sum of array;
    - loop 0 to length - divide + 1
        - min(currentSum + recursion arr from i to end, divide - 1);
 - cache - start, divide
 
 */

 var splitArray = function(nums, m) {
    return recursion(0, nums, m, {});
};

function recursion(start, arr, divide, memo) {
    const combination = `s${start}-d${divide}`;
    if(combination in memo) return memo[combination];
    if(divide === 1) {
        let sum = 0;
        for(let i = start; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    let minSum = +Infinity;
    let leftSum = 0;
    for(let i = start; i < arr.length - divide + 1; i++) {
        let temp = recursion(i + 1, arr, divide - 1, memo);
        leftSum += arr[i];
        minSum = Math.min(Math.max(leftSum, temp), minSum);
    }
    return memo[combination] = minSum;
}
