class Solution {
    public String longestPalindrome(String s) {
        // Brute force
        // n^3
        
        // Every palindrome has either to two same contigous elements or an element has two same elements beside
        
        // Approach 1:
        /**
        Background
            1. Two conditions: Even or odd number of palindrome
            2. Even has two same in continuos position, odd has two same elements beside the center element
            3. Finding odd is easy, just keep expanding the window and stop when unequal
            4. Even: check for all the set of continuos elements. Repeat step 3, expanding the window
            
            Solution:
            Function called Expanding the window which takes two input indexes and outputs max palindrome
        */
        
        int sL = s.length();
        if(sL == 0 ){
            return "";
        }
        String maxPalindromeResult = new String(s.substring(0,1));
        for(int i = 0; i < sL; i++){
            if(i + 1 < sL && s.charAt(i) == s.charAt(i + 1)){
                int maxRepeat = 0;
                while(i + maxRepeat + 1 < sL && s.charAt(i) == s.charAt(i + maxRepeat + 1)){
                    maxRepeat = maxRepeat + 1;
                }
                String tempPalindrome1 = new String(maxPalindrome(i,i + maxRepeat, s));
                if(maxPalindromeResult.length() < tempPalindrome1.length()){
                    maxPalindromeResult = tempPalindrome1;
                }
                i = i + maxRepeat;
            } else if (i + 1 < sL && (i - 1) >= 0 && s.charAt(i - 1) == s.charAt(i + 1)){
                String tempPalindrome2 = new String(maxPalindrome(i, i, s));
                if(maxPalindromeResult.length() < tempPalindrome2.length()){
                    maxPalindromeResult = tempPalindrome2;
                }
            }
        }
        return maxPalindromeResult;
    }
    public static String maxPalindrome(int start, int end, String s){
        String result = new String(s.substring(start, end + 1));
        while(start - 1 >= 0 && end + 1 < s.length()){
            if(s.charAt(start - 1) == s.charAt(end + 1)){
                result = s.charAt(start - 1) + s.substring(start, end + 1) + s.charAt(end + 1);
                start = start - 1; end = end + 1;
            } else {
                break;
            }
        }
        return result;
    }
}




