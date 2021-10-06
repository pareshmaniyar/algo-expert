//Max Sum Contiguous Subarray
/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

    For example:

    Given the array [-2,1,-3,4,-1,2,1,-5,4],

    the contiguous subarray [4,-1,2,1] has the largest sum = 6.

    For this problem, return the maximum sum.
 */

 // Attempt 1: could improve efficiency
module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           if(A.length === 0) {
               return -1000000000;
           }
           var maxSum = A[0];
           var arr= [];var count = 0;
           for(var i = count; i < A.length; i++){
               arr.push(A[i]);
               // console.log("arr: ",arr);
               var sum = 0;
               for(var t = 0;t < arr.length; t++){
                   sum = sum + arr[t];
                   // console.log("sum: ", sum);
               }
               if(sum > maxSum){
                   maxSum = sum;
               }
               // console.log("sum: ", sum, "maxSum: ", maxSum);
               if(i == A.length - 1) {
                   arr = [];
                   count++;
                   i = count - 1;
                   // console.log(i);
               }
           }
           return maxSum;
       }
   };
   
//attempt 2 

module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           if(A.length === 0) {
               return -1000000000;
           }
           var maxSum = A[0];
           var arr= [];var count = 0;var sum = 0;
           for(var i = count; i < A.length; i++){
               arr.push(A[i]);
               // console.log("arr: ",arr);
               sum = sum + A[i];
               if(sum > maxSum){
                   maxSum = sum;
               }
               // console.log("sum: ", sum, "maxSum: ", maxSum);
               if(i == A.length - 1) {
                   arr = [];
                   count++;
                   i = count - 1;
                   sum = 0;
                   // console.log(i);
               }
           }
           return maxSum;
       }
};

//attempt 3
//divide and conquer


