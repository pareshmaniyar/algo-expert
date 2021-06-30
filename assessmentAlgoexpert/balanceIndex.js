function balanceIndex(array) {
    let left = 0;
      let right = array.reduce((accum, item) => accum + item);
      right = right - array[0];
      for(let i = 0; i < array.length; i++) {
          if(left === right) return i;
          left += array[i];
          right -= array[i + 1] || 0;
      }
      return -1;
  }
  // [1, 2, 9, 3, 0]
  //  0, 1, 3, 12,15
  // 14,12, 3, 0, 0
  exports.balanceIndex = balanceIndex;
  