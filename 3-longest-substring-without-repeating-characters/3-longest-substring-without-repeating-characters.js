/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // hold unique values in this set 
    // O(n) space for the data structure
    // sliding window solution
    let mySet = new Set();
    let left = 0; // index
    let length = 0; // length 
    
    // iterate through string
    for(let right = 0; right<s.length; right++){
        while(mySet.has(s[right])){
            mySet.delete(s[left]);
            left = left + 1;
        }
        mySet.add(s[right]);
        length = Math.max(length, right-left+1)
    }
    
    return length;
    
};