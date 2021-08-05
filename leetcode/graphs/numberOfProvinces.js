/**
 * @param {number[][]} isConnected
 * @return {number}
 */
/*
- disjoint sets & path compression
- each set of each point
- traverse matrix and union
- loop through to find unique parent
WONT PASS ALL TEST CASES, SOME ISSUE WITH SELF MADE UNION
findSet
union
makeSet
[
[1,1,0],
[1,1,0],
[0,0,1]
]
[
[1,0,0,1],
[0,1,1,0],
[0,1,1,1],
[1,0,1,1]
]
0  1
 /\
2--3
0-0
1-1
2-1
3-0
*/

class Node {
    constructor(data) {
        this.data = data;
        this.rank = 0;
        this.parent = this;
    }
}

function findSet(node) {
    let parent = node.parent;
    if(parent == node) {
        return parent;
    }
    parent = findSet(parent);
    return parent;
}

function makeSet(node1, node2) {
    const parent1 = findSet(node1);
    const parent2 = findSet(node2);
    if(parent1 === parent2) return;
    if(parent1.rank >= parent2.rank) {
        parent2.parent = parent1;
        if(parent1.rank === parent2.rank) parent1.rank++;
    } else {
        node1.parent = node2;
    }
}

var findCircleNum = function(isConnected) {
    let sets = {};
    const len = isConnected.length;
    for(let i = 0; i < len; i++) {
        sets[i] = new Node(i);
    }
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if(!isConnected[i][j]) continue;
            makeSet(sets[i], sets[j]);
            // console.log(i, findSet(sets[i]).data, j, findSet(sets[j]).data);
        }
    }
    let uniqueSet = {};
    for(let i = 0; i < len; i++) {
        const parent = findSet(sets[i]);
        //console.log(i, parent.data);
        if(!(parent.data in uniqueSet)) {
            uniqueSet[parent.data] = 0;
        }
        uniqueSet[parent.data]++;
    }
    return Object.keys(uniqueSet).length;
};


