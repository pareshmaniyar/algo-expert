class Solution {
    public int[] plusOne(int[] digits) {
        // what if it is by increasing by some number not just 1
        boolean carry = true; int len = digits.length;
        int[] res = digits.clone();
        for(int i = len - 1; i > -1; i--){
            if(carry && (i != 0 || res[i] != 9) ){
                res[i] = res[i] + 1;
                if(res[i] > 9) {
                    carry = true;
                    res[i] = 0;
                } else {
                    carry = false;
                }
            } else if(carry && i == 0 && res[i] == 9) {
                int[] rarecase = new int[len + 1];
                rarecase[0] = 1;
                return rarecase;
            } else {
                break;
            }
        }
        return res;
    }
}
