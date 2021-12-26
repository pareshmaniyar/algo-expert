/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 let distance = ([x,y]) => Math.sqrt(x**2 + y**2);


 var kClosest = function(points, k) {
     
 };
 // Here is the heap
 
 class MaxHeap {
     constructor() {
         this.heap = [null];
         this.size = 0;
     }
     
     pop() {
        if(this.size === 0) return null; 
         this.size--;
         this.swap(1, this.heap.length - 1);
         let res = this.heap.pop();
         this.siftDown();
         return res;
     }
     
     add(point) {
         this.size++;
         this.heap.push(point);
         this.siftUp();
     }
     
     swap(i, j) {
         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
     }
     
     peek() {
         if(this.size === 0) return null; 
         return this.heap[1];
     }
     
     siftUp() {
         let c = this.heap.length - 1;
         let p = Math.floor(c / 2);
         while (p > 0 && distance(this.heap[c]) > distance(this.heap[p]) ) {
             this.swap(p, c);
             let temp = p;
             c = p;
             p = Math.floor(temp / 2);
         }
     }
     
     siftDown() {
         let p = 1;
         let c1 = 2*p;
         let c2 = c1 + 1;
         while(c1 < this.heap.length) {
             let swap;
             if(c2 >= this.heap.length) {
                 swap = c1;
             } else {
                 swap = distance(this.heap[c1]) > distance(this.heap[c2]) ? c1 : c2;
             }
             if(distance(this.heap[swap]) > distance(this.heap[p])) {
                this.swap(swap, p);
                 let temp = p;
                 p = swap;
                 c1 = 2*p;
                 c2 = c1+1;
             } else {
                 return;
             }
         }
     }
     
     toArray() {
        return [...this.heap.slice(1)] ;
     }
 }