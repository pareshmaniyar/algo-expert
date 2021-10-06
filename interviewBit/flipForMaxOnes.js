module.exports = { 
    //param A : string
    //return a array of integers
    //test case: 1101101110010110011
       flip : function(A){
           //loop once
           var count = 0; var maxCount = 0;
           var finalL = -1; var finalR = -1;
           var L = -1; var R = -1;
           for(var i = 0; i < A.length; i++){
               if(A.charAt(i) == 0){
                   // console.log("i: ", i);
                   count = 1;
                   if(maxCount < count){
                       maxCount = count;
                       finalL = i;
                       finalR = i;
                   }
                   L = i;R = i;
                   while(count >= 0){
                       // console.log("inside i: ", i, ", count: ", count,", maxCount: ", maxCount);
                       i = i + 1;
                       if(i < A.length && A.charAt(i) == 0){
                           count = count + 1;
                       } else {
                           count = count - 1;
                       }
                       if(maxCount < count){
                           maxCount = count;
                           finalL = L;
                           finalR = i;
                           // console.log("maxCount: ",maxCount, ", finalL: ", finalL, ", finalR: ", finalR);
                       }
                   }
               }
           }
           if(maxCount === 0){
               return []
           }
           var arr = [];
           arr.push(finalL + 1);arr.push(finalR + 1);
           return arr;
       }
   };
   