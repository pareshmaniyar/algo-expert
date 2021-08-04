/*
adjacencyList
{
1: [2,3,7],
2: [4,6],
3: [5]
}
LOGIC IS CORRECT BUT NOT PASSING CORRECT TEST CASES!
recursion parent
    - visited or t <= 0 then return -1
    - if(target) return 1;
    - options = len of children
    - return (1/options) * recursion(child) if not -1, t - 1
    - else return -1;
t - O(d)
s - O(d)
d - depth of tree
       3
      /
     2
    /
   1
         8
         |
     4   3   5
      \  |  /
    7    2   9 10
     \   |  /  /
         1 ----

          1
       /  |  \
       2  3   7
      / \ |
     4   65
    

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
 var frogPosition = function(n, edges, t, target) {
    const adjacencyList = getAdjacencyList(edges);
    return DFSTraversal(1, adjacencyList, t, target, {});
};

function DFSTraversal(root, adjacencyList, t, target, visited) {
    if(root === target) return t===0?1:0;
    if(root in visited || t <= 0) return 0;
    let adjElements = adjacencyList[root] || [];
    const len = adjElements.length;
    visited[root] = true;
    for(let i = 0; i < len; i++) {
        if(adjElements[i] in visited) continue;
        let prob = 1 / (len - 1);
        let localResult = (prob) * DFSTraversal(adjElements[i], adjacencyList, t - 1, target, visited);
        if(localResult != 0) {
            //console.log(localResult, root);
            return localResult;
        }
    }
    return 0;
}

function getAdjacencyList(edges) {
    let result = {};
    for(const [src, des] of edges) {
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

