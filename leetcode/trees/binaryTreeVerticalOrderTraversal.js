/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
l = 0
left = -1
right 1
map: {}, min, max
1: [3, 15]
0: [9],
2: [20],
3:[7]
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalOrder = function(root) {
    let stack = [];
    let aux = [];
    let data= {};
    if(root === null) return [];
    stack.push([root, 0]);
    let min = +Infinity, max = -Infinity;
    while(stack.length != 0) {
        while(stack.length != 0) {
            const [node, level] = stack.pop();
            if(node.left != null) {
                aux.push([node.left, level - 1]);
            }
            if(node.right != null) {
                aux.push([node.right, level + 1]);
            }
            if(!(level in data)) {
                data[level] = [];
            }
            data[level].push(node.val);
            min = Math.min(min, level);
            max = Math.max(max, level);
        }
        while(aux.length != 0) {
            stack.push(aux.pop());
        }
    }
    return buildResult(data, min, max);
}

function buildResult(data, min, max) {
    const result = [];
    for(let i = min; i <= max; i++) {
        result.push(data[i]);
    }
    return result;
}
