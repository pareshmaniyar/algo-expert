class Solution {
    public int searchInsert(int[] nums, int target) {
        int len = nums.length;
        for(int i = 0; i < len; i++){
            if(nums[i] >= target){
                return i;
            }
        }
        if(len > 0) return len;
        return 0;
    }
}