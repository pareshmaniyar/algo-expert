/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        int i1 = l1!= null ? l1.val: Integer.MAX_VALUE;
        int i2 = l2!= null ? l2.val: Integer.MAX_VALUE;
        int res = i1 < i2? i1: i2;
        if(l1 == null && l2 == null){
            return l1;
        }
        if(i1 < i2){
            if(l1 != null)
                l1 = l1.next;
        } else {
            if(l2 != null)
                l2 = l2.next;
        }
        ListNode head = new ListNode(res);
        ListNode ref = head;
        while(l1 != null || l2 != null){
            i1 = l1 != null ? l1.val: Integer.MAX_VALUE;
            i2 = l2 != null ? l2.val: Integer.MAX_VALUE;
            res = i1 < i2? i1: i2;
            ListNode temp = new ListNode(res);
            ref.next = temp;
            ref = temp;
            if(i1 < i2){
                if(l1 != null)
                    l1 = l1.next;
            } else {
                if(l2 != null)
                    l2 = l2.next;
            }
        }
        return head;
    }
}
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        ListNode head;
        if(l1.val < l2.val){
            head = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            head = new ListNode(l2.val);
            l2 = l2.next;
        }
        ListNode ref = head;
        while(l1 != null || l2 != null){
            if(l1 == null){
                ref.next = l2;
                return head;
            }
            if(l2 == null){
                ref.next = l1;
                return head;
            }
            ListNode temp = new ListNode(l1.val);
            if(l1.val < l2.val){
                l1 = l1.next;
            } else {
                temp.val = l2.val;
                l2 = l2.next;
            }
            ref.next = temp;
            ref = temp;
        }
        return head;
    }
}
