/*
Question on Array:
Given a non-negative number represented as an array of digits,

add 1 to the number ( increment the number represented by the digits ).

The digits are stored such that the most significant digit is at the head of the list.

Example:

If the vector has [1, 2, 3]

the returned vector should be [1, 2, 4]

as 123 + 1 = 124.

 NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer.
For example, for this problem, following are some good questions to ask :
Q : Can the input have 0’s before the most significant digit. Or in other words, is 0 1 2 3 a valid input?
A : For the purpose of this question, YES
Q : Can the output have 0’s before the most significant digit? Or in other words, is 0 1 2 4 a valid output?
A : For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.
*/

//first solution
module.exports = { 
 //param A : array of integers
 //return a array of integers
	plusOne : function(A){
	    var a = A;
	   // console.log("a1",a);
        while(a[0] == 0) {
            if(a.length == 1) {
                return [1]
            }
            var b = [];
            for(var f = 1; f < a.length;f++) {
                // console.log("a[f]",a[f]);
                b[f-1] = a[f];
            }
            // console.log("b2",b);
            a = b;
        }
        // console.log("a3",a);
        var l = a.length;
        var arr = "";
        // console.log(l);
        while(l > 0) {
            // console.log("k", a[l-1]);
            arr = a[l-1] + "" + arr;
            // console.log("l",arr);
            l = l - 1;
        }
        var number = Number(arr);
        // console.log(number);
        number = number + 1;
        // console.log("number",number);
        var n = number + '';//"123"
        // console.log("n", number);
        a = [];var i = 0; 
        while(n[i] != undefined) {
            a[i] = number % 10;
            number = parseInt(number / 10);
            i = i + 1;
        }
        var len = a.length;var b = []
        for(var x = 0; x < len; x++) {
            b[len-1-x] = a[x];
        }
        // console.log("a",a);
        // console.log("b",b);
        return b;
        
	}
};

//second solution

module.exports = { 
    //param A : array of integers
    //return a array of integers
    //[] D
    //[0] D
    //[0000] D
    //[0001] D
    //[9999]
    // [19]
    //[9]
    //[000999]
    //[123] D
    
       plusOne : function(A){
           const l = A.length;
           if(l == 0)
               return [];
           var len = l - 1;
           if(A[len] == 9) {
               while(len >= 0 && A[len] == 9) {
                   A[len] = 0;
                   len = len - 1;
                   // console.log("A: ", A, "len: ", len);
                   if(len >= 0 && A[len] != 9){
                       A[len] = A[len] + 1;
                       // console.log("bb",A[len],len)
                       break;
                   } else if(len == -1){
                       var newArray = [];
                       newArray.push(1);
                       for(var i = 0; i < l ; i++){
                           newArray.push(A[i]);
                       }
                       A = newArray;
                   }
               }
           } else {
               A[len] = A[len] + 1 ;
           }
           //zero check
           while(A[0] == 0){
               // console.log("c",A);
               A.shift();
               // console.log("d",A);
           }
           return A;
       }
   };
   