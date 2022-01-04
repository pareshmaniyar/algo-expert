/*



*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
/*

- put list into arr for easy acces


*/

var sortedListToBST = function(head) {
    let count = 0;
    let node = head;
    while(node) {
        count++;
        node = node.next;
    }
    return recurse(0, count - 1, { node: head });
};

function recurse(start, end, ref) {
    if(start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let left = recurse(start, mid - 1, ref);
    let newNode = new TreeNode(ref.node.val);
    newNode.left = left;
    ref.node = ref.node.next;
    let right = recurse(mid + 1, end, ref);
    newNode.right = right;
    return newNode;
}






/*



*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
/*

- put list into arr for easy acces


*/

var sortedListToBST = function(head) {
    const arr = [];
    let node = head;
    while(node) {
        arr.push(node.val);
        node = node.next;
    }
    return recurse(0, arr.length - 1, arr);
};

function recurse(start, end, arr) {
    if(start > end) return null;
    if(start === end) return new TreeNode(arr[start]);
    let mid = Math.floor((start + end) / 2);
    let newNode = new TreeNode(arr[mid]);
    newNode.left = recurse(start, mid - 1, arr);
    newNode.right = recurse(mid + 1, end, arr);
    return newNode;
}





