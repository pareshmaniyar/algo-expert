/**
 * @param {number[]} time
 * @return {number}
 */
/*

cache - O(n), O(n)
pointer - O(nlogn), O(1)

0, 1, 2, 3.... 59
30,30,30
30,20,150,100,40
30 - 2 -> 1
20 - 1 -> 2
40 - 2

*/

var numPairsDivisibleBy60 = function(time) {
    const len = time.length;
    const arr = new Array(60).fill(0);
    let count = 0;
    for(const val of time) {
        count += arr[(60 - val % 60) % 60];
        arr[val % 60]++;
    }
    return count;
};
