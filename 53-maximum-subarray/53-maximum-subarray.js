/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = maxSum;
    
    for(let i=1; i<nums.length; i++){
        // find max 
        currentSum = Math.max(nums[i] + currentSum, nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    };
    
    return maxSum;
};