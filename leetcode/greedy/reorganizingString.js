/*

aab
aaabc - abaca
aaabbc - abacab
aaab, pppba
lililill
i i i i
i - 4
l - 6
cpcpcpcbcbcbcc
aab
len = 3, 2
vvvlo
vlvov
WON'T WORK

*/

/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
    const len = s.length;
    const data = {};let max = 0;
    for(const char of s) {
        if(!(char in data)) {
            data[char] = 0;
        }
        data[char] += 1;
        max = Math.max(max, data[char]);
    }
    if(max > len - max + 1) return "";
    const accum = [];
    while(Object.keys(data).length != 0) {
        for(const char of Object.keys(data)) {
            accum.push(char);
            data[char]--;
            if(data[char] === 0) {
                delete data[char];
            }
        }
    }
    return accum.join('');
};

