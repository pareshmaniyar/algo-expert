/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/*

- loop for each node
    - dfs(node, level, sum)
n * n
leafs

[0,1,2,3,4,5]
[0,1,0,1,1,1] - leafs
[1,0,3,0,0,0] - leafs attached


*/

var sumOfDistancesInTree = function(n, edges) {
    const count = new Array(n).fill(0);
    const res = new Array(n).fill(0);
    const adjList = getAdjList(edges, n);
    dfs(0, -1, adjList, count, res);
    dfs2(0, -1, adjList, count, res, n);
    return res;
};

function getAdjList(edges, n) {
    let result = new Array(n);
    for(let i = 0; i < n; i++) {
        result[i] = [];
    }
    for(const [a, b] of edges) {
        result[a].push(b);
        result[b].push(a);
    }
    return result;
}

function dfs(i, p, adjList, count, res) {
    for(const adj of adjList[i]) {
        if(adj === p) continue;
        dfs(adj, i, adjList, count, res);
        count[i] += count[adj];
        res[i] += res[adj] + count[adj];
    }
    count[i] += 1;
}

function dfs2(curr, prev, adjList, count, res, n) {
    for(const adj of adjList[curr]) {
        if(adj === prev) continue;
        res[adj] = res[curr] - count[adj] + n - count[adj];
        dfs2(adj, curr, adjList, count, res, n);
    }
}

