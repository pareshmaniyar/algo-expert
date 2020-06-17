function apartmentHunting(blocks, reqs) {
    let reqsLength = reqs.length;
      let blocksLength = blocks.length;
      let space = [];
      for(let i = 0; i < reqsLength; i++) {
          let arr = [];
          for(let j = 0; j < blocksLength; j++) {
              let count = null;
              console.log(blocks[j][reqs[i]]);
              if(blocks[j][reqs[i]] == true){
                  arr.push(0);
                  let k = j - 1; count = 1;
                  while(k >= 0 && arr[k] > count && arr[k] != 0){
                      arr[k] = count;
                      count = count + 1;
                      k = k - 1;
                  }
              } else {
                  arr.push(Number.MAX_VALUE);
              }
          }
          console.log(arr);
          space.push(arr);
      }
      for(let i = 0; i < reqsLength; i++) {
          for(let j = 0; j < blocksLength; j++) {
              if(space[i][j] == 0){
                  let k = j + 1;let count = 1;
                  while(k < blocksLength && space[i][k] > count && space[i][k] != 0) {
                      space[i][k] = count;
                      count = count + 1;
                      k = k + 1;
                  }
              }
          }
      }
      let min = Number.MAX_VALUE;
      for(let i = 0; i < blocksLength; i++) {
          let sum = 0
          for(let j = 0; j < reqsLength; j++) {
              sum = sum + space[j][i];
          }
          if(sum < min) {
              min = sum;
          }
      }
      return min;
  }
  
  // Do not edit the line below.
  exports.apartmentHunting = apartmentHunting;
  