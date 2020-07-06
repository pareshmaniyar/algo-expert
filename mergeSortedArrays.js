class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array) {
      let i = parseInt((array.length - 2)/2);
          for(let j = i; j >= 0; j--) {
              this.siftDown(j, array);
          }
          console.log(array);
          return array
    }
  
    siftDown(index, heap) {
      let c1 = index * 2 + 1;
          let end = heap.length - 1;
          while(c1 <= end) {
              const c2 = index * 2 + 2 <= end?index * 2 + 2:-1;
              let swapIndex;
              if(c2 !== -1 && heap[c2].num < heap[c1].num){
                  swapIndex = c2;
              } else {
                  swapIndex = c1;
              }
              if(heap[swapIndex].num < heap[index].num) {
                  this.swap(index, swapIndex, heap);
                  index = swapIndex;
                  c1 = index * 2 + 1;
              } else {
                  return
              }
          }
    }
  
    siftUp(index) {
          let p = parseInt((index - 1)/2);
      while(index > 0 && this.heap[index].num < this.heap[p].num){
              this.swap(index, p, this.heap);
              index = p;
              p = parseInt((index - 1)/2);
           }
    }
  
    peek() {
          return this.heap[0];
    }
  
    remove() {
      this.swap(0, this.heap.length - 1, this.heap);
          let val = this.heap.pop();
          this.siftDown(0, this.heap);
          return val;
    }
  
    insert(value) {
          this.heap.push(value);
          this.siftUp(this.heap.length - 1);
    }
      swap(a, b, heap) {
          let temp = heap[a];
          heap[a] = heap[b];
          heap[b] = temp;
      }
      length(){
          return this.heap.length;
      }
  }
  function mergeSortedArrays(arrays) {
      let n = arrays.length;
      let res = [];
      let r = [];
      for(let i = 0; i < n; i++) {
          r.push({
              num: arrays[i][0],
              index: i,
              position: 0
          });
      }
      let heap = new MinHeap(r);
      while(heap.length() > 0) {
          let min = heap.remove();
          let { num, index, position } = min;
          res.push(num);
          if(position < arrays[index].length - 1) {
              heap.insert({
                  num: arrays[index][position + 1],
                  index,
                  position: position + 1
              });
          }
          console.log(res)
      }
      return res;
  }
  
  exports.mergeSortedArrays = mergeSortedArrays;
  