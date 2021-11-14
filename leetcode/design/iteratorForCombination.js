/*
- dcab
- sort = abcd
- arr = []

Test cases
@#$%^&*
1234567
""
abcd, 2
abc, abd
abcdefg, 3

1. Storing all the results and move the pointer
abc, abd, abe, abf
O(n!/(len!(n-len)!))

2. generate on the fly using pointers/something

abcdef, 3
0,1,2
0,1,3
0,1,4
0,1,5
0,2,3
0,2,4
0,2,5
0,3,4
0,3,5
0,4,5
1,2,3
3,4,5

n = 4
[2,3,4,5]
[0,1,2,3]
[0,1,2,4]
[0,1,2,5]
[0,1,3,4]
[0,1,3,5]
[0,1,4,5]
[0,2,4,6]
- last digit
	- inc if possible, change later digits
	- inc previous digit

str, index, len, target
"", -1, 0, 3
for -1+1 to n
	- "a", 0, 1, 3
	for 1 to n
		- ab, 1, 2, 3
		for 2 to n
		- abc, 2,3,3
		- abd,2,3,3
		- abe
	


*/


/**
 * @param {string} characters
 * @param {number} combinationLength
 */
 var CombinationIterator = function(characters, combinationLength) {
    this.str = characters;
    const arr = Array(combinationLength).fill(0);
    const max = Array(combinationLength).fill(0);
    max[0] = arr.length - combinationLength;
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + 1;
    max[i] = max[i - 1] + 1;
    }
    arr[arr.length - 1] -= 1;
    this.arr = arr;
    this.max = max;
    this.end = false;
    };
    
    /**
     * @return {string}
     */
    CombinationIterator.prototype.next = function() {
    increment(this.arr.length - 1, this.arr, this.max);
        return build(this.str, this.arr);
    };
    increment(index, arr, max) {
        if(arr[index] + 1 > max) {
            increment(index - 1, arr, max);
        } else {
            arr[index]
        }
    }
    /**
     * @return {boolean}
     */
    CombinationIterator.prototype.hasNext = function() {
        
    };
    
    /** 
     * Your CombinationIterator object will be instantiated and called as such:
     * var obj = new CombinationIterator(characters, combinationLength)
     * var param_1 = obj.next()
     * var param_2 = obj.hasNext()
     */
    