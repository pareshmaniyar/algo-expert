// Rotate matrix 90 degrees
module.exports = { 
    //param A : array of array of integers 
    //return nothing 
    solve : function(A){ 
       let len = A.length;
       function swap(i, j) {
           const temp = A[i][j];
           A[i][j] = A[j][i];
           A[j][i] = temp;
       }
       for(let i = 0; i < len; i++) {
           for(let j = i; j < len; j++) {
               swap(i, j);
           }
       }
       for(let i = 0; i < len; i++) {
           for(let j = 0; j < len / 2; j++) {
               const temp = A[i][j];
               A[i][j] = A[i][len - j - 1];
               A[i][len - j - 1] = temp;
           }
       }
       return;
    }
};
