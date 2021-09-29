/*
1432219, 3
- Remove till nums.length - k
432219 2, 132219 2, 142219 2, 143219 2, 143219 2, 143229 2, 143221 2
- Add till nums.length - k

max = 2
     / \
    3   4
   
  
432219
32219, 42219, 43219, 43219, 43229, 43221
43229
- loop k times
    - keep removing smallest digit

119

public class Solution {
    public String removeKdigits(String num, int k) {
        int len = num.length();
        //corner case
        if(k==len)        
            return "0";
            
        Stack<Character> stack = new Stack<>();
        int i =0;
        while(i<num.length()){
            //whenever meet a digit which is less than the previous digit, discard the previous one
            // 1219 0
            // 
            while(k>0 && !stack.isEmpty() && stack.peek()>num.charAt(i)){
                stack.pop();
                k--;
            }
            stack.push(num.charAt(i));
            i++;
        }
        
        // corner case like "1111"
        while(k>0){
            stack.pop();
            k--;            
        }
        
        //construct the number from the stack
        StringBuilder sb = new StringBuilder();
        while(!stack.isEmpty())
            sb.append(stack.pop());
        sb.reverse();
        
        //remove all the 0 at the head
        while(sb.length()>1 && sb.charAt(0)=='0')
            sb.deleteCharAt(0);
        return sb.toString();
    }
}
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

 var removeKdigits = function(num, k) {
    if(num.length <= k) return "0";
    let stack = [], digit;
    for(let i = 0; i < num.length; i++) {
        digit = num[i];
        while(stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    while(k > 0) {
        stack.pop();
        k--;
    }
    digit = stack.join('');
    while(digit[0] === '0') {
        digit = digit.slice(1);
    }
    if(digit.length === 0) return "0";
    return digit;
}



