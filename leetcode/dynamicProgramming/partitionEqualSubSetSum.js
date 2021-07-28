/**
 * @param {number[]} nums
 * @return {boolean}
 - find the sum is total (sum / 2)
 - 1,5,11,5
 - 11
 - 0 1 2 3 4 5 6 7 8 9 10 11
 0 T F F F F F F F F F  F  F 
 1 T T F F F F .............
 5 T T F F F T T F..........
11 T T F F F T T F . . . . T
 5 T T F F F T T F F F  T  T
 - if(sum > weight) matrix[i][j] = matrix[i - 1][j]
 - else matrix[i][j] = matrix[i - 1][j - weight]
 
 - prev = [T, FF...]
   current = [FFFFF]
   - loop 0 to nums.length + 1 = i
     - loop 0 to sum + 1 - j
       if(sum > nums[i]) current[j] = prev[j]
       else current[j] = prev[j - nums[i]]
   
 */

       var canPartition = function(nums) {
        const len = nums.length;
        const sum = nums.reduce((a, b) => a + b);
        if(sum % 2 !== 0) return false;
        const target = sum / 2;
        let prev = Array(target + 1).fill(false);
        prev[0] = true;
        let current = Array(target + 1).fill(false);
        for(let i = 0; i < len; i++) {
            for(let j = 1; j < target + 1; j++) {
                let weight = nums[i - 1];
                current[j] = prev[j];
                if(weight <= j) {
                    current[j] = current[j] || prev[j - weight];
                }
            }
            prev = current;
            prev[0] = true;
            current = Array(target + 1).fill(false);
        }
        return prev[target];
       
    };