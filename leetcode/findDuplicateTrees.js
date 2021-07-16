



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 - Appraoch 1:
    - 2 trees
    - n * n comparisons
        - compare trees
 - catch: won't compare if ref is same
BELOW WON"T WORK!!!!!
*/

var findDuplicateSubtrees = function(root) {
    const allNodes = [];
    InOrderTraversal(root, allNodes);
    const result = [];
    const cache = {};
    for(let i = 0; i < allNodes.length; i++) {
        for(let j = i + 1; j < allNodes.length; j++) {
            if(allNodes[i] in cache) continue;
            if(compareTrees(allNodes[i], allNodes[j])) {
                cache[allNodes[i]] = true;
                result.push(allNodes[i]);
            }
        }
    }
    return result;
};

function compareTrees(root1, root2) {
    if(root1 === null) {
        return (root2 === null);
    }
    if(root2 === null) return false;
    if(root1.value !== root2.value) return false;
    return compareTrees(root1.left, root2.left) && compareTrees(root1.right, root2.right);
}

function InOrderTraversal(root, result) {
    if(root === null) return;
    InOrderTraversal(root.left, result);
    result.push(root);
    InOrderTraversal(root.right, result);
}
