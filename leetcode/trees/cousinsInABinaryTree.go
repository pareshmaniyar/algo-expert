/*
- find node 1, parent, depth
- find node 2, parent, depth
- if parent are same return false
- if diff depth return false
- return true
- I could improve read quality using struct
*/
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isCousins(root *TreeNode, x int, y int) bool {
	arr := []int{x, y}
	nodes := make([]*TreeNode, 2)
	depth := make([]int, 2)
	parent := make([]int, 2)
	findNodes(arr, root, nodes, depth, 0, 101, parent)
	if parent[0] == parent[1] {
		return false
	}
	if depth[0] != depth[1] {
		return false
	}
	return true
}

func findNodes(arr []int, root *TreeNode, nodes []*TreeNode, depth []int, currDepth int, currParent int, parent []int) {
	if root == nil {
		return
	}
	flag := false
	for i := 0; i < len(arr); i++ {
		if arr[i] == root.Val {
			nodes[i] = root
			depth[i] = currDepth
			parent[i] = currParent
		}
		if nodes[i] == nil {
			flag = true
		}
	}
	if !flag {
		return
	}
	findNodes(arr, root.Left, nodes, depth, currDepth+1, root.Val, parent)
	findNodes(arr, root.Right, nodes, depth, currDepth+1, root.Val, parent)
}
