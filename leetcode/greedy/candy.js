/*
0,1,2,3,4,3,2,1,0
1,2,3,4,5,4,3,2,1
T - O(n)
S - O(n)

*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let store = Array(ratings.length).fill(1);
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            store[i] = Math.max(store[i], store[i - 1] + 1);
        }
    }
    for(let i = ratings.length - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            store[i] = Math.max(store[i], store[i + 1] + 1);
        }
    }
    return store.reduce((accum, el) => accum + el);
};
