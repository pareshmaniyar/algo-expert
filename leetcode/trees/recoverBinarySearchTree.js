/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
1, 3, 2, 4
traverse tree inorder, check if value dec, store both the values,
traverse again, check if value 
*/
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

 var recoverTree = function(root) {
    let result = [];
    inOrderTraversal(root, { parent: null }, result);
    if(result.length === 1) {
        swap(result[0][0], result[0][1]);
    } else if(result.length === 2) {
        swap(result[0][1], result[1][0]);
    }
    return root;
};

function swap(n1, n2) {
    let temp = n1.val;
    n1.val = n2.val;
    n2.val = temp;
}

function inOrderTraversal(root, prevValue, result) {
    if(root === null) return;
    inOrderTraversal(root.left, prevValue, result);
    if(prevValue.parent !== null && root.val < prevValue.parent.val) {
        result.push([root, prevValue.parent]);
    }
    prevValue.parent = root;
    inOrderTraversal(root.right, prevValue, result);
}

