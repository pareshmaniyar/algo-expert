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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    const serealize = {};
    traverse(root);
    function traverse(root) {
        if(root === null) return '#';
        const str = `N-${root.val}L${traverse(root.left)}R${traverse(root.right)}`;
        if(str in serealize) {
            serealize[str].flag = true;
        } else {
            serealize[str] = { node: root, flag: false };
        }
        return str;
    }
    const result = [];
    for(const values of Object.values(serealize)) {
        if(values.flag) {
            result.push(values.node);
        }
    }
    return result;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * BELOW IS A TLE SOLUTION
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    const nodes = [];
    function inorderTraversal(root) {
        if(root === null) return;
        inorderTraversal(root.left);
        nodes.push(root);
        inorderTraversal(root.right);
    }
    inorderTraversal(root);
    const result = [];
    for(let i = 0; i < nodes.length; i++) {
        for(let j = i + 1; j < nodes.length; j++)  {
            if(compareTree(nodes[i], nodes[j])) {
                let flag = true;
                for(let k = 0; k < result.length; k++) {
                    if(compareTree(result[k], nodes[i])) flag = false;
                }
                if(flag) result.push(nodes[i]);
            }
        }
    }
    function compareTree(node1, node2) {
        if(node1 === null || node2 === null) {
            return node1 === null && node2 === null;
        }
        if(node1.val !== node2.val) return false;
        return compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right);
    }
    return result;
};
