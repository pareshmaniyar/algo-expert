public class Solution {
    public ArrayList<Integer> maxset(ArrayList<Integer> A) {
        int i = 0;
        int maxSum = 0;
        int firstElement = 0;
        int lastElement = 0;
        //Loop through each element
        while(i < A.size()){
            int temp = i;
            //find a positive interger
            if(A.get(i) > 0){
                int sum = 0;
                while(sum >= 0 && i < A.size()){
                    sum = sum + A.get(i);
                    // System.out.println("sum: " + sum);
                    if(maxSum < sum){
                        maxSum = sum;
                        lastElement = i;
                        firstElement = temp;
                    }
                    i++;
                }
            }
            i++;
        }
        // System.out.println("maxSum: " + maxSum + ", firstElement: " + firstElement + ", lastElement: " + lastElement);
        ArrayList<Integer> Anew = new ArrayList<Integer>();
        for(int j = firstElement; j <= lastElement; j++){
            Anew.add(A.get(j));
        }
        return Anew;
    }
}
