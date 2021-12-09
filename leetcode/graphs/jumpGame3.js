/*

traverse(start)
- start >= 0 && < n return false;
- if arr[start] == 0 return true;
- arr[start] = x
- traverse(x + start) || traverse(x - start)

*/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 var canReach = function(arr, start) {
    return traverse(start, arr, {});
};

function traverse(start, arr, visited) {
    if(start < 0 || start >= arr.length || visited[start]) return false;
    const val = arr[start];
    visited[start] = true;
    if(val === 0) return true;
    return traverse(val + start, arr, visited) || traverse(start - val, arr, visited);
}
