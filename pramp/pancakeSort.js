/*
- Approach 1:
- [1, 5, 4, 3, 2]
- index 5 = 1
  - [5, 1, 4, 3, 2]
  - [2, 3, 4, 1, 5]
- sort = 1
  - index 4 = 2
  - [4, 3, 2, 1, 5]
  - [1, 2, 3, 4, 5]

https://www.linkedin.com/in/pareshmaniyar/

- sort = 0;
- sorted + 1, pick the largest element's index
- flip twice
  - index + 1
  - len - sort
overall time - O(n ^ 2), space - O(n)

- Flip
- [4, 5, 1, 3, 2]
- [4, 5, 1]
time - O(n), space- O(1)

*/

// space - O(1), time - O(n)
function flip(arr, k) {
    for(let i = 0; i < Math.floor(k / 2); i++) {
      let temp = arr[i];
      arr[i] = arr[k - i - 1];
      arr[k - i - 1] = temp;
    }
  }
  
  // time - O(n), space- O(1)
  function pancakeSort(arr) {  
    let len = arr.length;
    if(len === 0) return arr;
    for(let i = 0; i < len; i++) {
      let idxLargeElem = getLargestNumber(arr, len - i - 1);
      flip(arr, idxLargeElem + 1);
      flip(arr, len - i);
    }
    return arr;
  }
  
  function getLargestNumber(arr, end) {
    let largestElem = arr[0];
    let index = 0;
    for(let i = 0; i <= end; i++) {
      if(arr[i] > largestElem) {
        arr[i] = largestElem;
        index = i;
      }
    }
    return index;
  }
  
  
  
  