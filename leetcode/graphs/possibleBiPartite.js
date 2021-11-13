/*


1:2,5
2:1,3
3:2,4
4:3,5
5:4,1
1-2
2
3-2
4-2
5-2

BELOW IS A TLE SOLUTION

*/
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

 class Node {
    constructor(val) {
        this.val = val;
        this.rank = 0;
        this.parent = this;
    }
}

function findSet(head) {
    // console.log(head);
    let node = head;
    while(node.parent !== node) {
        node = node.parent;
    }
    head.parent = node;
    return node;
}

function makeSet(val) {
    return new Node(val);
}

function union(set1, set2) {
    if(set1 === set2) return;
    if(set1.rank < set2.rank) {
        set1.parent = set2;
        set2.rank++;
    } else {
        set2.parent = set1;
        set1.rank++;
    }
}

var possibleBipartition = function(n, dislikes) {
    // - make set for n nodes - OT(n), OS(n)
    // makeSet(val), union(set1, set2), find(set)
    const node = {};
    
    // - make map of node to dislikes - O(m), OS(m)
    mapOfDislikes = {};
    for(const [i, j] of dislikes) {
        if(!(i in node)) {
            node[i] = makeSet(i);
        }
        if(!(j in node)) {
            node[j] = makeSet(j);
        }
        if(!(i in mapOfDislikes)) {
            mapOfDislikes[i] = [];
        }
        if(!(j in mapOfDislikes)) {
            mapOfDislikes[j] = [];
        }
        mapOfDislikes[i].push(j);
        mapOfDislikes[j].push(i);
    }
    
    // - union all dislikes - O(m)
    for(const people of Object.values(mapOfDislikes)) {
        for(let i = 1; i < people.length; i++) {
            union(node[people[0]], node[people[i]]);
        }
    }

    // - loop through dislikes and check if present in different set else return false - O(m)
    for(const [person1, person2] of dislikes) {
        const node1 = node[person1];
        const node2 = node[person2];
        if(findSet(node1) == findSet(node2)) return false;
    }
    return true;
};



