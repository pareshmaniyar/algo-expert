/*
{
1: [4,2,3],
2:[1,5,3],
3:[1,2,6],
4: [1],
5: [2],
6: [3]
}
1,2,3,4,5,6
WONT PASS ALL TEST CASES

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var minTrioDegree = function(n, edges) {
    const adjList = getAdjacencyList(n, edges);
    // console.log(adjList);
    const trio = {};
    findTrio(adjList, trio);
    if(Object.keys(trio).length === 0) return -1;
    let res = 0;
    for(const el of Object.keys(adjList)) {
        if(!(el in trio)) continue;
        const list = adjList[el];
        for(const adj of Object.keys(list)) {
            if(!(adj in trio)) res++;
        }
    }
    return res;
};

function findTrio(adjList, trio) {
    for(const first of Object.keys(adjList)) {
        const neighbours = adjList[first];
        for(const second of Object.keys(neighbours)) {
            let adj = adjList[second];
            // console.log(first, second, adj, neighbours);
            for(const third of Object.keys(neighbours) ) {
                if(third in adj) {
                    trio[first] = true;
                    trio[second] = true;
                    trio[third] = true;
                }
            }
        }
    }
}

function getAdjacencyList(n, edges) {
    let res = {};
    for(let i = 1; i <= n; i++) {
        res[i] = {};
    }
    for(const [src, des] of edges) {
        res[src][des] = true;
        res[des][src] = true;
    }
    return res;
}
