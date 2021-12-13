/*

         1
        / \
       2   5
      / \   \
     3   4   6


///////////////////////////
pre-order

2 - 1 - 2
3 - 2 - 3
    3 - 

- makeLinkedList | 1 | 2 | 3
    - root null return
    - temp = root.right | 5 | 4 | null
    - root.right
        - root.left
        - node = root.right, while node == null
            - node = node.parent && node.left == node.parent
        - node
    - makeLinkedList(root.left) | 2 | 3
    - makeLinkedList(root.right)




///////////////////////////
3 - 2 - 4 - 1 - 5 - 6
temp = 5
1 - n
2 - 4
3 - 2

flatten tree(root, parent, stack)
- if root null return
- temp = root.right
- root.right
    if root.right === null ? parent : leftmost(root.right); while loop until parent exists on left side
- tree(root.left, root)
- tree(temp, root)

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    let prev = null;
    makeLinkedList(root);
    function makeLinkedList(root) {
        if(root === null) return;
        makeLinkedList(root.right);
        makeLinkedList(root.left);
        root.right = prev;
        root.left = null;
        prev = root;
    }
    return root;
};




