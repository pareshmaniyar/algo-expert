/*
- num[i] - num[j] LCS > 1 then connected
    - find LCF
    - 10,5 - pick lowest n and check from 1 to n is divisible by both
- make adjList in n^2 * max(arr num)
- undirected
- 20,000
- 1,00,000
[n1, n2, n3, n4, n5]
factors: {
    2: [4],
    4: [4]
}
- n * max(arr)
- make nodes for all - n
- add to children
- dfs to find number of node with cache
Can we done easilt with union find
Below soln, incorrect, need modification
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 class Node {
    constructor(val, index) {
        this.val = val;
        this.index = index;
        this.children = [];
    }
}

var largestComponentSize = function(nums) {
    const factors = {}, nodes = {};
    for(let i = 0; i < nums.length; i++) {
        getFactors(nums[i], i, factors, nodes);
    }
    for(const values of Object.values(factors)) {
        for(let i = 0; i < values.length; i++) {
            for(let j = i + 1; j < values.length; j++) {
                connect(values[i], values[j]);
            }
        }
    }
    let maxDepth = 0;
    const cache = {};
    for(const node of Object.values(nodes)) {
        maxDepth = Math.max(maxDepth, dfs(node, cache, nodes));
    }
    return maxDepth;
};

function dfs(node, cache, nodes) {
    if(node === null) return 0;
    if(node.val in cache) return cache[node.val];
    let max = 0;
    for(const adj of node.children) {
        max = Math.max(max, dfs(adj, cache, nodes));
    }
    return cache[node.val] = max + 1;
}

function connect(node1, node2) {
    node1.children.push(node2.val);
    node2.children.push(node1.val);
}

function getFactors(num, index, factors, nodes) {
    const node = new Node(num, index);
    nodes[num] = node;
    for(let prospect = 2; prospect <= num; prospect++) {
        if(num % prospect !== 0) continue;
        if(!(prospect in factors)) {
            factors[prospect] = [];
        }
        factors[prospect].push(node);
    }
}



