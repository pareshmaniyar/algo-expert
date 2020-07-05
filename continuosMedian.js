// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class Heap {
	constructor(method) {
		this.heap = [];
		this.length = 0;
		this.method = method;
	}
	insert(number) {
		this.heap.push(number);
		this.length += 1;
		let currentIndex = this.length - 1;
		let parentIndex = Math.floor((currentIndex - 1) / 2);
		while(currentIndex > 0) {
			if(this.method(this.heap[currentIndex], this.heap[parentIndex])) {
				this.swap(currentIndex, parentIndex);
				currentIndex = parentIndex;
				parentIndex = Math.floor((currentIndex - 1)/ 2);
			} else {
				return;
			}
		}
	}
	siftDown(index) {
		let i1 = 2 * index + 1;
		let i2 = 2 * index + 2;
		if(i1 < this.length && i2 < this.length) {
			if(this.method(this.heap[i1], this.heap[i2]) && this.method(this.heap[i1], this.heap[index])) {
				this.swap(index, i1);
				this.siftDown(i1);
			} else if(this.method(this.heap[i2], this.heap[index])) {
				this.swap(index, i2);
				this.siftDown(i2);
			}
		} else if(i1 < this.length && this.method(this.heap[i1], this.heap[index])) {
			this.swap(index, i1);
			this.siftDown(i1);
		}
	}
	remove() {
		this.swap(0, this.length - 1);
		let removed = this.heap.pop();
		this.length -= 1;
		this.siftDown(0);
		return removed;
	}
	peek() {
		return this.heap[0];
	}
	swap(a, b) {
		let temp = this.heap[a];
		this.heap[a] = this.heap[b];
		this.heap[b] = temp;
	}
}
function max(a, b) {
	return a > b;
}
function min(a, b) {
	return a < b;
}
class ContinuousMedianHandler {
  constructor() {
		this.maxHeap = new Heap(max);
    this.minHeap = new Heap(min);
    this.median = null;
  }
	
  insert(number) {
    //insert one of them
		if(this.maxHeap.peek() < number) {
			this.minHeap.insert(number);
		} else {
			this.maxHeap.insert(number);
		}
		//balance
		if(this.minHeap.length - this.maxHeap.length === 2) {
			this.maxHeap.insert(this.minHeap.remove());
		} else if(this.maxHeap.length - this.minHeap.length === 2) {
			this.minHeap.insert(this.maxHeap.remove());
		}
		//update median
		if(this.minHeap.length > this.maxHeap.length) {
			this.median = this.minHeap.peek();
		} else if(this.minHeap.length < this.maxHeap.length) {
			this.median = this.maxHeap.peek();
		} else {
			this.median = ( this.minHeap.peek() + this.maxHeap.peek() ) / 2;
		}
  }

  getMedian() {
    return this.median;
  }
}

// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
