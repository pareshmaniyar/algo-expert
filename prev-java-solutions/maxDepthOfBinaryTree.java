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
    public int maxDepth(TreeNode root) {
        return preOrderTraversal(root);
    }
    int preOrderTraversal(TreeNode n) {
        if(n == null) return 0;
        int left = preOrderTraversal(n.left);
        int right = preOrderTraversal(n.right);
        return (left>right?left:right) + 1;
    }
}