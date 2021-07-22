/*
- brute force - WRONG QUESTION READING
  - find where there is a drop
  - index + 1
Time - O(n)
[9, 12, 17, 2, 4, 5], 2
return index = 3;
[2, 4, 5, 9, 12, 17] - DONT ASSUME, GO INTO DETAILS
- log(n)
- there is an offset
- if have shift
  - search on them

- get offset - binary - log(n) - RECURSION DON'T MISS ESCAPE CONDITION
  - offset
  - element before larger
- search both the array - log(n) - RIGHT OR LEFT
[9, 12, 15, 16, 17, 2, 6, 7]
16
9 16 7
[17, 2, 6, 7, 9, 12, 15, 16]
7
17 7 16
[9, 12, 15, 16, 17, 2, 6, 7]

*/

function shiftedArrSearch(shiftArr, num) {
    const len = shiftArr.length;
    if(len === 0) return -1;
    let offset = len;
    if(shiftArr[0] > shiftArr[len - 1]) {
       offset = getOffsetIndex(shiftArr, 0, len - 1);
    }
    let left = binarySearch(shiftArr, 0, offset - 1, num);
    if(left != - 1) return left;
    return binarySearch(shiftArr, offset, len - 1, num);
  }
  
  function binarySearch(arr, start, end, num) {
    while(start <= end) {
      let mid = Math.floor((start + end) / 2);
      if(arr[mid] === num) return mid;
      if(arr[mid] < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  let res = shiftedArrSearch([9, 12, 17, 2, 4, 5], 2);
  // ASK INTERVIEWER BEFORE CHANGING ANYTHING, KEEP HIM INFORMED
  function getOffsetIndex(arr, start, end) {
    while(start <= end) {
      let mid = Math.floor((start + end ) / 2);
      let prev = arr[mid - 1] || -Infinity;
      let next = arr[mid + 1] || +Infinity;
      if(arr[mid] < prev && arr[mid] < next) return mid;
      if(arr[0] < arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  