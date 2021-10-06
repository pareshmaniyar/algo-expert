class Solution {
    public int removeElement(int[] nums, int val) {
        if(nums.length == 0) return 0;
        int counter = 0;
        for(int num: nums){
            if(num != val){
                nums[counter] = num;
                counter = counter + 1;
            }
        }
        return counter;
    }
}