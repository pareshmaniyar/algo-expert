/*

- measure left and right depth
    - node = node.left until null, return depth

- if left == right
    - return formula(1)

- return recurse(left) + recurse(right) + 1
1-1 = 1
2-1 + 2 = 3
3-1 + 2 + 2*2 = 7
4-1 + 2 + 2*2 + 2*2*2
1 + 2 + 2^2 + 2^3 .....
2^n - 1
*/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 import "math"
 func countNodes(root *TreeNode) int {
	 return numOfNodes(root)
 }
 
 func numOfNodes(root *TreeNode) int {
	 if root == nil {
		 return 0
	 }
	 node := root
	 leftCount := 0
	 for node.Left != nil {
		 node = node.Left
		 leftCount++
	 }
	 node = root
	 rightCount := 0
	 for node.Right != nil {
		 node = node.Right
		 rightCount++
	 }
	 if leftCount == rightCount {
		 return getNodesWithDepth(float64(leftCount))
	 }
	 return numOfNodes(root.Left) + numOfNodes(root.Right) + 1
 }
 
 
 func getNodesWithDepth(depth float64) int {
	 return int(math.Pow(2, depth + 1)) - 1
 }
 
 
 