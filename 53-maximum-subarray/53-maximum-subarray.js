/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    let left = 0;
    let sum = nums[0];
    let windowSum = nums[0]
    
    for(let right=1; right<nums.length;right++){
        windowSum = windowSum + nums[right] // -2+1
        windowSum = Math.max(windowSum, nums[right]) // compare current element val with windowSum
        
        sum = Math.max(sum, windowSum);
    }
    
    
    return sum;
};






























// var maxSubArray = function(nums) {
//     let maxSum = nums[0];
//     let currentSum = maxSum;
    
//     for(let i=1; i<nums.length; i++){
//         // find max 
//         currentSum = Math.max(nums[i] + currentSum, nums[i]);
//         maxSum = Math.max(currentSum, maxSum);
//     };
    
//     return maxSum;
// };