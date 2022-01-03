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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if(!root) return [];
    const result = [];
    const stack = [root];
    while(stack.length > 0) {
        const pop = stack.pop();
        result.push(pop.val);
        if(pop.right) {
            stack.push(pop.right);
        }
        if(pop.left) {
            stack.push(pop.left);
        }
    }
    return result;
};
