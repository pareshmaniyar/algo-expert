module.exports = { 
    //param A : array of integers
    //return a array of integers
    //19 1 1 2 3 3 4 8 9 11 9 11 12 12 11 9 14 19 20 20
       subUnsort : function(A){
           var len = A.length;
           var s = -1; var e = -1;
           for(var i = 0; i < len - 1; i++){
               if(A[i] > A[i + 1] || s != -1 && A[i] >= A[i+1] && e === i){
                   if(s === -1){
                       s = i;
                   }
                   e = i + 1;
               }
           }
           var finalArray = [];
           if(s === -1){
               return [-1];
           }
           finalArray.push(s);
           finalArray.push(e);
           return finalArray;
       }
   };
   