/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next = null
    
    while(current){
        next = current.next; // 2
        current.next = prev; // null <- 1
        prev = current; // 1
        current = next; // 2
    }
    
    return prev;
};