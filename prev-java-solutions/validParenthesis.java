class Solution {
    public boolean isValid(String s) {
        // Stack
        /**
            Data type:
            1. Array with half the elements
            2. Linked List
        */
        // Array
        int len = s.length();
        int pos = 0;
        char[] stack = new char[len/2];
        for(int i = 0; i < len; i++){
            if(pos >= len){
                return false;
            }
            if(pos > 0 && compare(stack[pos - 1], s.charAt(i)) ){
                stack[pos - 1] = '\u0000';
                pos = pos - 1;
            } else {
                System.out.println("pos: " + pos + ", stack: " + Arrays.toString(stack));
                try{
                    stack[pos] = s.charAt(i);
                    pos = pos + 1;
                }catch(Exception e){
                    return false;
                }
            }
        }
        if(stack.length > 0 && stack[0] != '\u0000'){
            return false;
        }
        return true;
    }
    boolean compare(char a, char b){
        switch(a){
            case '(': return b == ')';
            case '{': return b == '}';
            case '[': return b == ']';
            default:  return false;
        }
    }
}

class Solution {
    public boolean isValid(String s) {
        // Stack
        /**
            Data type:
            1. Array with half the elements
            2. Linked List
            3. Inbuilt Stack
        */
        //LinkedList
        LinkedList<String> stack = new LinkedList<String>();
        for(char c: s.toCharArray()){
            if(c == '(' || c == '{' || c == '['){
                stack.add(String.valueOf(c));
                // System.out.println("stack: " + stack);
            } else if(c == ')'){
                // System.out.println("stack5: " + stack.peek());
                // System.out.println("stack6: " + (stack.peek() instanceof String));
                if(stack.isEmpty()){
                    return false;
                } else {
                    if("(".equals(stack.removeLast())){
                        // System.out.println("stack7: " + stack);
                    } else {
                        // System.out.println("stack7.1: " + stack);
                        return false;
                    }
                }
            } else if(c == '}'){
                if(stack.isEmpty()){
                    return false;
                } else {
                    if("{".equals(stack.removeLast())){
                        // System.out.println("stack2: " + stack);
                    } else {
                        // System.out.println("stack2.1: " + stack);
                        return false;
                    }
                }
                // if(stack.isEmpty() || stack.remove() != "{"){
                //     System.out.println("stack2: " + stack);
                //     return false;
                // }
            } else if(c == ']'){
                if(stack.isEmpty()){
                    return false;
                } else {
                    if("[".equals(stack.removeLast())){
                        // System.out.println("stack3: " + stack);
                    } else {
                        // System.out.println("stack3.1: " + stack);
                        return false;
                    }
                }
                // if(stack.isEmpty() || stack.remove() != "["){
                //     System.out.println("stack3: " + stack);
                //     return false;
                // }
            }
        }
        // System.out.println("stack4: " + stack);
        return stack.isEmpty();
    }
}

class Solution {
    public boolean isValid(String s) {
        LinkedList<String> stack = new LinkedList<String>();
        for(char c: s.toCharArray()){
            if(c == '(' || c == '{' || c == '['){
                stack.add(String.valueOf(c));
            } else if(c == ')'){
                if(!stack.isEmpty()){
                    if("(".equals(stack.removeLast())){
                        continue;
                    }
                }
                return false;
            } else if(c == '}'){
                if(!stack.isEmpty()){
                    if("{".equals(stack.removeLast())){
                        continue;
                    }
                }
                return false;
            } else if(c == ']'){
                if(!stack.isEmpty()){
                    if("[".equals(stack.removeLast())){
                        continue;
                    }
                }
                return false;
            }
        }
        return stack.isEmpty();
    }
}

