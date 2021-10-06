module.exports = { 
    //param A : integer
    //return a array of array of integers
       solve : function(A){
           var i = 0;
           var finalArray = [];
           while(i < A){
               if(i == 0){
                   finalArray.push([1]);
               } else {
                   var arr = [];
                   var j = 1;
                   arr.push(1);
                   while(j < i){
                       // console.log("i: ", i, ", j: ",j);
                       arr.push(finalArray[i-1][j - 1] + finalArray[i-1][j]);
                       j++;
                   }
                   arr.push(1);
                   finalArray.push(arr);
               }
               // console.log(finalArray);
               // console.log(finalArray + " " + i);
               i++;
           }
           return finalArray;
       }
   };
   