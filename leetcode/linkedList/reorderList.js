/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 var reorderList = function(head) {
    if(head.next === null) return head;
    let fast = head;
    let slow = head;
    let last = null;
    while(fast !== null && fast.next != null) {
        fast = fast.next.next;
        last = slow;
        slow = slow.next;
    }
    last.next = null;
    // console.log(head, slow);
    let prev = null;
    while(slow != null) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    // console.log(head, prev);
    let node = head;
    while(node != null) {
        let next = node.next;
        node.next = prev;
        last = node;
        node = next;
        let buff = prev.next;
        prev.next = next;
        prev = buff;
    }
    if(last.next != null) {
        last = last.next;
    }
    last.next = prev;
    // console.log(head, last, prev);
    return head;
};

