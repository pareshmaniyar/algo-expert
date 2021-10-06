class Solution {
    public int strStr(String haystack, String needle) {
        if(needle.equals("")) return 0;
        if(haystack.equals("") || haystack.length() < needle.length()) return -1;
        for(int i = 0; i < haystack.length(); i++){
            for(int j = 0; j < needle.length(); j++){
                if(i + j >= haystack.length() || haystack.charAt(i + j) != needle.charAt(j)){
                    break;
                }
                if(j + 1 == needle.length()){
                    return i;
                }
            }
        }
        return -1;
    }
}
