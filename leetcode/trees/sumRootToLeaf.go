/*

- traverse root, arr, result = 4, [4], 0 || 9
- if root == nil return
- if leaf
    - add the computed result
    - return
- add to arr
- root.left
- root.right
- remove from arr


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

func sumNumbers(root *TreeNode) int {
	result := 0
	traverse(root, make([]int, 0), &result)
	return result
}

func traverse(root *TreeNode, arr []int, result *int) {
	if root == nil {
		return
	}
	if root.Left == nil && root.Right == nil {
		val := root.Val
		for i := len(arr) - 1; i >= 0; i-- {
			val += arr[i] * int(math.Pow(10, float64(len(arr)-i)))
		}
		*result = *result + val
		return
	}
	arr = append(arr, root.Val)
	traverse(root.Left, arr, result)
	traverse(root.Right, arr, result)
	arr = arr[:len(arr)-1]
}
 
 
 