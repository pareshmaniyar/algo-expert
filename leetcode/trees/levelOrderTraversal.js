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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let queue = [root], temp = [];
    let result = [], localResult;
    while(queue.length > 0) {
        localResult = [];
        while(queue.length > 0) {
            let pop = queue[0];
            queue = queue.slice(1);
            if(!pop) continue;
            localResult.push(pop.val);
            temp.push(pop.left);
            temp.push(pop.right);
        }
        if(localResult.length > 0)
            result.push(localResult);
        queue = temp;
        temp = [];
    }
    return result;
};
