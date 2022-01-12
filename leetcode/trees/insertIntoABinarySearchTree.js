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
 * @param {number} val
 * @return {TreeNode}
 */
/*

traverse root, parent
    root null check {
    if val > parent.val {
        parent.right = new Node(val);
    else
        parent.left = new Node(val);
    }
    return
    }
    if(root.val > val) {
        traverse root.left, root
    }
    traverse root.right, root
*/

var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val);
    traverse(root, null, val);
    return root;
};

function traverse(root, parent, val) {
    if(!root) {
        if(parent.val > val) {
            parent.left = new TreeNode(val);
        } else {
            parent.right = new TreeNode(val);
        }
        return;
    }
    if(root.val > val) {
        traverse(root.left, root, val);
    } else {
        traverse(root.right, root, val);
    }
}

