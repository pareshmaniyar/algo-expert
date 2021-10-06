module.exports = { 
    //param A : integer
    //return a array of array of integers
       generateMatrix : function(A){
           var arr = new Array(A);
           var x = 0; var y = 0;
           var value = 1;
           var xMax = A - 1; var yMax = A - 1;
           var xMin = 1; var yMin = 0;
           for(var i = 0; i < A; i++){
               arr[i] = new Array(A);
           }
           dir = "R";
           for(var j = 0; j < A * A; j++){
               // console.log("x: ",x ,"y: ", y);
               // console.log(arr);
               arr[x][y] = value++;
               //based on direction inc/dec x or y value
               direction();
           }
           //right,down,left,top
           function direction(){
               // console.log("dir: ", dir);
               if(dir == "R"){
                   // console.log("yMax: ", yMax,", dir: ", dir);
                   if(y == yMax){
                       dir = "D";
                       yMax = yMax - 1;
                       direction();
                   } else {
                       y = y + 1;
                   }
               } else if(dir == "D"){
                   // console.log("yMax: ", xMax,", dir: ", dir);
                   if(x == xMax){
                       dir = "L";
                       xMax = xMax - 1;
                       direction();
                   } else {
                       x = x + 1;
                   }
               } else if(dir == "L"){
                   if(y == yMin){
                       dir = "T";
                       yMin = yMin + 1;
                       direction();
                   } else {
                       y = y - 1;
                   }
               } else if(dir == "T"){
                   if(x == xMin){
                       dir = "R";
                       xMin = xMin + 1;
                       direction();
                   } else {
                       x = x - 1;
                   }
               }
           }
           return arr;
       }
   };
   