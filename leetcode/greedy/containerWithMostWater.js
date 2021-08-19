/*

[1,8,6,2,5,4,8,3,7]

Max(min of two * distance)

[1,8,8,8,8,8,8,8,8]
[8,8,8,8,8,8,8,7,7]

4,3,2,1,4
4,4,4,4,4
4,4,4,4,4

*/

/**
 * @param {number[]} height
 * @return {number}
 */

 var maxArea = function(height) {
    let max = -Infinity;
    let pt1 = 0, pt2 = height.length - 1;
    while(pt1 < pt2) {
        max = Math.max(max, (pt2 - pt1) * Math.min(height[pt1], height[pt2]));
        if(height[pt1] < height[pt2]) {
            pt1++;
        } else {
            pt2--;
        }
    }
    return max;
};

