function levenshteinDistance(str1, str2) {
    let len1 = str1.length;
      let len2 = str2.length;
      let arr = [];
      let subArray = [];
      for(let i = 0; i < len2 + 1; i++) {
          subArray = [];
          for(let j = 0; j < len1 + 1; j++) {
              subArray.push(j);
          }
          arr.push(subArray);
          arr[i][0] = i;
      }
      for(let i = 1; i < len2 + 1; i++) {
          for(let j = 1; j < len1 + 1; j++) {
              if(str1.charAt(j - 1) === str2.charAt(i - 1)) {
                  arr[i][j] = arr[i - 1][j - 1];
              } else {
                  arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + 1);
              }
          }
      }
      return arr[len2][len1];
  }
  
  // Do not edit the line below.
  exports.levenshteinDistance = levenshteinDistance;
  
  function levenshteinDistance(str1, str2) {
    let len1 = str1.length;
      let len2 = str2.length;
      if(len1 == 0 || len2 == 0) return Math.max(len1, len2);
      let big = len1>=len2?str1:str2;
      let small = len1<len2?str1:str2;
      let prev = [];
      let current = [];
      for(let i = 0; i < small.length + 1; i++) {
          prev.push(i);
          current.push(i);
      }
      current[0] = 1;
      console.log(big, small)
      for(let i = 1; i < big.length + 1; i++) {
          for(let j = 1; j < small.length + 1; j++) {
              if(small.charAt(j - 1) === big.charAt(i - 1)) {
                  current[j] = prev[j - 1];
              } else {
                  current[j] = Math.min(prev[j] + 1, current[j - 1] + 1, prev[j - 1] + 1);
              }
          }
          console.log(i, "prev: ", prev);
          console.log(i, "current: ", current);
          prev = current;
          current = [];
          current.length = small.length;
          current.fill(i + 1);
      }
      return prev[small.length];
  }
  
  // Do not edit the line below.
  exports.levenshteinDistance = levenshteinDistance;
  