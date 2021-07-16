/**
 * @param {number[][]} intervals
 * @return {number}
start: [ 0,  5,  6, 15, 30, 30, 40]
end:   [10, 15, 20, 30, 40, 40, 50]

[[0,30], [5,10], [15,20], [6, 15], [30, 40], [30, 40], [40, 50]]

[[0,30],[5,10],[15,20]]
 0,  5, 15
10, 20, 30
2, 7
4, 10

*/

var minMeetingRooms = function(intervals) {
    let [start, end] = intervals.reduce((accum, interval) => {
        accum[0].push(interval[0]);
        accum[1].push(interval[1]);
        return accum;
    }, [[], []]);
    start.sort((a, b) => (a - b));
    end.sort((a, b) => (a - b));
    let pt1 = 0, pt2 = 0;
    const len = intervals.length;
    let maxCount = 0;
    while(pt1 < len && pt2 < len) {
        if(start[pt1] < end[pt2]) {
            pt1++;
            maxCount = Math.max(maxCount, pt1 - pt2);
        } else {
            pt2++;
        }
    }
    return maxCount;
};