/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastPointer = head
    let slowPointer = head
    
//     while(fastPointer!== null){
//         lagPointer = lagPointer.next
    
//         if(fastPointer.next === null) return false
//         //travels twice as fast as lagging pointer. if a cycle exists,
//         //it will equal the lagging pointer at some point 
//         fastPointer = fastPointer.next.next
//         if(fastPointer === lagPointer) return true
//     }    
    while(fastPointer !== null){
        if(fastPointer.next === null || fastPointer.next.next === null) return false;
        slowPointer = slowPointer.next // move 1 node
        fastPointer = fastPointer.next.next // move 2 nodes

        if(slowPointer === fastPointer){
          return true;
        }
    }
    
    return false

};