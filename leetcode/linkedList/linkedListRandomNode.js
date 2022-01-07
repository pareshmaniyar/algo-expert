/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    let node = head;
    let data = [];
    while(node) {
        data.push(node.val);
        node = node.next;
    }
    this.data = data;
    this.size = data.length;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    return this.data[Math.floor(Math.random() * this.size)];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */