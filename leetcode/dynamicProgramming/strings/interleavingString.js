/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 - base check
 - s1len + s2len != s3len return false
 - s1 = "aabcc"
   s2 = "dbbca"
   s3 = "aadbbcbcac"
 - ptr1, ptr2
 - recursion
    - base - ptr1 === s1len && ptr2 == s2len return true
    - if(both equal)
        - inc ptr1, ptr2
    - cache
        - aabd aabc aa
 - Time - O(m * n) aaaa aaaaa m,n, k = min(m, n)
          aa aaa
          0  0
      1  0    0  1
  2, 0  1, 1   1, 1  0, 2
  3,0|2,1|2,1|1,2||2,1|1,2|1,2|0,3
  - Space - O(m * n)

 */

  var isInterleave = function(s1, s2, s3) {
    if(s3.length != s1.length + s2.length) return false;
    return findIfInterLeave(0, 0, 0, s1, s2, s3, {});
};

function findIfInterLeave(pt1, pt2, pt3, s1, s2, s3, cache) {
    if(pt3 === s3.length) return true;
    const combination = `${pt1}-${pt2}`;
    if(combination in cache) return false;
    // not found
    const char = s3[pt3];
    const char1 = s1[pt1] || "";
    const char2 = s2[pt2] || null;
    if(char1 !== char && char2 !== char) return false;
    // if unequal and found
    if(char1 != char2) {
        if(char1 === char) {
            cache[combination] = findIfInterLeave(pt1 + 1, pt2, pt3 + 1, s1, s2, s3, cache);
        } else {
            cache[combination] = findIfInterLeave(pt1, pt2 + 1, pt3 + 1, s1, s2, s3, cache);
        }
        return cache[combination];
    }
    // if equal
    cache[combination] = findIfInterLeave(pt1 + 1, pt2, pt3 + 1, s1, s2, s3, cache);
    if(cache[combination]) return true;
    cache[combination] = findIfInterLeave(pt1, pt2 + 1, pt3 + 1, s1, s2, s3, cache);
    return cache[combination];
}
