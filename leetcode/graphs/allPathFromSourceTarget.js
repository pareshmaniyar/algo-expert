/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    const result = {final: [], prospect: []};
    dfs(0, graph, {}, result);
    return result.final;
};
/*
0 -- 1 -- 2 -- 5
     |    |
     3 -- 4

*/
function dfs(node, graph, visited, result) {
    if(node === graph.length - 1) {
        result.final.push([...result.prospect, node]);
        return
    }
    visited[node] = true;
    result.prospect.push(node);
    for(const adj of graph[node]) {
        if(visited[adj]) continue;
        visited[adj] = true;
        dfs(adj, graph, visited, result);
        visited[adj] = false;
    }
    result.prospect.pop();
}
