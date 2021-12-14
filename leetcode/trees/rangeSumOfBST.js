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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    const value = { sum: 0 };
    traverseBST(root);
    function traverseBST(root) {
        if(root === null) return;
        if(root.val >= low && root.val <= high)
            value.sum += root.val;
        if(root.val >= low)
            traverseBST(root.left);
        if(root.val <= high)
            traverseBST(root.right);
    }
    return value.sum
};
