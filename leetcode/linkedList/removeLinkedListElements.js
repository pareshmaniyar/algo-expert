/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/*

1. only one head is val
2. all nodes are val
3. normal case

*/
var removeElements = function(head, val) {
    if(head === null) {
        return head
    }
    while(head && head.val === val) {
        head = head.next;
    }
    let node = head;
    let prev = null;
    while(node != null) {
        if(node.val == val) {
            prev.next = node.next;
            node = node.next;
            continue;
        }
        prev = node;
        node = node.next;
    }
    return head;
};