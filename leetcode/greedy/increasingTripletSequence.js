/*

[1,2,3,4,5]

[0,0,1,0,1,2]
Time - O(n ^ 2)
[2,1,5,0,4,6]
[5,4,2,3,1, 4]

s1 1
s2 3
s3 4

- loop
    - if(num < s1)
        - s1 = num
        - break
    - if(num < s2)
        - s2 = num
        - break
    - if(num < s3)
        - s3 = num
        - break
- if s1,s2,s3 != inf return true
    
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    let s1 = +Infinity, s2 = +Infinity, s3 = +Infinity;
    for(const num of nums) {
        if(num <= s1) {
            s1 = num;
            continue;
        }
        if(num <= s2) {
            s2 = num;
            continue;
        }
        if(num <= s3) {
            s3 = num;
            continue;
        }
    }
    if(s1 !== +Infinity && s2 !== +Infinity && s3 != +Infinity) return true;
    return false;
};


