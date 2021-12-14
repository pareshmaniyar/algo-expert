/*
- find max path sum fro 0,0 to m,n
- cache
- inc i or j recurse, return min length

- recurse i, j, cache, sum
    - if i,j === m,n return sum
    - sum + = mat[i][j]
    - min = Math.min(recurse i + 1, j, cache, sum, recurse i, j + 1, cache, sum)
    - return cache[i-j] = min
------------------------------------------------------
-2, -3, 3
-5,-10, 1
10, 20,-5

- recurse i, j, cache
    - Max recurse i + 1, j, cache, recurse i, j + 1, cache
    - return min(mat[i][j], mat[i][j] + max)
- 0,0
    - 0,1
        - 0,2 = -1
            - 1,2 = -4
                - 2,2 = -5
                - 1,3 return -Infinity
                - max = -5
                - min (1, 1 + -5) = -4
            - 0,3 = -Infinity
            - max = -4
            - min(3, 3 - 4) = -1
        - 1,1
        - min(-3, -3-1) = -4
    - 

*/
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function(dungeon) {
    return Math.max(1 - traverseMatrix(0, 0, {}, dungeon), 1);
};

function traverseMatrix(i, j, cache, mat) {
    // console.log(i, j);
    if(i === mat.length - 1 && j === mat[0].length - 1) {
        return mat[i][j];
    }
    if(i >= mat.length || j >= mat[0].length) {
        return -Infinity;
    }
    if(`x${i}-y${j}` in cache) return cache[`x${i}-y${j}`];
    let max = Math.max(
        traverseMatrix(i + 1, j, cache, mat),
        traverseMatrix(i, j + 1, cache, mat)
    );
    cache[`x${i}-y${j}`] = Math.min(mat[i][j], mat[i][j] + max);
    // console.log(i, j, cache[`x${i}-y${j}`]);
    return cache[`x${i}-y${j}`];
}


