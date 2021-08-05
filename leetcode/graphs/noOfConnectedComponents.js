/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
/*
1---2
 \ /
  3
*/
var countComponents = function(n, edges) {
    let res = 0;
    let adjList = getAdjList(edges);
    const visited = new Array(n).fill(false);
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        dfs(i, visited, adjList);
        // console.log(visited);
        res++;
    }
    return res;
};

function dfs(vtx, visited, adjList) {
    // console.log(vtx, visited);
    if(visited[vtx]) return;
    visited[vtx] = true;
    if(!(vtx in adjList)) return;
    for(const adj of adjList[vtx]) {
        dfs(adj, visited, adjList);
    }
}

function getAdjList(edges) {
    let res = {};
    for(const [src, des] of edges) {
        if(!(src in res)) {
            res[src] = [];
        }
        if(!(des in res)) {
            res[des] = [];
        }
        res[src].push(des);
        res[des].push(src);
    }
    return res;
}
