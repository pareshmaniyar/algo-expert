
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
 * @return {TreeNode}
 */
/*

ITERATIVE, FASTER
*/

var convertBST = function(root) {
    if(!root) return root;
    let stack = [root], visited = {};
    let res = 0;
    while(stack.length != 0) {
        const peek = stack[stack.length - 1];
        if(peek.right && !(peek.val in visited)) {
            stack.push(peek.right);
            visited[peek.val] = true;
            continue;
        }
        res += peek.val;
        peek.val = res;
        stack.pop();
        if(peek.left) {
            stack.push(peek.left);
        }
    }
    return root;
};





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
 * @return {TreeNode}
 */
/*

traverse, res
    - right
    - res = res + val
    - left

*/

var convertBST = function(root) {
    traverse(root, { res: 0 });
    return root;
};

function traverse(node, ref) {
    if(!node) return;
    traverse(node.right, ref);
    ref.res += node.val;
    node.val = ref.res;
    traverse(node.left, ref);
}