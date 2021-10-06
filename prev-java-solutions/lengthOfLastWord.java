class Solution {
    public int lengthOfLastWord(String s) {
        int res = 0;
        int ref = s.length();
        while(ref > 0){
            if(s.charAt(ref - 1) != ' '){
                int counter = 0;
                while(ref > 0 && s.charAt(ref - 1) != ' '){
                    counter = counter + 1;
                    ref = ref - 1;
                }
                return counter;
            }
            ref = ref - 1;
        }
        return res;
    }
}