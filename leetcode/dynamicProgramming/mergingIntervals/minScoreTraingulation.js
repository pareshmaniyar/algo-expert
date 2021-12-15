/**
 * @param {number[]} values
 * @return {number}
 */
/*
   s k       e
- [1,3,1,4,1,5]

*/

var minScoreTriangulation = function(values) {
    return traverse(0, values.length - 1, values, {});
};

function traverse(start, end, values, cache) {
    if(end - start < 2) return 0;
    if(`L${start}R${end}` in cache) return cache[`L${start}R${end}`];
    let min = +Infinity;
    for(let k = start + 1; k < end; k++) {
        min = Math.min(
            min,
            values[start] * values[end] * values[k] + traverse(start, k, values, cache) + traverse(k, end, values, cache)
        );
    }
    return cache[`L${start}R${end}`] = min;
}


