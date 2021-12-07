/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let i = 0;
    let result = 0;
    while(head != null) {
        result *= 2;
        result += head.val;
        head = head.next;
        i++;
    }
    return result;
};