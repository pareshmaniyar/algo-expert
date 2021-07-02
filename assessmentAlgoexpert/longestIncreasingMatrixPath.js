/*

- Depth First Search on each element to find inc seq
- Store the value in matrix of length and return if DFS called
- have a max count while looping to store len of max len found

[
	[15, 14],
	[12, 13]
]

*/

function longestIncreasingMatrixPath(matrix) {
    const rowLength = matrix.length;
      const colLength = matrix[0].length;
      const cache = Array(rowLength);
      const maxCount = { count: 0 };
      for(let i = 0; i < rowLength; i++) {
          cache[i] = Array(colLength).fill(-1);
      }
      for(let i = 0; i < rowLength; i++) {
          for(let j = 0; j < colLength; j++) {
              findSequenceForEachElement(i, j, matrix, cache, maxCount);
          }
      }
      return maxCount.count;
  }
  /*
  
  [
      [15, 15, 15],
      [15, 14, 15],
      [15, 15, 15]
  ]
  
  */
  
  function findSequenceForEachElement(i, j, matrix, cache, maxCount) {
      if(cache[i][j] != -1) return cache[i][j];
      const neighbours = getValidNeighbours(i, j, matrix);
      let incPath = 1;
      for(const [x, y] of neighbours) {
          if(matrix[x][y] > matrix[i][j]) {
              let len = findSequenceForEachElement(
                  x, y, matrix, cache, maxCount) + 1;
              incPath = Math.max(len, incPath);
          }
      }
      cache[i][j] = incPath;
      maxCount.count = Math.max(maxCount.count, incPath);
      return incPath;
  }
  
  function getValidNeighbours(i, j, matrix) {
      let result = [];
      let prospects = [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]];
      for(const [x, y] of prospects) {
          if(x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length) {
              result.push([x, y]);
          }
      }
      return result;
  }
  
  // Do not edit the line below.
  exports.longestIncreasingMatrixPath = longestIncreasingMatrixPath;
  