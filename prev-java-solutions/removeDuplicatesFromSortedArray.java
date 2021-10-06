class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) return 0;
        int counter = 1;
        int prev = nums[0];
        for(int num: nums){
            if(num != prev){
                nums[counter] = num;
                counter = counter + 1;
                prev = num;
            }
        }
        return counter;
    }
}