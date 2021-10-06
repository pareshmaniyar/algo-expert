/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        //loop the bigger linkedList - not possible
        //Keep adding and if greater than 9, carry
        int carry = 0;
        int initialSetup = l1.val + l2.val;
        if(initialSetup > 9){
            initialSetup = initialSetup - 10;
            carry = 1;
        }
        l1 = l1.next;l2 = l2.next;
        ListNode head = new ListNode(initialSetup);
        ListNode res = head;
        while(l1 != null || l2 != null){
            int sum = 0;
            if(l1 != null)
                sum = sum + l1.val;
            if(l2 != null)        
                sum = sum + l2.val;
            sum = sum + carry;
            if(sum > 9){
                ListNode newNode = new ListNode(sum - 10);
                res.next = newNode;
                res = res.next;
                carry = 1;
            } else {
                ListNode newNode = new ListNode(sum);
                res.next = newNode;
                res = res.next;
                carry = 0;
            }
            if(l1 != null){
                l1 = l1.next;
            }
            if(l2 != null){
                l2 = l2.next;
            }
        }
        if(carry == 1){
            ListNode newNode = new ListNode(1);
            res.next = newNode;
        }
        return head;
    }
}