/*

 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumOfLeftLeaves(root *TreeNode) int {
	result := 0
	traversal(root, &result, false)
	return result
}

func traversal(root *TreeNode, result *int, leftTrue bool) {
	if root == nil {
		return
	}
	if root.Left == nil && root.Right == nil && leftTrue == true {
		*result = *result + root.Val
	}
	traversal(root.Left, result, true)
	traversal(root.Right, result, false)
}
