/*
nlogn - if used binary search and binary index tree
here - O(n ^ 2) cuz used normal insertion
compare k then h


*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

var reconstructQueue = function(people) {
    people.sort(([h1, k1], [h2, k2]) => {
        if(h1 > h2) {
            return 1;
        } else if(h1 < h2) {
            return -1;
        } else {
            if(k1 > k2) {
                return -1;
            } else {
                return 1;
            }
        }
    });
    //console.log(people);
    let head = null;
    for(let i = people.length - 1; i >= 0; i--) {
        head = insertAtK(head, people[i]);
        //print(head);
        //console.log("*******************");
    }
    function print(head){
        while(head != null) {
            console.log(head.value);
            head = head.next;
        }
    }
    function insertAtK(head, [h, k]) {
        if(head === null) {
            head = new Node([h, k]);
            return head;
        }
        let node = head;
        if(k === 0) {
            node = new Node([h, k]);
            node.next = head;
            return node;
        }
        for(let i = 0; i < k - 1; i++) {
            node = node.next;
        }
        let temp = node.next;
        node.next = new Node([h, k]);
        node.next.next = temp;
        return head;
    }
    const result = [];
    while(head != null){
        result.push(head.value);
        head = head.next;
    }
    return result;
};
