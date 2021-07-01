/*
- brute force
	- take first row as prospect
	- loop through all the rows
		- remove if not present in prospect
		- return [] if prospect empty
	- loop cols
		- REMOVE prospect
Space - O(min(row, col))
Time - O(row * col)

*/
function repeatedMatrixValues(matrix) {
    let prospect = matrix.reduce(
          (accum, row) => {
              accum[row[0]] = true;
              return accum;
          }, {}
      );
      for(let j = 0; j < matrix.length; j++) {
          for(let i = 0; i < matrix[0].length; i++) {
              if(matrix[j][i] in prospect) {
                  prospect[matrix[j][i]] = false;
              }
          }
          for(const key of Object.keys(prospect)) {
              if(prospect[key]) {
                  delete prospect[key];
              }
          }
          for(const key of Object.keys(prospect)) {
              prospect[key] = true;
          }
          if(Object.keys(prospect).length === 0) return [];
      }
      for(let j = 0; j < matrix[0].length; j++) {
          for(let i = 0; i < matrix.length; i++) {
              if(matrix[i][j] in prospect) {
                  prospect[matrix[i][j]] = false;
              }
          }
          for(const key of Object.keys(prospect)) {
              if(prospect[key]) {
                  delete prospect[key];
              }
          }
          for(const key of Object.keys(prospect)) {
              prospect[key] = true;
          }
          if(Object.keys(prospect).length === 0) return [];
      }
      return Object.keys(prospect).map(i => parseInt(i));
  }
  
  // Do not edit the line below.
  exports.repeatedMatrixValues = repeatedMatrixValues;
  