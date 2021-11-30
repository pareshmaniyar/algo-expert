/*

Square
- l: 2, r: 2, d: 2 - 3 * 3 = 4

Rect
- l: 2, r: 1

len = 1
while(i, j is 1)
- l = min(l, [i, j])
- compute l * len
- len++
- j--

Solve like histogram
- each row represents - histogram of height values
- T(row * col)

*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */

 var maximalRectangle = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return 0;
    const height = getHeightMatrix(matrix);
    //console.log(height);
    let max = -Infinity;
    for(let i = 0; i < height.length; i++) {
        max = Math.max(max, getMaxArea(height[i]));
    }
    return max;
};

function getMaxArea(histogram) {
    const len = histogram.length;
    const left = new Array(len).fill(0);
    const right = new Array(len).fill(len - 1);
    let max = -Infinity;
    const stack = [];
    for(let i = 0; i < len; i++) {
        while(stack.length !== 0) {
            const peek = stack[stack.length - 1];
            if(histogram[peek] < histogram[i]) {
                left[i] = peek + 1;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(i);
    }
    stack.length = 0;
    for(let i = len - 1; i >= 0; i--) {
        while(stack.length !== 0) {
            const top = stack[stack.length - 1];
            if(histogram[top] < histogram[i]) {
                right[i] = top - 1;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(i);
    }
    for(let i = 0; i < len; i++) {
        max = Math.max(max, (right[i] - left[i] + 1) * histogram[i]);
    }
    // console.log(left, right, histogram);
    return max;
}

function getHeightMatrix(matrix) {
    const result = [];
    for(let i = 0; i < matrix.length; i++) {
        const arr = new Array(matrix[0].length).fill(0);
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === "0") continue;
            if(i === 0) {
                arr[j] = 1;
            } else {
                arr[j] = result[i - 1][j] + 1;
            }
        }
        result.push(arr);
    }
    return result;
}

