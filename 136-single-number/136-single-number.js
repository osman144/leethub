/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // no extra memory, so needs to be O(1)
    let res = 0;
    for(let num of nums){
        res = num ^ res
    }
    
    return res
};