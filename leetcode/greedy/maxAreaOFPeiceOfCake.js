/*
5,4

1,2,4
1,3
0,0
- loop through rows
    - curr, prev = length
    - loop through cols
        - curr, prev = breadth
        - compute and store max
*/

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    let maxArea = 0;
    let prevRow = 0, prevCol = 0;
    horizontalCuts.push(h);
    verticalCuts.push(w);
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    for(const hCut of horizontalCuts) {
        let length = hCut - prevRow;
        for(const vCut of verticalCuts) {
            let breadth = vCut - prevCol;
            maxArea = Math.max(maxArea, length * breadth);
            prevCol = vCut;
        }
        prevRow = hCut;
    }
    return ( BigInt(maxArea)) % 1000000007n;
};
