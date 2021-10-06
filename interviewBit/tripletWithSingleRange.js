module.exports = { 
    //param A : array of strings
    //return an integer
       solve : function(A){
           var xMax1,xMax2,xMax3;
           var xMin1,xMin2;
           var yMin1,yMin2;
           var yMax;var zMin;
           A.forEach(function(x) {
               if(x < 2/3){
                   if(xMax1){
                       if(xMax1 < x){
                           var temp = xMax1;
                           xMax1 = x;
                           if(xMax2){
                               xMax3 = xMax2;
                               xMax2 = temp;
                           } else {
                               xMax2 = temp;
                           }
                       } else if(xMax2){
                           var temp3 = xMax2;
                           xMax2 = x;
                           xMax3 = temp3;
                       } else if(!xMax2) {
                           xMax2 = x;
                       } else if(xMax3 < x){
                           xMax3 = x;
                       }
                   } else {
                       xMax1 = x;
                   }
               } else if(x >= 2/3 && x <= 1){
                   if(yMax){
                       if(yMax < x){
                           yMax = x;
                       }
                   } else {
                       yMax = x;
                   }
                   if(yMin1){
                       if(yMin1 > y){
                           yMin2 = yMin1;
                           yMin1 = y;
                       }
                   } else {
                       yMin1 = x;
                   }
               } else if(x > 1) {
                   if(zMin){
                       if(zMin > x){
                           zMin = x;
                       }
                   } else {
                       zMin = x;
                   }
               }
           });
           if(xMax1 && xMax2 && xMax3 && xMax1 + xMax2 + xMax3 > 1){
               return 1;
           }
           if(xMin1 && xMin2 && xMin1 + xMin2 + zMin < 2){
               return 1;
           }
           if(xMin1 && yMin1 && yMin2 && xMin1 + yMin1 + yMin2 < 2){
               return 1;
           }
           if(xMin1 && yMin1 && zMin && xMin1 + yMin1 + zMin < 2){
               return 1;
           }
           if(xMax1 && xMax2 && yMin1 && xMax1 + xMax2 + yMin1 < 2){
               return 1;
           }
           if(xMin1 && xMin2 && yMax && xMin1 + xMin2 + yMax > 1){
               return 1;
           }
           return -1;
       }
   };
   
   
   
   
   
   
   
   