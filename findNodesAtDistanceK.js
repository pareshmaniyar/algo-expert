// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNodesDistanceK(tree, target, k) {
    // Find the parent queue
    const isValid = getParentQueue(tree, target, [], []);
    if(!isValid) return [];
    const { parentQueue, directionQueue } = isValid;
    let result = [];
    let targetNode = parentQueue.pop();
    addNode(targetNode, k, result);
    k = k - 1;
    while(k > 0 && parentQueue.length > 0) {
        let parentNode = parentQueue.pop();
        let direction = directionQueue.pop();
        let childNode = parentNode[direction];
        addNode(childNode, k - 1, result);
        k--;
    }
    if(parentQueue.length > 0) {
        result.push(parentQueue.pop().value);
    }
    return result;
}
  
function getParentQueue(tree, target, parentQueue, directionQueue) {
    if(tree === null) return false;
    let newArray = [...parentQueue];
    let newDirection = [...directionQueue];
    newArray.push(tree);
    if(tree.value === target) {
        return { parentQueue: newArray, directionQueue: newDirection };
    }
    let left = getParentQueue(tree.left, target, newArray, [...directionQueue, 'right']);
    let right = getParentQueue(tree.right, target, newArray, [...directionQueue, 'left']);
    return left?left:right;
}

function addNode(node, distance, result) {
    if(node == null) return;
    if(distance === 0) {
        result.push(node.value);
        return;
    }
    addNode(node.left, distance - 1, result);
    addNode(node.right, distance - 1, result);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findNodesDistanceK = findNodesDistanceK;
