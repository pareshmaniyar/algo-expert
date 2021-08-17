/*
[
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
]
- brute force
    - pointers [3, 3, 2]
    - [1, 1, 2]
n linked list, m - maxLen
m * log n
- min heap
    - add all the first elements with index value
n + m * log n
[1-0, 1-1, 2-2]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 var mergeKLists = function(lists) {
    const len = lists.length;
    const heap = new MinHeap();
    if(len === 0) return null;
    for(const list of lists) {
        heap.insert(list);
    }
    const node, head = null;
    /*
    1 -> 5
    2 -> 3
    []
    1, 2, 3
    */
    while(!heap.isEmpty()) {
        const currNode = heap.extract();
        const next = currNode.next;
        if(next !== null) {
            heap.insert(next);
        }
        if(head === null) {
            head = currNode;
            node = currNode;
        } else {
            node.next = currNode;
            node = currNode;
        }
    }
    return head;
};





