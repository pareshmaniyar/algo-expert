/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

 var cloneGraph = function(node) {
    if(node === null) return null;
    return dfs(node, {});
};

function dfs(node, visited) {
    const newNode = new Node(node.val);
    visited[node.val] = newNode;
    for(const adj of node.neighbors) {
        if(adj.val in visited) {
            newNode.neighbors.push(visited[adj.val]);
        } else {        
            newNode.neighbors.push(dfs(adj, visited));
        }
    }
    return newNode;
}

