class Solution {
    public int reverse(int x) {
        String result = "";
        int dividend = x;
        boolean positive = true;
        int remainder = 0;
        //negative check
        if(x < 0){
            positive = false;
            dividend = -dividend;
        }
        while(dividend != 0){
            remainder = dividend % 10;
            result = result + remainder;
            dividend = dividend / 10;
        }
        if(result == ""){
            return positive?0:-0;
        }

        //Zero check
        while(result.charAt(0) == '0'){
            result = result.substring(1);
        }
        int intResult = 0;
        try {
            intResult = positive?Integer.parseInt(result):-Integer.parseInt(result);
        } catch(Exception e){
            return 0;
        }
        return intResult;
    }
}


