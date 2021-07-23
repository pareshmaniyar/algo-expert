/**
 * @param {string} s
 * @return {string[][]}
 aabaa
 a a b a a a
 a aba a a
 a aba aa
 aa b a a a
 aa b aa a
 aa b a aa
 aa b aaa
 aabaa a
 aab
 a ab
 ab - [a, b]
 a, a, b
 aa, b
 
 - Approach 1:
    - loop from i = start = 0 to n - 1
    - cache[start]
    - base - length == 1 return ["a"], length === 0, return []
    - result = [];
    - if start to i is palindrome
        - let rightArray = recurse(i + 1, n - 1);
        - push start to i string, ...rightArray in result
    - cache result;
    a - 1, aa - 2, aaa - 4, aaaa - 1 * n + 2 * n - 1
 - Time - O(n ^ 2)
 - Space - O(n ^ 2)
 
 */

 var partition = function(s) {
    return recursivePartitioning(s, {});
};
// aab
function recursivePartitioning(s, cache) {
    const sLen = s.length;
    if(sLen === 0) return [];
    if(sLen === 1) return [[s]];
    if(s in cache) return cache[s];
    const result = [];
    for(let i = 1; i <= sLen; i++) {
        let baseString = s.substring(0, i);
        if(isPalindrome(baseString)) {
            let rightArray = recursivePartitioning(s.substring(i), cache);
            let left = [];
            left.push(baseString);
            if(rightArray.length === 0) {
                result.push(left);
                continue;
            }
            for(let j = 0; j < rightArray.length; j++) {
                let localResult = left.concat(rightArray[j]);
                result.push(localResult);
            }
        }
    }
    cache[s] = result;
    return result;
}

function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}
