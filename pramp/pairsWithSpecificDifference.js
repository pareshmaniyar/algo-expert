function findPairsWithGivenDifference(arr, k) {
    const data = {};
    for(let i = 0; i < arr.length; i++) {
       data[arr[i]] = i;
    }
    const result = [];
    for(let i = 0; i < arr.length; i++) {
      let value = arr[i];
      let complimentaryValue = k + value;
      if(complimentaryValue in data) {
        result.push([complimentaryValue, value]);
      }
    }
    return result;
  }
  
  let result = findPairsWithGivenDifference([0, -1, -2, 2, 1], 0);
  console.log(result);