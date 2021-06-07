function kadanesAlgorithm(array) {
    let maxSum = -Infinity;
      let localSum = -Infinity;
      array.forEach((num) => {
          localSum = Math.max(num, num + localSum);
          maxSum = Math.max(localSum, maxSum);
      });
      return maxSum;
  }
  
  // Do not edit the line below.
  exports.kadanesAlgorithm = kadanesAlgorithm;
  