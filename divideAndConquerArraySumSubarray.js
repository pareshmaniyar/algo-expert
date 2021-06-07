function getMaxSubArraySum(array, start, end) {
    if(start === end ) return {
        max: array[start],
        leftIndex: start,
        rightIndex: end
    }
    const mid = start + parseInt((end - start) / 2 );
    const leftMax = getMaxSubArraySum(array, start, mid);
    const rightMax = getMaxSubArraySum(array, mid + 1, end);
    let localLeftMax = -Infinity;
    let tempSum = 0;
    let leftIndex = null;
    for(let i = mid; i >= start; i--) {
        tempSum += array[i];
        if(localLeftMax < tempSum) {
            localLeftMax = tempSum;
            leftIndex = i;
        }
    }
    tempSum = 0;
    let localRightMax = -Infinity;
    let rightIndex = null;
    for(let i = mid + 1; i <= end; i++) {
        tempSum += array[i];
        if(localRightMax < tempSum) {
            localRightMax = tempSum;
            rightIndex = i;
        }
    }
    let result = {
        max: leftMax.max,
        leftIndex: leftMax.leftIndex,
        rightIndex: leftMax.rightIndex
    };
    if(leftMax.max < rightMax.max) {
        result = {
            max: rightMax.max,
            leftIndex: rightMax.leftIndex,
            rightIndex: rightMax.rightIndex
        };
    }
    if(rightMax.max < localRightMax + localLeftMax) {
        result = {
            max: localRightMax + localLeftMax,
            leftIndex,
            rightIndex
        };
    }
    return result;
}

function getMaxSubArraySumWrapper(array) {
    const { leftIndex, rightIndex } = getMaxSubArraySum(array, 0, array.length - 1);
    return array.slice(leftIndex, rightIndex + 1);
}
let arr = [-3, 2, 4, 5, -4, 10, -2, -1, 9, -4, 3];
let sum = getMaxSubArraySum(arr, 0, arr.length - 1);
let subArray = getMaxSubArraySumWrapper(arr);
console.log(subArray);
console.log(sum);
arr = [-3, 2, 3, -4, 5];
sum = getMaxSubArraySum(arr, 0, arr.length - 1);
console.log(sum);
subArray = getMaxSubArraySumWrapper(arr);
console.log(subArray);
