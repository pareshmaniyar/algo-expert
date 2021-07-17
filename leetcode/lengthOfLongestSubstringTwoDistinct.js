/**
 * @param {string} s
 * @return {number}
 - Approach 1:
    - eceba
    - { b: 3, a: 4}
    - { e: 0, c: 1}
    - { e: 2, c: 1}
    - { e: 2, c: 1}
    - { e: 2, b: 3}
    - { a: 4, b: 3}
    - ecceeeb
    - if already in cache, update and inc count
    - if not
        - less than 2 elem
            - add
        - 2 element
            - remove value with lesser, add new value
    - Clean up code
    - 5 min extra
*/
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let cache = {};
    let start = 0, end = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char in cache) {
            cache[char] = i;
            end++;
        } else if(Object.keys(cache).length < 2) {
            cache[char] = i;
            end++;
        } else {
            let [firstChar, secondChar] = Object.keys(cache);
            let lowerChar = cache[firstChar] < cache[secondChar] ? firstChar : secondChar;
            start = cache[lowerChar] + 1;
            delete cache[lowerChar];
            cache[char] = i;
            end = i + 1;
        }
        max = Math.max(max, end - start);
    }
    return max;
};

