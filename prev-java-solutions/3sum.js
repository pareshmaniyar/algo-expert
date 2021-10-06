/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //First solution - Brute Force
    //3 loops
    //if sum is zero, add to the main array
    let res = [];
    let finalResult = [];
    let nums = nums.sort();//nlogn
    for(let i = 0; i < nums.length; i++){
        let results = returnUniquePair(nums.slice(i + 1), nums[i]);
        results.map(arr => {
            res = [nums[i]];
            res.push(...arr);
            finalResult.push(res);
        });
    }
    function returnUniquePair(arr, num) {
        let finalResult = [];
        let res = [];
        let map = {};
        arr.forEach(item => {
            let comp = (num - item) + '';
            if(map.hasOwnProperty(comp)) {
                if(map[comp] === true) {
                    res.push(item);
                    res.push(comp);
                    finalResult.push(res);
                    map[comp] = false;
                }
            } else {
                map[item] = true;
            }
        })
    }
    function binarySearch(num, start, end) { //logn
        if(num == nums[start]) {
            return start;
        }
        if(num == nums[end]) {
            return end;
        }
        if(start >= end) {
            return -1;
        }
        let mid = Math.floor(start + (start + end) / 2);
        if(num == nums[mid]) {
            return mid;
        }
        if(num > nums[mid]) {
            return binarySearch(num, mid + 1, end);
        } else {
            return binarySearch(num, start, mid - 1);
        }
    }
    function isUnique(res) {
        for(let i = 0; i < finalResult.length; i++) {
            if(finalResult[i].sort().join() == res.sort().join()) {
                return false;
            }
        }
        return true;
    }
    return finalResult;
};
