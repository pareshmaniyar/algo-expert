/*
0,1,2,3,4,5
0 - 1
|   |
3 - 2

A: 0, 2
B: 1, 3

     3
     |
0 -- 4 -- 2
1 5
WONT WORK, 20 min soln
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const len = graph.length;
    const adjList = getAdjList(graph);
    const A = {}, B = {};
    const value = dfs(0, A, B, graph, true);
    const empty = graph.reduce((accum, item) => {
        if(item.length === 0) accum++;
        return accum;
    }, 0);
    return value?
        (Object.keys(A).length + Object.keys(B).length + empty === len) : value;
};

function dfs(node, A, B, adjList, addToA) {
    if(addToA) {
        A[node] = true;
    } else {
        B[node] = true;
    }
    for(const adj of adjList[node]) {
        // console.log(node, adj, A, B);
        if(addToA && adj in A) return false;
        if(!addToA && adj in B) return false;
        if(adj in A || adj in B) continue;
        if(!dfs(adj, A, B, adjList, !addToA)) return false;
    }
    return true;
}

function getAdjList(graph) {
    const result = {};
    for(let [src, des] of graph) {
        if(!(src in result)) {
            result[src] = [];
        }
        if(!(des in result)) {
            result[des] = [];
        }
        result[src].push(des);
        result[des].push(src);
    }
    return result;
}
