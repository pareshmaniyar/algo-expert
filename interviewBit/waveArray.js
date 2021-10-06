module.exports = { 
    //param A : array of integers
    //return an integer
    //1 2 3 3 5 6 7 8 = 4
    //1 3 4 9 10 = 3
    //10 6 4 2 8 len = 5 => 2 4 6 8 10
    //A.length
        solve : function(A){
            //solution 1:
            //sort
            //find integer from back wards
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
                    if(arr[i] < pivot){
                        // console.log("Swaping arr[",i,"] with arr[", index,"]");
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
            var len = A.length;var finalArray = 0;var dec = false;
            for(var i = 0; i < len; i++){
                if(dec){
                    finalArray.push(A[i+1]);
                    dec = false;
                } else {
                    finalArray.push(A[i-1]);
                    dec = true;
                }
            }
            return finalArray;
        }
    };
    // 0 1 2 3 4 5 6
    // 1 0 3 2 5 4 6
    // +1 -1 +1 -1 