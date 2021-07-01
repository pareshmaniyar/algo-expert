// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  /*
  - Brute force
      - head, get kth/end node, next
      - reverse the list from head to kth/end list
      - head.next = next
      - return store kth value
      
      - next = head
      - head, get kth/end node, next
      - reverse the list from head to kth/end list
      - head.next = next
      - previous head.next = kth Node;
      
  */
  
  function reverseAlternatingKNodes(head, k) {
      let kthNode = getKthNode(head, k);
      let next = kthNode.next;
      reverseLinkedList(head, kthNode);
      head.next = next;
      let answer = kthNode;
      let reverse = false;
      printNodes(answer);
      let previousHead = head;
      while(next != null) {
          head = next;
          let kthNode = getKthNode(head, k);
          next = kthNode.next;
          if(reverse) {
              reverseLinkedList(head, kthNode);
              head.next = next;
              previousHead.next = kthNode;
              previousHead = head;
          } else {
              previousHead = kthNode;
          }
          reverse = !reverse;
      }
      return answer;
  }
  
  function printNodes(node) {
      let string = "";
      while(node != null) {
          string += `${node.value} -> `;
          node = node.next;
      }
      console.log(string);
  }
  
  function reverseLinkedList(start, end) {
      let prevNode = null;
      while(start != end) {
          let temp = start.next;
          start.next = prevNode;
          prevNode = start;
          start = temp;
      }
      if(start != null) {
          start.next = prevNode;
      }
      return prevNode;
  }
  // null <- 1 <- 2p -> nulles
  
  function getKthNode(head, k) {
      let count = 1;
      while(head.next != null && count < k) {
          head = head.next;
          count++;
      }
      return head;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.reverseAlternatingKNodes = reverseAlternatingKNodes;
  