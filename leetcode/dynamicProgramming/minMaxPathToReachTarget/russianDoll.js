/**
 * @param {number[][]} envelopes
 * @return {number}
 */
 var maxEnvelopes = function(envelopes) {
    const length = envelopes.length;
    envelopes.sort((a, b) => {
        if(a[0] - b[0] === 0) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });
    const height = envelopes.map(a => a[1]);
    const dp = new Array(length);
    dp[0] = 0;
    let len = 0;
    for(let i = 1; i < length; i++) {
        if(height[dp[len]] < height[i]) {
            len++;
            dp[len] = i;
        } else {
            let lo = 0, hi = len, mid;
            while(lo < hi) {
                mid = Math.floor((lo + hi) / 2);
                if(height[dp[mid]] < height[i]) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            dp[hi] = i;
        }
    }
    return len + 1;
};
