/*
[[2,1,1],[2,3,1],[3,4,1]]
parsing
1: []
2: [1, 3]
3: [4]
4: []

n = 4, k = 2
visited = {};
dist = [1, 0, 2, 1]
stack = []

*/
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    const adjList = getAdjList(times);
    const dist = Array(n + 1).fill(+Infinity);
    let stack = [k];
    dist[k] = 0;
    let aux = [];
    while(stack.length != 0) {
        while(stack.length != 0) {
            const el = stack.pop();
            const neighbours = adjList[el] || [];
            for(const neighbour of neighbours) {
                if(dist[el] + neighbour.time < dist[neighbour.node]) {
                    aux.push(neighbour.node);
                    dist[neighbour.node] = dist[el] + neighbour.time;
                }
            }
        }
        stack = aux;
        aux = [];
    }
    let max = -Infinity;
    for(let i = 1; i <= n; i++) {
        if(dist[i] == +Infinity) return -1;
        max = Math.max(max, dist[i]);
    }
    return max;
};
function getAdjList(times) {
    const result = {};
    for(const [u, v, time] of times) {
        if(!(u in result)) {
            result[u] = [];
        }
        result[u].push({ node: v, time });
    }
    //console.log(result);
    return result;
}