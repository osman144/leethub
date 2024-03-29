/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // if both empty
    if (p === null && q === null) return true;
    // if either node empty
    if (p === null || q === null) return false;
    
    if(p.val !== q.val ) return false;
    
    // return (True and True)
    return (isSameTree(p.left, q.left) && isSameTree(p.right,q.right))
    
    
    // time complexity O(P + Q) worst case, 
    // would have to traverse each node atleast once
    // 

};
