/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /** feel like this problem can either be sliding window
        depending on how you look at it.
        For me I'm using two pointers left and right that
        moves up the array and makes comparisons
    */ 
    let left = 0;
    let right = 1;
    let result = 0;
    
    while(right < prices.length){
        let profit = prices[right] - prices[left]; // 1-7 = -6
        if(prices[right] < prices[left]){
            // move left up
            left = right 
        }
        if(profit > result){
            result = profit;
        }
        right++;
    }
    
    return result; 
};