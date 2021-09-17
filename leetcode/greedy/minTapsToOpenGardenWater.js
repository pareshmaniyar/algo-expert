/*

[3,3,1,1,0,0,1]
[0,0,0,0,1,-1,1]


[0,1,2,3,4,5]
TLE Solution below!!!!

- Approach adding choice
    - fill: index, filled, taps [0, [0, 2, 2, -1, -1, -1], 0], cache
    - return index === n
    - if visited index fill index++
    - loop options
        - mark visited with tap value
        - fill
        - unmark
    - not able to fill break and return -1
*/

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
 var minTaps = function(n, ranges) {
    const access = generateAccessPoints(ranges);
    const len = ranges.length;
    for(let i = 0; i < len - 1; i++) {
        if(access[i].length === 0) return -1;
    }
    return fillWithTaps(0, Array(len - 1).fill(-1), 0, access, ranges, {});
};

function fillWithTaps(index, visited, taps, access, ranges, cache) {
    const len = visited.length;
    if(index === len) return taps;
    if(visited[index] != -1) return fillWithTaps(1 + index, visited, taps, access, ranges, cache);
    let min = len;
    for(let i = 0; i < access[index].length; i++) {
        markVisited(access[index][i], visited, ranges, true);
        min = Math.min(min, fillWithTaps(1 + index, visited, 1 + taps, access, ranges, cache));
        markVisited(access[index][i], visited, ranges, false);
    }
    return cache[index] = min;
}

function markVisited(index, visited, ranges, mark) {
    let range = ranges[index];
    for(let i = index - range; i < index + range; i++) {
        if(mark) {
            if(visited[i] === -1) {
                visited[i] = index;
            }
        } else {
            if(visited[i] === index) {
                visited[i] = -1;
            }
        }
    }
}

function generateAccessPoints(ranges) {
    const len = ranges.length;
    const res = Array(len - 1).fill(0);
    for(let i = 0; i < len - 1; i++) {
        res[i] = [];
    }
    for(let i = 0; i < len; i++) {
        let range = ranges[i];
        for(let j = i - range; j < i + range; j++) {
            if(j < 0 || j >= len - 1) continue;
            res[j].push(i);
        }
    }
    return res;
}


