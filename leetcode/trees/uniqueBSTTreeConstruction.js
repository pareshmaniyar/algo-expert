/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
- n = 1,return node(1)
- n = 2, 0,1,1 | 1,1,0
- n = 3, 0,1,2 | 1,1,1 | 2, 1, 0
           2       1        2
    1     1        2      3     3
     \     \      / \    /     /
      2     3    1   3  1     2
       \    /            \   /
        3  2              2 1
[1, 2, 3]
st = 1 end = 3
r = 1 st = 1, end = -1, st = 2, end = 3
r = 2 st = 1, end = 1, st = 3, end = 3
r = 3 st = 1, end = 2, st = 4, end = 3
st = 1 end = 4

*/

/**
 * @param {number} n
 * @return {TreeNode[]}
 */

 var generateTrees = function(n) {
    return recursiveTreeConstruction(1, n);
};

function recursiveTreeConstruction(start, end) {
    if(start > end) return [null];
    if(start === end) return [new TreeNode(start)];
    let result = [];
    for(let i = start; i <= end; i++) {
        let left = recursiveTreeConstruction(start, i - 1);
        let right = recursiveTreeConstruction(i + 1, end);
        for(const leftTree of left) {
            for(const rightTree of right) {
                let root = new TreeNode(i);
                root.left = leftTree;
                root.right = rightTree;
                result.push(root);
            }
        }
    }
    return result;
}






