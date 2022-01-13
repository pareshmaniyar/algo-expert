/**
 * @param {number[][]} points
 * @return {number}
 */
/*
- sort inc of first, dec of second

c = 2
    s                 e
[1, 6] [2, 5] [4, 9] [7, 12] [10, 16]

- if found more
    - s, e
    - e[1] = s
    - e++
    - count++

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
|                  |
      |               |       
                |       |
              |         |
    |           |
          |     |
          | |





*/

var findMinArrowShots = function(points) {
    let count = 1, end = 1, start = 0;
    points.sort((a, b) => {
        if(a[1] != b[1]) return a[1] - b[1];
        return a[0] - b[0];
    })
    while(end < points.length) {
        if(points[end][0] <= points[start][1]) {
            end++;
        } else {
            count++;
            start = end;
            end++;
        }
    }
    return count;
};

