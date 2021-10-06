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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        return preOrderTraversal(p, q);
    }
    boolean preOrderTraversal(TreeNode n1, TreeNode n2) {
        if((n1 == null && n2 != null) || (n2 == null && n1 != null)) {
            return false;
        } else if(n1 == null && n2 == null){
            return true;
        }
        if(n1.val != n2.val){
            return false;
        }
        if(!preOrderTraversal(n1.left, n2.left)) return false;
        if(!preOrderTraversal(n1.right, n2.right)) return false;
        return true;
    }
}