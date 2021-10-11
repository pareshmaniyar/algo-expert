/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
//import "math"

func diameterOfBinaryTree(root *TreeNode) int {
	var max int = -100
	treeTraversal(root, &max)
	return max
}

func treeTraversal(root *TreeNode, max *int) int {
	if root == nil {
		return 0
	}
	var left int = treeTraversal(root.Left, max)
	var right int = treeTraversal(root.Right, max)
	*max = Max(*max, left+right)
	return Max(left, right) + 1
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}
