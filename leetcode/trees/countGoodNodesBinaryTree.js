/*
             3
           /   \
          1     4
         /     / \
        3     1   5
s = [3,1,3]
m = []
s = []

*/

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
 * @return {number}
 */
 var goodNodes = function(root) {
    const count = { value : 0 };
    preOrderTraversal(root, [-Infinity], count);
    return count.value;
};

function preOrderTraversal(root, stack, count) {
    if(root === null) return;
    if(root.val >= stack[stack.length - 1]) {
        stack.push(root.val);
        count.value++;
    } else {
        stack.push(stack[stack.length - 1]);
    }
    preOrderTraversal(root.left, stack, count);
    preOrderTraversal(root.right, stack, count);
    stack.pop();
}

