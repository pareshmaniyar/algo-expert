/*
  [4, 5, 2]
  HEAPS in javascript is not thr
- [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
- [1, 4, 5, 2]
- [1, 2, 4, 5]

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

time - arr.length * log k
Space - k

- [100, 101, 99]

- brute force
  - sort - nlogn
- Approach 2:

sift up, sift down

*/

// Are there any other ways to do this problem?
// hahaha!!!!

function sortKMessedArray(arr, k) {
    const heapInit = [];
    const len = arr.length;
    for(let i = 0; i < k + 1 && i < len; i++) {
      heapInit.push(arr[i]);
    }
    const heap = new MinHeap(heapInit);
    for(let i = 0; i < arr.length; i++) {
      arr[i] = heap.remove();
      if(i + k + 1 < len) {
        heap.insert(arr[i + k + 1]);
      }
    }
    return arr;
  }
  
  class MinHeap {
      constructor(array) {
          this.heap = this.buildHeap(array);
      }
      
      peek() {
          return this.heap[0];
      }
      
      buildHeap(array) {
          const len = array.length;
          const lastParent = Math.floor((len - 1)/ 2);
          for(let i = lastParent; i >= 0; i--) {
              this.siftDown(i, len, array);
          }
          return array;
      }
      
      getValidValue(i, array) {
          if(i < 0 || i >= array.length) return null;
          return array[i];
      }
      
      siftDown(startIdx, endIdx, array) {
          if(startIdx * 2 + 1 > endIdx) return;
          let firstChild = this.getValidValue(startIdx * 2 + 1, array);
          let secondChild = this.getValidValue(startIdx * 2 + 2, array);
          if(firstChild === null) return;
          if(secondChild === null || startIdx * 2 + 2 > endIdx) {
              secondChild = +Infinity;
          }
          const indexToSwap = firstChild < secondChild ? startIdx * 2 + 1: startIdx * 2 + 2;
          if(array[indexToSwap] < array[startIdx]) {
              this.swap(startIdx, indexToSwap, array);
              this.siftDown(indexToSwap, endIdx, array);
          }
      }
      
      swap(index1, index2, array) {
          let temp = array[index1];
          array[index1] = array[index2];
          array[index2] = temp;
      }
      
      siftUp(currentIdx, heap) {
          let parentIdx = Math.floor((currentIdx - 1) / 2);
          while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
              this.swap(currentIdx, parentIdx, heap);
              currentIdx = parentIdx;
              parentIdx = Math.floor((currentIdx - 1) / 2);
          }
      }
      
      remove() {
          const len = this.heap.length;
          this.swap(0, len - 1, this.heap);
          const removedItem = this.heap.pop();
          this.siftDown(0, len - 1, this.heap);
          return removedItem;
      }
      
      insert(value) {
          this.heap.push(value);
          this.siftUp(this.heap.length - 1, this.heap);
      }
  }
  
  