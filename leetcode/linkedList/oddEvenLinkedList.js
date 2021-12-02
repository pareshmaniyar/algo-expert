/*

- 1,2,3,4,5
- 1,3,5,2,4

BF:
- add odd in arr
- add even in arr
- build odd, even, append even to odd

head1
1,3,5
head2
2,4

odd: true
odd, even
- get each node
    - if odd append to odd
    - if even append to even
    - odd = !odd
append(node) {
    if(head) {
        new Node()
    }
}

*/
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

 var oddEvenList = function(head) {
    if(head === null || head.next === null) return head;
    let flag = true;
    let ref = { odd: null, even: null } ;
    let node = head, temp = null;
    while(node != null) { // 5
        temp = node.next; // null
        append(flag, node); // odd = 5 -> 3 -> 1
        node = temp;
        flag = !flag;
        // console.log(node, ref.odd, ref.even);
    }
    function append(flag, node) {
        let head = flag ? 'odd' : 'even';
        if(ref[head] == null) {
            ref[head] = node;
            node.next = null;
        } else {
            node.next = ref[head];
            ref[head] = node;
        }
    }
    ref.odd = reverse(ref.odd);
    ref.even = reverse(ref.even);
    const tail = getTail(ref.odd);
    tail.next = ref.even;
    // console.log(ref.odd, ref.even);
    return ref.odd;
    // print(ref.odd);
    // print(ref.even);
};
function getTail(node) {
    let tail = node;
    while(node != null) {
        tail = node;
        node = node.next;
    }
    return tail;
}
// rarendra moti - Saanvi
/*
1 -> 2 -> 3
p <- n    t
*/
function reverse(head) {
    let node = head.next;
    let prev = head;
    while(node != null) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    head.next = null;
    return prev;
}

function print(node) {
    while(node != null) {
        console.log(node.val);
        node = node.next;
    }
}







