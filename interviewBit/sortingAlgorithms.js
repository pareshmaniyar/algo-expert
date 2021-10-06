/**
 * Sorting
 * 
 * Selection sort
 */

/** Selection sort:
  Decription: If there is an array of integer and needs to be sorted in ascending order
  Approach: Two loops, outer loop for each position in array, second to find the element for that position
  At any point in the procees, there are two parts of the array, one sorted and the other to be sorted
  We get the least value of the second part of array and place in the left most position
  Time complexity: O(n^2)
  Worst: O(n^2)
  Average: O(n^2)
  Best: O(n^2)
  Space complexity: O(1)
*/

a = [1,11,4,0,9,95,34,22,19];
for(let i = 0; i < l; i++){
  for(let j = i;j < l;j++){
    if(a[i]>a[j]){
      let t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
  }
}
console.log(a);

/** 
  Bubble sort
  Decription: If there is an array of integer and needs to be sorted in ascending order
  Approach: Start from start to end, compare i and i + 1, swap if arr[i+1] < arr[i]. Do for n-1 times
  To improve best case time complexity, add a check for a swap and then stop if it isn't changed
*/
let a = [1,11,4,0,9,95,34,22,19];
let l = a.length;
for(let i = 0; i < l - 1; i++){
  for(let j = 0; j < l - 1; j++){
    if(a[j] > a[j + 1]){
      let t = a[j];
      a[j] = a[j+1];
      a[j+1] = t;
    }
  }
}
console.log(a);

// Merge sort
a = [1,11,4,0,9,95,34,22,19];
function printArray(s,arr,l){
  let subArray = [];
  for(let i = s; i<=l; i++){
    subArray.push(arr[i]);
  }
  console.log(subArray);
}
function mergeSort(s,arr,l){
  if(s<l){
    //print the array from s to l both inclusive
    printArray(s,arr,l);
    //S1: find the mid
    let h = parseInt((l + s) / 2);
    console.log('from ',s ,' to', s + h);
    //S2: Call merge sort for first half
    mergeSort(s,arr,h);
    console.log('from ',h + 1 ,' to', l);
    //S3: Call merge sort for second half
    mergeSort(h + 1,arr,l);
    //S4: merge two arrays
    merge(s, h, arr, l);
    printArray(s,arr,l);
  }
}
function merge(s, h, arr, l){
  let arr1, arr2;
  arr1 = arr.slice(s,h+1);
  arr2 = arr.slice(h+1,l+1);
  let i = 0;j = 0;
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      arr[s+i] = arr1[i];
      i++
    } else {
      arr[s+i] = arr2[j];
      j++
    }
  }
}

mergeSort(0,a,a.length - 1);
