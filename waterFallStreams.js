function waterfallStreams(array, source) {
    const yMax = array[0].length;
      const xMax = array.length;
      let result = Array(yMax).fill(0);
      moveDown(0, source, 1);
      function moveDown(x, y, intensity) {
          if(x + 1 === array.length - 1) {
              result[y] = result[y] + intensity;
              return;
          }
          if(array[x + 1][y]) {
              moveLeft(x, y, intensity / 2);
              moveRight(x, y, intensity / 2);
              return;
          }
          moveDown(x + 1, y, intensity);
      }
      
      function moveLeft(x, y, intensity) {
          if(y - 1 < 0 || array[x][y - 1]) {
              return;
          }
          if(!array[x + 1][y - 1]) {
              moveDown(x + 1, y - 1, intensity);
              return;
          }
          moveLeft(x, y - 1, intensity);
      }
      function moveRight(x, y, intensity) {
          if(y + 1 >= yMax || array[x][y + 1]) {
              return;
          }
          if(!array[x + 1][y + 1]) {
              moveDown(x + 1, y + 1, intensity);
              return;
          }
          moveRight(x, y + 1, intensity);
      }
      return result.map(decimal => decimal * 100);
  }
  
  // Do not edit the line below.
  exports.waterfallStreams = waterfallStreams;
  
  
  
  
  
  