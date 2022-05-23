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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    // i.e. root = 1;
    let same = true;
    let traverse = (node) => {
        let currentVal = node.val;
        if(node && currentVal !== root.val) {
            same = false;
        };
        
        if(node.left && same) traverse(node.left);
        
        if(node.right && same) traverse(node.right);
    }

    traverse(root);

    return same;
};