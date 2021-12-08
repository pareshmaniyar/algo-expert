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
 var findTilt = function(root) {
    const sum = { count: 0 };
    traverse(root, sum);
    return sum.count;
};

function traverse(root, sum) {
    if(root === null) return 0;
    const left = traverse(root.left, sum);
    const right = traverse(root.right, sum);
    let diff = left - right;
    if(diff < 0) {
        diff = diff * -1;
    }
    sum.count += diff;
    return left + right + root.val;
}




// FASTER CODE
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
 var findTilt = function(root) {
    return traverse(root)[1];
};

function traverse(root) {
    if(root === null) return [0, 0];
    const left = traverse(root.left);
    const right = traverse(root.right);
    let diff = left[0] - right[0];
    if(diff < 0) {
        diff = diff * -1;
    }
    return [left[0] + right[0] + root.val, diff + left[1] + right[1]];
}







