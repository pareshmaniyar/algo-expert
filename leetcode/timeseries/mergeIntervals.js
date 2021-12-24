/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/*

- sort first, then last - nlogn

- compare a, b
    if a[1] <= b[1]
     update a[1] = b[1]


*/

var merge = function(intervals) {
    intervals.sort((a, b) => (a[0] - b[0] === 0? a[1] - b[1] : a[0] - b[0]));
    const result = [intervals[0]];
    for(let i = 1; i < intervals.length; i++) {
        if(result[result.length - 1][1] >= intervals[i][0]) {
            if(result[result.length - 1][1] < intervals[i][1]) {
                result[result.length - 1][1] = intervals[i][1];
            }
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};

