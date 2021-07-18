/*
dog frog
1 og 2 og - 3

Approach 1:
recusrion(st1, end1, st2, end2, str1, str2, 0, cache) {
cache[st1-end1$st2-end2] = minCount

recusrion(str1, str2, 0, cache) {
dog == frog
minCount
- loop
  - r(og, frog, 1)
  - r(dg, frog, 1)
  - r(do, frog, 1)
- loop
  - r(dog, rog)
  - r(dog, fog)
  - r(dog, frg)
  - r(dog, fro)
cache[`${str1}-${str2}`] = minCount;
return minCount;
   "" d o g
""  0 1 2 3
f   1 2 3 4
r   2 3 4 5
o   3 4 3 4
g   4 5 4 3
- edge case

}
time - O(len1 * len2)
space - O(len1 * len2)

*/

function deletionDistance(str1, str2) {
    const len1 = str1.length, len2 = str2.length;
    const matrix = new Array(len1 + 1).fill(0);
    for(let i = 0; i < len1 + 1; i++) {
      matrix[i] = new Array(len2 + 1).fill(0);
    }
    // initialization
    for(let i = 0; i < len1 + 1; i++) {
      matrix[i][0] = 0;
    }
    for(let i = 0; i < len2 + 1; i++) {
      matrix[0][i] = 0;
    }
    for(let i = 1; i < len1 + 1; i++) {
      for(let j = 1; j < len2 + 1; j++) {
        if(str1[i - 1] === str2[j - 1]) {
          matrix[i][j] =1+ matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
        }
      }
    }
    let result = (len1 + len2 ) - (2 * matrix[len1][len2]);
    return result;
  }
  