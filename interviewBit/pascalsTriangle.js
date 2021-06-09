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
           if(A === 0) return [1];
           if(A === 1) return [1, 1];
           let prev = [1, 1];
           let current = [1];
           for(let i = 2; i <= A; i++) {
               const prevLength = prev.length;
               for(let j = 0; j < prevLength - 1; j++) {
                   current.push(prev[j] + prev[j + 1]);
               }
               current.push(1);
               prev = current;
               current = [1];
           }
           return prev;
       }
   };
   