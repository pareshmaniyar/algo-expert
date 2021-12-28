/**
 * @param {number[][]} cuboids
 * @return {number}
 */
/*



*/

var maxHeight = function(cuboids) {
    cuboids.forEach(cuboid => cuboid.sort((a, b) => (a - b)));
    cuboids.sort(([w1, l1, h1], [w2, l2, h2]) => {
        if(w1 - w2 != 0) {
            return w1 - w2;
        } else {
            if(l1 - l2 != 0) {
                return l1 - l2;
            } else {
                return h1 - h2;
            }
        }
    });
    const length = cuboids.length;
    const dp = new Array(length);
    const val = new Array(length).fill(0);
    for(let i = 0; i < length; i++) {
        dp[i] = cuboids[i][2];
        for(let j = 0; j < i; j++) {
            if(canBePlaced(i, j, cuboids)) {
                dp[i] = Math.max(dp[i], cuboids[i][2] + dp[j]);
            }
        }
    }
    return dp.reduce((accum, el) => Math.max(accum, el));
};

function canBePlaced(i, j, cuboids) {
    if(cuboids[i][0] >= cuboids[j][0]
       && cuboids[i][1] >= cuboids[j][1]
       && cuboids[i][2] >= cuboids[j][2]) {
        return true;
    }
    return false;
}
