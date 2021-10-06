module.exports = { 
    //param A : integer
    //return a array of integers
    /** 
   [
       [1],
       [1,1],
       [1,2,1],// (2, 0) + (2, 1) => 0, 1
       [1,3,3,1],//(3, 1) => 1, 1
       [1,4,6,4,1] => 1, 2
       [1,5,10,10,5,1] => 2, 2
       [1,6,15,20,15,6,1] => 2, 3
   ]
    */
       getRow : function(A){
           var arr = []
           arr.push(1);
           var store = [];
           for(var k = 0; k < A + 1; k++){
               if(k == 0)
                   store.push([1]);
               else if(k == 1)
                   store.push([1,1]);
               else {
                   var arr2 = [1]
                   for(var l = 1; l < k; l++){
                       arr2.push(null);
                   }
                   arr2.push(1);
                   store.push(arr2);
               }
           }
           // console.log("store: ", store);
           function value(x, y){
               // console.log("x: ", x, ", y:", y);
               if(store[x] && store[x][y]){
                   return store[x][y];
               }
               if(y === 0 || y === x){
                   store[x][y] = 1;
               } else {
                   var v = value(x - 1, y - 1) + value(x - 1, y);
                   // console.log("x: ", x, ", y: ", y, ", v: ", v);
                   store[x][y] = v;
               }
               return store[x][y];
           }
           if(A == 0){
               return arr;
           }
           if(A == 1){
               arr.push(1);
               return arr;
           }
           for(var i = 1; i <= (A + 1)/2; i++){
               // console.log("x: ", A, ", y:", i);
               arr.push(value(A, i));
           }
           for(var j = Math.floor(A/2) - 1; j >= 0;j--){
               // console.log("arr: ", arr, ", j:", j);
               arr.push(arr[j]);
           }
           // console.log("arr: ", arr, ", store: ", store);
           return arr;
       }
   };
   
   
   
   
   
   
   