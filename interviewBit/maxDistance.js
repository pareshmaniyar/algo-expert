module.exports = { 
 //param A : array of integers
 //return an integer
    maximumGap : function(A){
        var Lmin = [];
        var Rmax = [];
        var l = A.length;
        if(l == 1)
            return 0;
        Lmin.push(A[0]);
        Rmax.push(A[0]);
        for(var i = 1;i < l; i++){
            Lmin.push(Lmin[i - 1] < A[i]?Lmin[i - 1]:A[i]);
            Rmax.push(A[i]);
        }
        // console.log("Lmin: ", Lmin);
        for(var i = l - 2; i > -1; i--){
            Rmax[i] = Rmax[i + 1] < A[i]?A[i]:Rmax[i + 1];
            // console.log("Rmax1: ", Rmax);
        }
        // console.log("Rmax: ", Rmax);
        var i = 0;var j = 0; var maxDiff = -1;
        while (j < l && i < l) 
        { 
            if (Lmin[i] <= Rmax[j]) 
            { 
                maxDiff = maxDiff < j-i?j-i:maxDiff; 
                j = j + 1;
            }
            else
                i = i + 1; 
        }
        return maxDiff
    }
};
