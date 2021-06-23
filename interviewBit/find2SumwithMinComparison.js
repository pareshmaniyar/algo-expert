const solve = function(A){
    const len = A.length;
    const { max, min } = getLowMax(A, 0, len - 1);
    return max + min;
}
0, 5
const getLowMax = function(A, i, j) {
    if(j < i) return {
        max: -Infinity,
        min: +Infinity
    }
    if(i === j) {
        return {
            max: A[i],
            min: A[i]
        }
    }
    const mid = i + parseInt( (j - i) / 2 );
    const { max: leftMax, min: leftMin } = getLowMax(A, i, mid);
    const { max: rightMax, min: rightMin } = getLowMax(A, mid + 1, j);
    return {
        max: Math.max(leftMax, rightMax),
        min: Math.min(leftMin, rightMin)
    }
};
let result = solve([-1, 2, 3, -4, 6]);
console.log(result);
