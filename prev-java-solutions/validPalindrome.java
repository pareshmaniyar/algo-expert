class Solution {
    public boolean isPalindrome(String s) {
        int len = s.length();
        if(len == 0) return true;
        int left = 0; int right = len - 1;
        while(left <= right){
            while(left < right && !Character.isLetterOrDigit(s.charAt(left))){
                left = left + 1;
            }
            while(right > left && !Character.isLetterOrDigit(s.charAt(right))){
                right = right - 1;
            }
            if(left < right && Character.toLowerCase(s.charAt(left)) == Character.toLowerCase(s.charAt(right))){
                left = left + 1;
                right = right - 1;
            } else {
                if(left >= right) return true;
                return false;
            }
        }
        return true;
    }
}
