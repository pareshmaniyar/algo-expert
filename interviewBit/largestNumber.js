module.exports = { 
    //param A : array of integers
    //return a strings
       largestNumber : function(A){
           quickSort(A, 0, A.length - 1);
           function quickSort(arr, s, e){
               // console.log("arr: ", arr, ", s: ", s, ", e: ", e);
               if(s >= e){
                   return;
               }
               var pivot = partition(arr, s, e);
               // console.log("After partition, arr: ", arr);
               quickSort(A, s, pivot - 1);
               quickSort(A, pivot + 1, e);
           }
           function partition(arr, s, e){
               var pivot = arr[e];
               var index = s;
               // console.log("In partition, arr: ", arr, ", s: ", s, ", e: ", e, ", pivot: ", pivot);
               for(var i = s; i < e; i++){
                   var swap = compare(arr[i], pivot);
                   // console.log("Swaping arr[",i,"] with arr[", index,"], swap: ", swap);
                   if(swap){
                       var temp = arr[i];
                       arr[i] = arr[index];
                       arr[index] = temp;
                       index = index + 1;
                   }
               }
               var temp = arr[index];
               arr[index] = arr[e];
               arr[e] = temp;
               return index;
           }
           function compare(a, b){
               //a is less than b if it a is appending after b then return true
               // console.log('a: ', a, ', b: ', b);
               a = a + '';b = b + '';
               var len = a < b?a:b;
               var len2 = a > b?a:b;
               for(var i = 0; i < len.length; i++){
                   if(a.charAt(i) > b.charAt(i)){
                       return false;
                   } else if(a.charAt(i) < b.charAt(i)){
                       return true;
                   }
               }
               var flag = 1;
               while(len.length - 1 + flag < len2.length && len[len.length - 1] == len2[len.length - 1 + flag]){
                   flag = flag + 1;
               }
               // console.log('len[len.length - 1]: ', len[len.length - 1],', len2[len2.length - 1 + flag]: ', len2[len.length - 1 + flag]);
               if(len[len.length - 1] > len2[len.length - 1 + flag]){
                   return false;
               } else {
                   // console.log('1. len[len.length - 1]: ', len[len.length - 1],', len2[len2.length - 1 + flag]: ', len2[len.length - 1 + flag]);
                   return true;
               }
               return false;
           }
           // console.log('A: ', A);
           var s = '';
           for(var i = A.length - 1; i >= 0; i--){
               s = s + A[i];
               // console.log('s: ', s);
           }
           // console.log(A);
           while(s.length > 0 && s.charAt(0) == 0){
               s = s.substring(1);
           }
           if(s.length == 0){
               return '0';
           }
           return s;
       }
   };
   //65 980 674 250 359 98 969 143 379 363 106 838 923 969 880 997 664 152 329 975 377 995 943 369 515 722 302 496 124 692 993 341 785 400 113 302 563 121 230 358 911 437 438 494 599 168 866 689 444 684 365 470 176 910 204 324 657 161 884 623 814 231 694 399 126 426