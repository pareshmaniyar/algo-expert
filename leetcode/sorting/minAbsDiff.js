/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    // sort
    arr.sort((a, b) => (a - b));
    let min = +Infinity, left = 0, right = 1;
    let result = [];
    while(right < arr.length) {
        if(left >= right) {
            right++;
        } else if(arr[right] - arr[left] < min) {
            result = [];
            result.push([arr[left], arr[right]]);
            min = arr[right] - arr[left];
            left++;
            right++;
        } else if(arr[right] - arr[left] === min) {
            result.push([arr[left], arr[right]]);
            left++;
            right++;
        } else {
            left++;
        }
    }
    return result;
};

