/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0; 
    let right = numbers.length-1; // 3
    
    while(left < right){
        let currentSum = numbers[left] + numbers[right];
        if(currentSum > target){
            right = right - 1;
        }else if (currentSum < target){
            left = left + 1;
        }else{
            // based 1-indexed solution, weird right? anyway 
            return [left+1, right + 1]
        }
    }
        
    return [];
};