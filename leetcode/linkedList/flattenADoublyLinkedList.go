/*

- root
    - while root != null
        - if root.child exists
            - temp = root.next
            - root.next = flatten(root)

*/
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Prev *Node
 *     Next *Node
 *     Child *Node
 * }
 */

func flatten(root *Node) *Node {
	stack := make([]*Node, 0)
	head := root
	prev := root
	for len(stack) != 0 || root != nil {
		if root == nil {
			lastEl := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			prev.Next = lastEl
			lastEl.Prev = prev
			root = lastEl
		} else if root.Child != nil {
			rootNext := root.Next
			if rootNext != nil {
				stack = append(stack, rootNext)
			}
			child := root.Child
			root.Next = child
			child.Prev = root
			root.Child = nil
			root = child
		} else {
			prev = root
			root = root.Next
		}
	}
	return head
}
 
 