/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/*
              4
            /  \
           2     5
          / \   / \
         1   3 7   8
1,2,3,4,7,5,8
1-2-3-4-7-5-8
1,2,3,4,5


*/

/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    if(root === null) return root;
    const ref = { parent: null, left: null };
    inOrderTraversal(root, ref);
    let newHead = ref.left;
    newHead.left = ref.parent;
    ref.parent.right = newHead;
    return newHead;
};

/*

*/

function inOrderTraversal(root, ref) {
    if(root === null) return;
    inOrderTraversal(root.left, ref);
    callback(root, ref);
    inOrderTraversal(root.right, ref);
}

function callback(root, ref) {
    if(ref.parent === null) {
        ref.left = root;
    } else {
        ref.parent.right = root;
        root.left = ref.parent;
    }
    ref.parent = root;
}
