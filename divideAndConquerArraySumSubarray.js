function getMaxSubArraySum(array, start, end) {
    if(start === end ) return array[start];
    const mid = start + parseInt((end - start) / 2 );
    const leftMax = getMaxSubArraySum(array, start, mid);
    const rightMax = getMaxSubArraySum(array, mid + 1, end);
    let localLeftMax = -Infinity;
    let tempSum = 0;
    for(let i = mid; i >= start; i--) {
        tempSum += array[i];
        localLeftMax = Math.max(localLeftMax, tempSum);
    }
    tempSum = 0;
    let localRightMax = -Infinity;
    for(let i = mid + 1; i <= end; i++) {
        tempSum += array[i];
        localRightMax = Math.max(localRightMax, tempSum);
    }
    let result = Math.max(leftMax, rightMax, localRightMax + localLeftMax);
    return result;
}
let arr = [-3, 2, 4, 5, -4, 10, -2, -1, 9, -4, 3];
let sum = getMaxSubArraySum(arr, 0, arr.length - 1);
console.log(sum);
arr = [-3, 2, 3, -4, 5];
sum = getMaxSubArraySum(arr, 0, arr.length - 1);
console.log(sum);
