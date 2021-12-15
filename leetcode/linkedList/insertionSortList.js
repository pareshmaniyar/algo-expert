/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*

prev = head
curr = head.next

prevNew = head
new = head
count = 1

- while curr != null
    - remove curr using prev, curr
        - temp = curr.next
        - prev = curr
        - prev.next = curr.next
        - curr.next = null
    - insert in new using new, curr, count
        - node = new
        - count times
            - if curr.val < node
                - if prevNew is null
                    - prevNew = curr
                    - curr.next = node
                - prevNew.next = curr
                - curr.next = node
                - break
    - curr = temp
    - prev = curr

AMAZING! I DID IT WITHOUT ANY LEFTOVER EDGE CASES!!!!! IT PASSED ALL THE TEST CASES!
IT WAS QUITE COMPLICATED!
*/
var insertionSortList = function(head) {
    if(head === null) return;
    let prev = head, curr = head.next;
    let prevNew = null, newHead = head, count = 1;
    let temp, node, inserted;
    while(curr != null) {
        // remove curr
        temp = curr.next;
        prev.next = curr.next;
        curr.next = null;
        
        // insert curr
        node = newHead;
        prevNew = null;
        inserted = false;
        for(let i = 0; i < count; i++) {
            if(node.val < curr.val) {
                prevNew = node;
                node = node.next;
                continue;
            }
            inserted = true;
            if(prevNew === null) {
                curr.next = node;
                newHead = curr;
                continue;
            }
            prevNew.next = curr;
            curr.next = node;
            break;
        }
        if(!inserted) {
            curr.next = prevNew.next;
            prevNew.next = curr;
            prev = curr;
        }
        // set variables
        count++;
        curr = temp;
    }
    return newHead;
};

