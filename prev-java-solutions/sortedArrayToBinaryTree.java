/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return sortedArrayToBSTSpaceEfficient(nums, 0 , nums.length - 1);
    }
    TreeNode sortedArrayToBSTSpaceEfficient(int[] nums, int start, int end) {
        //n < 2
        int n = end - start + 1;
        if(n == 0) return null;
        if(n == 1) {
            TreeNode nums1 = new TreeNode(nums[start]);
            return nums1;
        }
        if(n == 2 || n == 3) {
            TreeNode nums2 = new TreeNode(nums[start + 1]);
            TreeNode left = new TreeNode(nums[start]);
            nums2.left = left;
            if(n == 3) {
                TreeNode right = new TreeNode(nums[start + 2]);
                nums2.right = right;
            }
            return nums2;
        }
        TreeNode res = new TreeNode(nums[start + n/2]);
        res.left = sortedArrayToBSTSpaceEfficient(nums, start, start + n/2 - 1);
        res.right = sortedArrayToBSTSpaceEfficient(nums, start + (n/2) + 1, start + n - 1);
        return res;
    }
}

