/**
 * @param {number[][]} envelopes
 * @return {number}
 - [[5,4],[6,4],[6,7],[2,3]]
 - [[2, 3], [5, 4], [6, 4], [6, 7]] - nlogn
 - [     1,      2,      2,      3]
 
 */

 var maxEnvelopes = function(envelopes) {
    let maxCount = 0;
    const len = envelopes.length;
    envelopes.sort((a, b) => (a[0] - b[0]));
    let closet = new Array(len).fill(0);
    for(let i = 1; i < len; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(canRussianDoll(envelopes[j], envelopes[i])) {
                closet[i] = Math.max(closet[i], 1 + closet[j]);
                maxCount = Math.max(maxCount, closet[i])
            }
        }
    }
    return maxCount + 1;
};

function canRussianDoll(envelope1, envelope2) {
    return envelope1[0] < envelope2[0] && envelope1[1] < envelope2[1];
}
