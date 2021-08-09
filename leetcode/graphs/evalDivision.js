/*
   2     3
a --> b --> c
  1/2   1/3
{
a: [[b, 2]],
b: [[a, 1/2],[c, 3]],
c: [[b, 1/3]]
}
- visited

*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
 var calcEquation = function(equations, values, queries) {
    const adjList = getAdjacencyList(equations, values);
    let result = [];
    for(let [src, des] of queries) {
        result.push(dfs(src, des, adjList, {}));
    }
    return result;
};

function dfs(src, des, adjList, visited) {
    if(!(src in adjList) || !(des in adjList)) return -1;
    if(src === des) return 1;
    if(src in visited) return -1;
    visited[src] = -1;
    let res = -1;
    for(const [adj, weight] of adjList[src]) {
        res = dfs(adj, des, adjList, visited);
        // console.log(res, src, des, weight);
        if(res > 0) return res * weight;
    }
    return res;
}

function getAdjacencyList(equations, values) {
    let result = {}, i = 0;
    for(const [src, des] of equations) {
        if(!(src in result)) {
            result[src] = [];
        }
        if(!(des in result)) {
            result[des] = [];
        }
        result[src].push([des, values[i]]);
        result[des].push([src, (1 / values[i])]);
        i++;
    }
    return result;
}
