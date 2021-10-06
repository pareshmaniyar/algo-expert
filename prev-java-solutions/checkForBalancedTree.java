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
    public boolean isBalanced(TreeNode root) {
        if(root == null) return true;
        int leftLength = 0;
        int rightLength = 0;
        if(root.left != null){
            if(!isBalanced(root.left)){
                return false;
            }
            leftLength = lengthOfSubTree(root.left);
        }
            
        if(root.right != null){
            if(!isBalanced(root.right)){
                return false;
            }
            rightLength = lengthOfSubTree(root.right);
        }
        
        if(leftLength == rightLength || leftLength == rightLength - 1 || leftLength == rightLength + 1 ) return true;
        return false;
    }
    int lengthOfSubTree(TreeNode n){
        if(n.left == null && n.right == null){
            return 1;
        }
        int leftLength = 0;
        int rightLength = 0;
        if(n.left != null)
            leftLength = lengthOfSubTree(n.left);
        if(n.right != null)
            rightLength = lengthOfSubTree(n.right);
        
        return (leftLength>rightLength?(leftLength + 1):(rightLength + 1));
        
    }
}

