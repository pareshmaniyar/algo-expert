/*
                          i                        
[1, 10, 2, 8, 3, 6, 0, 0, 0]
                 |
pt = 0
- loop through array i++
  - arr[i], pt
  - replace arr[i] and pt
  - if(arr[i] != 0) pt++
T - O(n)
S - O(1)

https://www.interviewcake.com/table-of-contents

1 med, 1 hard - any

1. DP - recursion, backtracking
2. Trees - BST, trie
3. Graphs
4. Stack & queues
5. ....

*/

function moveZerosToEnd(arr) {
    //init
    const len = arr.length; let pt = 0;
      // loop
    for(let i = 0; i < len; i++) {
      swap(i, pt, arr);
      if(arr[pt] !== 0) {
        pt = pt + 1;
      }
    }
    return arr;
  }
  /*
                   i
  [1, 10, 2, 3, 0, 0, 8, 0, 6]
                |
  */
  function swap(pt1, pt2, arr) {
    const temp = arr[pt1];
    arr[pt1] = arr[pt2];
    arr[pt2] = temp;
  }
  console.log(moveZerosToEnd([0,1,2,3]));
  