module.exports = { 
  //param A : array of array of integers
  //return a array of array of integers
     diagonal : function(A){
         var finalArray = [];
         if(A.length == 1){
             return A;
         }
         // console.log("A: ", A, "    ", A[1][2]);
         var range = ((A.length - 1) * 2 + (A[0].length - 1) * 2 )/ 2;
         // console.log("range: ", range);
         for(var sum = 0; sum <= range; sum++){
             var arr = [];
             // console.log("Sum: ", sum);
             for(var i = 0; i <= sum; i++){
                 // console.log("(",i,",",sum - i,")");
                 if(A[i] && (A[i][sum - i] || A[i][sum - i] === 0)){
                     // console.log("A[i][sum - i]: ", A[i][sum - i], ", i: ", i, ", sum: ", sum);
                     arr.push(A[i][sum - i]);
                 }
             }
             // console.log("arr: ", arr);
             finalArray.push(arr);
         }
         return finalArray;
     }
 };
 