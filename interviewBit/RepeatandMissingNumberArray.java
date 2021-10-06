public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public ArrayList<Integer> repeatedNumber(final List<Integer> A) {
        //X - Y = Sum; X = repeats, Y = missing
        //(X - Y)(X + Y) = sum of actual squares - sum of n squares
        //X + Y = SquareSum/X - Y
        //x = Sum + SquareSum/Sum
        long sum = 0; 
        long actualSum = 0;
        long squareOfSum = 0;
        long squareOfActualSum = 0;
        for(Integer i = new Integer(1); i.compareTo(A.size()) <= 0;i++){
            long squareActual = A.get(i - 1);
            actualSum = actualSum + squareActual;
            sum = sum + i.longValue();
            squareOfActualSum = squareOfActualSum + (squareActual * squareActual);
            long squareTrivial = i.longValue();
            squareOfSum = squareOfSum + (squareTrivial * squareTrivial);
        }
        //X - Y = actualSum - sum
        // System.out.println("actualSum = " + actualSum );
        // System.out.println("sum = " + sum );
        // System.out.println("squareOfActualSum = " + squareOfActualSum );
        // System.out.println("squareOfSum = " + squareOfSum );
        // System.out.println("X - Y = actualSum - sum = " + (actualSum - sum));
        //(X - Y)(X + Y) = sum of actual squares - sum of n squares
        // System.out.println("(X - Y)(X + Y) = sum of actual squares - sum of n squares = " + (squareOfActualSum - squareOfSum));
        // System.out.println("X + Y = SquareSum/X - Y = " + ((squareOfActualSum - squareOfSum)/(actualSum - sum)));
        // System.out.println("2X = (X + Y) + (X - Y) = " +(((squareOfActualSum - squareOfSum)/(actualSum - sum)) + (actualSum - sum)));
        // System.out.println("X = ((X + Y) + (X - Y))/2 = " +(((squareOfActualSum - squareOfSum)/(actualSum - sum)) + (actualSum - sum))/2);
        long X = (((squareOfActualSum - squareOfSum)/(actualSum - sum)) + (actualSum - sum))/2;
        // System.out.println("Y = X - sum = " + (X - actualSum + sum));
        // int[] a = new int[2];
        ArrayList <Integer> a = new ArrayList<>();
        a.add((int)X);
        long Y = X - actualSum + sum;
        a.add((int)Y);
        return a;
    }
}
