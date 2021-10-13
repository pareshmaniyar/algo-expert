/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

 var bstFromPreorder = function(preorder) {
    let index = { i: 0 };
    return recurse(index, preorder, -Infinity, +Infinity);
};

function recurse(index, preorder, min, max) {
    if(index.i === preorder.length || preorder[index.i] > max || preorder[index.i] < min) {
        return null
    }
    const node = new TreeNode(preorder[index.i++]);
    node.left = recurse(index, preorder, min, node.val);
    node.right = recurse(index, preorder, node.val, max);
    return node;
}

