/*
Child-Parent
3: null
5: 3, 1: 3
6: 5, 2: 5
7: 2, 4: 2
0: 1, 8: 1
T&S - O(n)
Function to print node at k level - BFS - queue
T&S - O(n)

- Main function
    - while k != 0
        - k levels doun target
        - reduce k
        - k.parent, go to other node and print k
T-O(n), S-O(1)
Overall - T&S - O(n)

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

 var distanceK = function(root, target, k) {
    const rootToTarget = [];
    getChildToParentRelation(root, null, target, rootToTarget);
    let result = [];
    storeAtLevelK(target, k, result);
    let node = target;
    while(rootToTarget.length > 0) {
        k--;
        let parent = rootToTarget.pop();
        if(k === 0) {
            result.push(parent.val);
            break;
        }
        if(parent.right === node) {
            storeAtLevelK(parent.left, k - 1, result);
        } else {
            storeAtLevelK(parent.right, k - 1, result);
        }
        node = parent;
    }
    return result;
};

function storeAtLevelK(root, k, result) {
    if(root === null) return;
    if(k === 0) {
        result.push(root.val);
        return;
    }
    storeAtLevelK(root.left, k - 1, result);
    storeAtLevelK(root.right, k - 1, result);
}

function getChildToParentRelation(root, parent, target, rootToTarget) {
    if(root === null) return false;
    if(root === target) return true;
    rootToTarget.push(root);
    let left = getChildToParentRelation(root.left, parent, target, rootToTarget);
    if(left) return true;
    let right = getChildToParentRelation(root.right, parent, target, rootToTarget);
    if(right) return true;
    rootToTarget.pop();
    return false;
}



