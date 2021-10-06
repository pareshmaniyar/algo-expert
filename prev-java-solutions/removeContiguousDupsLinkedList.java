/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null) return head;
        ListNode res = head;ListNode prev = head;
        head = head.next;
        while(head != null){
            if(head.val == prev.val){
                prev.next = head.next;
                head = head.next;
            } else {
                head = head.next;
                prev = prev.next;
            }
        }
        return res;
    }
}
