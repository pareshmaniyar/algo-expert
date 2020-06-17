function maxSumIncreasingSubsequence(array) {
    let n = array.length;
      let sums = [];
      let max = -Infinity;let maxIndex = 0;
      for(let i = 0; i < n; i++) {
          sums.push(array[i]);
          if(max < array[i]) {
              max = array[i];
              maxIndex = i;
          }
      }
      let seq = Array(n).fill(null);
      for(let i = 1; i < n; i++) {
          for(let j = 0; j < i; j++) {
              if(array[i] > array[j]) {
                  console.log(i, "sums", j, sums[j], sums[i]);
                  if(sums[j] + array[i] > sums[i]) {
                      console.log(i, "aaa", j);
                      sums[i] = sums[j] + array[i];
                      seq[i] = j;
                      if(sums[i] > max) {
                          max = sums[i];
                          maxIndex = i;
                      }
                  }
              }
          }
          console.log(i, sums);
      }
      let result = [];
      while(maxIndex != null) {
          result.push(array[maxIndex]);
          maxIndex = seq[maxIndex];
      }
      return [max, result.reverse()];
  }
  
  exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;