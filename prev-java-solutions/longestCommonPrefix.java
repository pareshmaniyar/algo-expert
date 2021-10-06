class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length < 1) return "";
        String result = strs[0];
        for(String s: strs){
            result = longestCommonLocalPrefix(result, s);
        }
        return result;
    }
    public String longestCommonLocalPrefix(String s1, String s2){
        String result = "";int i1 = 0,i2 = 0; int l1 = s1.length(); int l2 = s2.length();
        while(i1 < l1 && i2 < l2){
            if((s1.substring(i1, i1 + 1)).equals(s2.substring(i2, i2 + 1))){
                result = result + s1.substring(i1, i1 + 1);
                i1 = i1 + 1; i2 = i2 + 1;
            } else {
                break;
            }
        }
        return result;
    }
}
