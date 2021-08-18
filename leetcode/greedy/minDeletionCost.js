/*

aaabbbcc
ceabaacb

a:3
b:2
c:2
d:2
e:1


a: 2
b: 2
c: 2

7: [a, b, c]
6
5
4: [d, e, f]

*/

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let freq = {}, data = {};
    for(let i = 0; i < s.length; i++) {
        const el = s[i];
        if(!(el in data)) {
            data[el] = 0;
        }
        data[el]++;
    }
    for(let [key, val] of Object.entries(data)) {
        if(!(val in freq)) {
            freq[val] = [];
        }
        freq[val].push(key);
    }
    let count = 0;
    for(let i = s.length; i > 0; i--) {
        if(!(i in freq)) continue;
        while(freq[i].length !== 1) {
            // console.log(freq)
            const el = freq[i].pop();
            let offset = i;
            while(offset != 0 && (offset in freq)) {
                count++;
                offset--;
                //console.log(freq)
            }
            freq[offset] = [el];
            //console.log(freq)
        }
    }
    return count;
};





