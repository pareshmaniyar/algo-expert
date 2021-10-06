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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        return postOrderTraversal(root);
    }
    List<List<Integer>> postOrderTraversal(TreeNode n){
        List<List<Integer>> root = new ArrayList<List<Integer>>();
        if(n == null) return root;
        
        if(n!= null && n.left != null){
            List<List<Integer>> left = postOrderTraversal(n.left);
            for(List list: left){
                root.add(list);
            }
        }
        
        if(n!= null && n.right != null){
            List<List<Integer>> right = postOrderTraversal(n.right);
            int rightSize = right.size() - 1;
            int rootSize = root.size() - 1;
            
            for(int i = 0; i <= rootSize && i <= rightSize; i++){
                // List<Integer> temp = new ArrayList<Integer>();
                // temp.addAll(root.get(i));
                // temp.addAll(right.get(i));
                // System.out.print("[");
                // for(int p: temp) System.out.print(p + ", ");
                // System.out.println("]" + " i: " + i);
                // System.out.print("root1: ");
                // for(List l1: root){
                //     System.out.println(l1 + " : list");
                // }
                // System.out.println(" -- root end1");
                // System.out.println("rootSize - i: " + (rootSize - i) + ", rightSize - i: " + (rightSize - i) );
                root.get(rootSize - i).addAll(right.get(rightSize - i));
                // System.out.print("root2: ");
                // for(List l1: root){
                //     System.out.println(l1 + " : list");
                // }
                // System.out.println(" -- root end2");
            }
            // System.out.println("rootSize: " + (rootSize) + ", rightSize: " + (rightSize) );
            for(int i = rootSize + 1; i <= rightSize; i++){
                root.add(0,right.get(rightSize - i));
            }
            // System.out.print("root3: ");
            // for(List l1: root){
            //     System.out.println(l1 + " : list");
            // }
            // System.out.println(" -- root end3");
        }
        
        List<Integer> val = new ArrayList<Integer>();
        val.add(n.val);
        root.add(val);
        
        // System.out.print("root: ");
        // for(List l1: root){
        //     System.out.println(l1 + " : list");
        // }
        // System.out.println(" -- root end");
        return root;
        
    }
}
