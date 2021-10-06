class Solution {
    public String addBinary(String a, String b) {
        int refa = a.length() - 1;
        int refb = b.length() - 1;
        if(refa < 0 && refb < 0){
            return "0";
        }
        StringBuilder res = new StringBuilder();
        String temp = "";boolean carry = false;
        while(refa >= 0 || refb >= 0 ){
            if(refa < 0){
                if(!carry)
                    return b.substring(0, refb + 1) + res.reverse().toString();
                for(int i = 0; i <= refb; i++){
                    a = "0" + a;
                }
                refa = refb;
            }
            if(refb < 0){
                if(!carry)
                    return a.substring(0, refa + 1) + res.reverse().toString();
                for(int i = 0; i <= refa; i++){
                    b = "0" + b;
                }
                refb = refa;
            }
            if(a.charAt(refa) == '0' && b.charAt(refb) == '0'){
                temp = "0";
                if(carry) temp = "1";
                carry = false;
            } else if(a.charAt(refa) == '0' && b.charAt(refb) == '1' || a.charAt(refa) == '1' && b.charAt(refb) == '0'){
                temp = "1";
                if(carry){
                    temp = "0";
                    carry = true;
                } else {
                    carry = false;
                }
            } else if(a.charAt(refa) == '1' && b.charAt(refb) == '1'){
                temp = "0";
                if(carry) temp = "1";
                carry = true;
            }
            res.append(temp);
            refa = refa - 1;
            refb = refb - 1;
        }
        if(carry) res.append("1");
        return res.reverse().toString();
    }
}
