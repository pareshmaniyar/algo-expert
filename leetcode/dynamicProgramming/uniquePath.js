/*

cache

0, 0 to m - 1, n - 1
recurse i, j, count
- if i >  m || j > n return
- if i, j in cache return cache[i-j];
- count = 0;
    - count += i+1, j - DOWN 
    - count += i, j + 1 - RIGHT
- cache[i-j] = count
- return cache

l = max(m, n);
2^l
with caching = m * n

*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    return travelRobot(0, 0, m, n, {});
};

function travelRobot(i, j, m, n, cache) {
    if(i > m - 1 || j > n - 1) return 0;
    if(i === m - 1 && j === n - 1) return 1;
    if(cache[`${i}-${j}`]) return cache[`${i}-${j}`];
    let count = 0;
    count += travelRobot(i + 1, j, m, n, cache);
    count += travelRobot(i, j + 1, m, n, cache);
    cache[`${i}-${j}`] = count;
    return count;
}
