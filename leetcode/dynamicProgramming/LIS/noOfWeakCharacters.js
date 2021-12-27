/**
 * @param {number[][]} properties
 * @return {number}
 */
/*

[[1, 2], [2, 4], [2, 3], [2, 10], [4, 7], [4, 5]]

n ^ 2
each with each

nlogn
sort
All of them, no shortcut - 1000, 1 1000, 1

2,4,3,10,7,5


*/

var numberOfWeakCharacters = function(prop) {
    const length = prop.length;
    prop.sort((a, b) => {
        if(a[0] - b[0] === 0) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });
    let max = -Infinity, ans = 0;
    for(let i = length - 1; i >= 0; i--) {
        const el = prop[i][1];
        if(max > el) {
            ans++;
        }
        if(max < el) {
            max = el;
        }
    }
    return ans;
};

