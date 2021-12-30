/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    const hlen = haystack.length, nlen = needle.length
    if(hlen === 0 || nlen === 0) {
        if(needle.length > 0) return -1;
        return 0;
    }
    const prefix = new Array(nlen).fill(0);
    let i = 0, j = 1;
    while(j < nlen) {
        if(needle[i] === needle[j]) {
            prefix[j] = i + 1;
            i++;
            j++;
        } else {
            if(i === 0) {
                j++;
            } else {
                i = prefix[i - 1];
            }
        }
    }
    // console.log(prefix);
    i = 0;
    j = 0;
    while(i < hlen && j < nlen) {
        if(haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            if(j === 0) {
                i++;
            } else {
                j = prefix[j - 1];
            }
        }
    }
    return j === nlen ? (i - nlen): -1;
};