
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
    if(root === null) return root;
    let pre = root, curr = null;
    while(pre.left) {
        curr = pre;
        while(curr) {
            curr.left.next = curr.right;
            if(curr.next) curr.right.next = curr.next.left;
            curr = curr.next;
        }
        pre = pre.left;
    }
    return root;
};




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
    if(!root) return root;
    let queue = [root];
    let temp = [], pop;
    while(queue.length != 0) {
        while(queue.length != 0) {
            pop = queue[0];
            queue = queue.slice(1);
            if(queue.length != 0) {
                pop.next = queue[0];
            }
            if(pop.left != null) {
                temp.push(pop.left);
            }
            if(pop.right != null) {
                temp.push(pop.right);
            }
        }
        queue = temp;
        temp = [];
    }
    return root;
};


