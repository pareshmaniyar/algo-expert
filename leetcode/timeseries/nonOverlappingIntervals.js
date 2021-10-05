/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => (a[0] < b[0]) ? -1 : 1);
    let left = 0, right = 1, count = 0;
    while(right < intervals.length) {
        if(intervals[left][1] <= intervals[right][0]) {
            left = right;
            right++;
        } else if(intervals[left][1] <= intervals[right][1]) {
            right++;
            count++;
        } else {
            left = right;
            count++;
            right++;
        }
    }
    return count;
};
