/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
                 1
               /   \
              4     3
             / \
            5   6
           / \   \
          3   2   -20
         /       /  \
        1       4   10
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let result = {max: -Infinity};
    traverseTree(root, result);
    return result.max;
};

function traverseTree(root, result) {
    if(root === null) return 0;
    const left = traverseTree(root.left, result);
    const right = traverseTree(root.right, result);
    const sumThroughRoot = Math.max(
        left + right + root.val,
        left + root.val,
        right + root.val,
        root.val
    );
    if(sumThroughRoot > result.max) {
        result.max = sumThroughRoot;
    }
    return Math.max(
        left + root.val,
        right + root.val,
        root.val
    );
}

