/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 baaaaaaaaaab
 123321123112
 baaab
 11231
 
 */
 var minCost = function(s, cost) {
    let sum = 0;
    let pt = 0;
    while(pt < s.length - 1) {
        let char = s[pt];
        let right = pt + 1;
        let max = cost[pt];
        let localSum = cost[pt];
        while(right < s.length && s[right] === char) {
            localSum += cost[right];
            max = Math.max(max, cost[right]);
            right++;
        }
        //console.log(pt, right, sum, localSum, max);
        right--;
        if(right === pt) {
            pt++;
            continue;
        }
        sum += localSum - max;
        pt = right + 1;
    }
    return sum;
};