/*
10, 10 - 3, 10 - 3 + 11
2, 7, 10
-------------------
10
15, 5
17, 7, 2
18, 8, 3, 1

- prev + this, this
There is a better soln with O(n) which I is tricky, check out later and implement

*/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func pathSum(root *TreeNode, targetSum int) int {
	if root == nil {
		return 0
	}
	return pathSum(root.Left, targetSum) + pathSum(root.Right, targetSum) + pathIncludedSum(root, targetSum)
}

func pathIncludedSum(root *TreeNode, targetSum int) int {
	if root == nil {
		return 0
	}
	res := 0
	if targetSum == root.Val {
		res++
	}
	res += pathIncludedSum(root.Left, targetSum-root.Val)
	res += pathIncludedSum(root.Right, targetSum-root.Val)
	return res
}



