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
 var maxAncestorDiff = function(root) {
    const value = { max: -Infinity };
    const stack = [];
    traverseBST(root);
    function traverseBST(root) {
        if(root === null) return;
        if(stack.length === 0) {
            stack.push({ min: root.val, max: root.val });
        } else {
            let diff1 = stack[stack.length - 1].max - root.val;
            let diff2 = stack[stack.length - 1].min - root.val;
            if(diff1 < 0) diff1 *= -1;
            if(diff2 < 0) diff2 *= -1;
            if(value.max < diff1) value.max = diff1;
            if(value.max < diff2) value.max = diff2;
            const min = Math.min(stack[stack.length - 1].min, root.val);
            const max = Math.max(stack[stack.length - 1].max, root.val);
            stack.push({ min, max });
        }
        traverseBST(root.left);
        traverseBST(root.right);
        stack.pop();
    }
    return value.max;
};


