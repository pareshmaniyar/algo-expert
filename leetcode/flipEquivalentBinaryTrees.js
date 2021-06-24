/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    return recursiveFlipComparison(root1, root2);
};

function recursiveFlipComparison(root1, root2) {
    if(root1 === null || root2 === null) {
        return root1 === null && root2 === null
    }
    if(root1.val != root2.val) return false;
    return (
        (recursiveFlipComparison(root1.left, root2.left) && recursiveFlipComparison(root1.right, root2.right))
        || (recursiveFlipComparison(root1.left, root2.right) && recursiveFlipComparison(root1.right, root2.left))
    );
}








