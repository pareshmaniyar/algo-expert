/*
bcabc - abc
cbacdcbc - acdb
cbad, bacd, badc
cadb
acdb, adcb, adbc
Brute Force:
- find distinct characters
- find all permutations and see if that subsequence is present
    - recursion
    - LCS

  b a  b
b b 
a   ba
b      ab

   b  c  a  b  c
b  b
c     bc
a        bca
b           bca
c              abc

b c a b c
          bca
        /     \
      bca     cab
     /   \    /  \
   bca  bac  cab  abc

Time - O(2 ^ n)
Space - O(2 ^ n * n)
b: [0]
c: [1, 4]
a: [2]

abc
bac


cbacdcbc
c: [0,3,5,7]
b: [1,6]
a: [2]
d: [4]

adbc
0457

Stack
cbacdcbc

b
d
c
a

***************************
- keep the last occurances of each character
- stack
- loop
    - pop if bigger and index after that exists

*/

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    const lastOccurances = {};
    let char;
    for(let i = 0; i < s.length; i++) {
        char = s[i];
        if(!(char in lastOccurances)) {
            lastOccurances[char] = i;
        }
        if(lastOccurances[char] < i) {
            lastOccurances[char] = i;
        }
    }
    const stack = [], checked = {};
    for(let i = 0; i < s.length; i++) {
        char = s[i];
        if(checked[char]) continue;
        while(stack.length > 0
              && char < stack[stack.length - 1]
              && lastOccurances[stack[stack.length - 1]] > i ) {
            const popped = stack.pop();
            checked[popped] = false;
        }
        stack.push(char);
        checked[char] = true;
    }
    return stack.join('');
};



