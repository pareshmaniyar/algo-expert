class Solution {
    public int mySqrt(int x) {
        if(x == 1) return 1;
        if(x == 0) return 0;
        if(x == 2) return 1;
        if(x == 3) return 1;
        if(x == 4) return 2;
        if(x < 9) return 2;
        int left = 0; int right = x/2; int mid = (left + right)/2;
        if(mid > 46340) {
            mid = 46340;
            right = 46340 * 2;
        }
        while(left != right){
            mid = left/2 + right/2;
            System.out.print("mid: " + mid + ", mid * mid: " + mid * mid + " ");
            if(mid * mid == x){
                return mid;
            } else if(mid * mid > x || mid * mid < 0){
                if((mid - 1) * (mid - 1) < x) return (mid - 1);
                right = right/2 + left/2;
                // System.out.println("right: " + right + ", left: " + left);
            } else if(mid * mid < x){
                System.out.print("mid: " + (mid + 1) * (mid + 1));
                if((mid + 1) * (mid + 1) > x || (mid + 1) * (mid + 1) < 0) return mid;
                left = right/2 + left/2;
                // System.out.println("left: " + left + ", right: " + right);
            }
        }
        return (left + right) / 2;
    }
}
