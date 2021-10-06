/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */
class Solution {
    public int singleNumber(int[] nums) {
        //XOR: 100,1,10,1,10
        int len = nums.length;
        for(int i = 1; i < len; i++){
            nums[0] = nums[0] ^ nums[i];
        }
        return nums[0];
    }
}
