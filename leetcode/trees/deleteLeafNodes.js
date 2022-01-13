
/*
     1
   2   3
    4

[[4,3,2,1], [4,2,3,1], [3,4,2,1]]

parentMap = {4:2, 2:1, 3:1, 1: null}
result = []
queue = {r: [], [4,3] }
[3]
4
temp = [2]

while(queue)


*/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.left = two;
one.right = three;
two.right = four;

function getWaysToDelete(root) {
    let [getParent, parentQueue, count] = generateParentRelation(root);
    let temp;
    while(count > 0) {
        temp = [];
        for(const [res, queue] of parentQueue) {
            // loop through queue: [4, 3]
            for(let i = 0; i < queue.length; i++) {
                let pop = queue[i];
                let newQueue = [...queue.slice(0, i + 1), ...queue.slice(i + 1)]
                let newRes = [...res, pop.val];
                let parent = store[pop.val];
                if(parent.right)
            }
        }
        parentQueue = temp;
        count--;
    }
}

function generateParentRelation(root) {
    const store = {};
    const queue = [];
    const countRef = { count : 0 };
    traverse(root, null, store, queue, countRef);
    return [store, [[], queue], countRef.count];
}

function traverse(root, parent, store, leafs, countRef) {
    if(!root) return;
    store[root.val] = parent;
    countRef.count++;
    if(root.left === null && root.right === null) {
        leafs.push(root);
        return;
    }
    traverse(root.left, root, store, leafs, countRef);
    traverse(root.right, root, store, leafs, countRef);
}

console.log(getWaysToDelete(one));

