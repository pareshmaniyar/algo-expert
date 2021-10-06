module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
    hotel : function(A, B, C){
        quickSort(A, 0, A.length - 1);
        var temp;
        function quickSort(arr, s, e){
            // console.log("arr: ", arr, ", s: ", s, ", e: ", e);
            if(s >= e){
                return;
            }
            var pivot = partition(arr, s, e);
            // console.log("After partition, arr: ", arr);
            quickSort(arr, s, pivot - 1);
            quickSort(arr, pivot + 1, e);
        }
        function partition(arr, s, e){
            var pivot = arr[e];
            var index = s;
            // console.log("In partition, arr: ", arr, ", s: ", s, ", e: ", e, ", pivot: ", pivot);
            for(var i = s; i < e; i++){
                if(arr[i] < pivot){
                    // console.log("Swaping arr[",i,"] with arr[", index,"]");
                    temp = arr[i];
                    arr[i] = arr[index];
                    arr[index] = temp;
                    temp = B[i];
                    B[i] = B[index];
                    B[index] = temp;
                    index = index + 1;
                }
            }
            temp = arr[index];
            arr[index] = arr[e];
            arr[e] = temp;
            temp = B[index];
            B[index] = B[e];
            B[e] = temp;
            return index;
        }
        // console.log('A: ', A);
        // console.log('B: ', B);
        var len = A.length;
        var occupied = 1;var departure = [];
        departure.push(A[0]);
        for(var i = 1; i < len; i++){
            if(A[i] > departure[0]){
                while(departure.length > 0 && A[i] > departure[0]){
                    departure.shift();
                    occupied = occupied - 1;
                }
            } else {
                occupied = occupied + 1;
            }
            if(occupied > C){
                return 0;
            }
            var index = 0;
            while(departure.length > index && departure[index] < B[i]){
                index = index + 1;
            }
            if(departure.length > index){
                temp = departure[index]
                departure[index] = B[i];
                departure.push(temp);
            } else {
                departure.push(B[i]);
            }
        }
        return 1;
    }
};
