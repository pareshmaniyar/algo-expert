/*
- recursion arr, prev = 1
- arr.length === 0 return 0;
- arr.length === 1 return prev * arr[0];
- min
- loop for first
    - loop for second
        - remove first, second
        - mul = first * second
        - add mul to arr
        - min = Math.min(min, first + second + recursion(arr, i * prev))
        - remove mul, add first, second
- 
///////////////////////////////////////////////////////////////////
- diff = j - i
- if diff == 1 return number
- if diff == 2 return num1 + num2 + num1 * num2
- if diff = 3
    - max
    - loop i = 0, n - 2
        - a = recurse(0, i)
        - b = recurse(i + 1, n)
        - max of a + b + a * b


*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var mctFromLeafValues = function(arr) {
    return findMax(arr, 0, arr.length - 1, {}).sum;
};

function findMax(arr, i, j, cache) {
    // console.log(i, j);
    let diff = j - i;
    if(diff === 0) return { max: arr[i], sum: 0 };
    if(diff === 1) return { max: Math.max(arr[i], arr[j]), sum: arr[i] * arr[j] };
    if(`L${i}R${j}` in cache) return cache[`L${i}R${j}`];
    let sum = +Infinity, max = -Infinity, left, right, local;
    for(let k = i; k < j; k++) {
        left = findMax(arr, i, k, cache);
        right = findMax(arr, k + 1, j, cache);
        local = left.max * right.max + left.sum + right.sum;
        max = Math.max(left.max, right.max, max);
        sum = Math.min(sum, local);
        // console.log(left, right, i, k, j, local);
    }
    return cache[`L${i}R${j}`] = { sum, max };
}

