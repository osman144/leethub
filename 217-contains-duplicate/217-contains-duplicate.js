/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mySet = new Set();
    
    for(num of nums){
        if(mySet.has(num)){
            // found duplicate
            return true
        }else{
            mySet.add(num)
        }
    }
    
    return false;
};