class Solution {
    public int lengthOfLongestSubstring(String s) {
        //brute force
        /**
            1. Start from first element and move till last element 
            2. Keep adding next element until you find a repetition. Store if the length is greater than max in max
            3. If value which is being added is repeated, break the loop
        */
        if(s.length() == 0){
            return 0;
        }
        String base = "";
        int max = 1;
        for(int i = 0; i < s.length(); i++){
            base = "" + s.charAt(i);
            for(int j = i + 1; j < s.length(); j++){
                if(base.contains(Character.toString(s.charAt(j)))){
                    break;
                } else{
                    base = base + s.charAt(j);
                    if(base.length() > max){
                        max = base.length();
                    }
                }
            }
        }
        return max;
    }
}