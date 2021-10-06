module.exports = { 
  //param A : array of integers
  //return an integer
  maxArr : function(A){
      var l = A.length;
      if(l == 0 || l == 1) {
          return 1;
      }
      //return max |A[i] - A[j]| + |i - j|
      //brute-force
      //loop for each element for further element
      //catch: f(i,j) == f(j,i)
      //Stop duplication
      //precomputed i-j
      //[1,2,3,4,5,6,5,4,3,2,1]
      //distance apart and value difference
      var maxSum = this.mod(A[0],A[1]) + 1;
      for(var i = 0 ; i < l ; i++){
          for(var j = i ; j < l ; j++){
              var cal = this.mod(A[i],A[j]) + j - i;
              if(maxSum < cal) {
                  maxSum = cal;
              }
          }
      }
      return maxSum;
  },
  mod: function(a,b) {
      //-3,2; -3 -2 = -5; 2 + 3 = 5
      return a-b>0?a-b:b-a;
  }
};

module.exports = { 
 //param A : array of integers
 //return an integer
    maxArr : function(A){
        var l = A.length;
        if(l == 0 || l == 1) {
            return 1;
        }
        //return max |A[i] - A[j]| + |i - j|
        //(A[i] + i) (A[i] - i)
        //help from geeksforgeeks
        maxAdd = A[0] + 0;
        minAdd = A[0] + 0;
        maxSub = A[0] - 0;
        minSub = A[0] - 0;
        for(var i = 0 ; i < l ; i++){
            if(maxAdd < A[i] + i){
                maxAdd = A[i] + i;
            }
            if(minAdd > A[i] + i){
                minAdd = A[i] + i;
            }
            if(maxSub < A[i] - i){
                maxSub = A[i] - i;
            }
            if(minSub > A[i] - i){
                minSub = A[i] - i;
            }
        }
        if(maxAdd - minAdd > maxSub - minSub){
            return maxAdd - minAdd;
        } else {
            return maxSub - minSub;
        }
    }
};
