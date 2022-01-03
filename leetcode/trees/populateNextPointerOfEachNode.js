/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let node = root, leftChild, rightChild, child, ext;
    while(node) {
        let left = node;
        while(left) {
            leftChild = left.left;
            rightChild = left.right;
            // internal
            if(leftChild && rightChild) {
                leftChild.next = rightChild;
            }
            child = rightChild || leftChild;
            if(!child) {
                left = left.next;
                continue;
            }
            //external
            left = left.next;
            while(left) {
                ext = left.left || left.right;
                if(ext) {
                    child.next = ext;
                    break;
                }
                left = left.next;
            }
        }
        // next level
        while(node) {
            let next = node.left || node.right;
            if(next) {
                node = next;
                break;
            }
            node = node.next;
        }
    }
    return root;
};