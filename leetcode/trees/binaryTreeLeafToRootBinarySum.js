/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
current
traverse
    - null check
    - if leaf
        - add to result = double current and add leaf val
        - return
    - add val to current
    - traverse left
    - traverse right
    - remove val from current
*/
var sumRootToLeaf = function(root) {
    const ref = { current: 0, result: 0 };
    traverse(root, ref);
    return ref.result;
};

function traverse(root, ref) { // 1 | 1
    if(!root) return;
    if(!root.left && !root.right) {
        ref.result += ((ref.current) * 2) + root.val; // 4 + 5 + 6 + 7
        return;
    }
    let temp = ref.current; // 1
    ref.current = (ref.current * 2) + root.val; // 3
    traverse(root.left, ref); // 
    traverse(root.right, ref); // 1
    ref.current = temp;
}

