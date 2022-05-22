/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;
    
    for(num of nums){
        if(currSum < 0){
            currSum = 0;
        };
        currSum = currSum + num;
        maxSub = Math.max(maxSub, currSum);
    };
    
    return maxSub;
    
};