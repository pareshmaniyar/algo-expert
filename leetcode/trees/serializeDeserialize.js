/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    const arr = [];
    traverse(root, arr);
    return arr.join(',');
};

// [1, 2, null, null, 3, 4, null, null, 5, null, null]
function traverse(root, res) {
    if(!root) {
        res.push('null');
        return;
    }
    res.push(root.val);
    traverse(root.left, res);
    traverse(root.right, res);
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let parse = data.split(',');
    const ref = { index: 0 };
    const node = buildTree(ref, parse);
    return node;
};

function buildTree(ref, arr) {
    if(arr[ref.index] === 'null') {
        ref.index++;
        return null;
    }
    const node = new TreeNode(parseInt(arr[ref.index]));
    ref.index++;
    node.left = buildTree(ref, arr);
    node.right = buildTree(ref, arr);
    return node;
}
/*

1, 2, null, null, 3, 4, null, null, 5, null, null
            1
          2   3
             4  5

*/


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */