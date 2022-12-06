/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let curr = new Set();

    for(let i=0; i<nums.length; i++){
        if(curr.has(nums[i])){
            return true;
        }else{
            curr.add(nums[i])
        }
    }

    return false;
};