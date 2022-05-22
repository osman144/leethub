/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort the 2d array
    // time complexity will be O(nlogn + n)
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    
    // output = [[1,3]]
    let output = [intervals[0]];
    
    
    for(let i=1; i<intervals.length; i++){
        // compare last value of output to first of current interval
        let lastEnding = output[output.length-1][1]
        if(intervals[i][0] <= lastEnding){
            // then there is an overlap;
            // find max imagine if you had [1, 5][2,4] have to get max of end 
            output[output.length-1][1] = Math.max(intervals[i][1], lastEnding);
        }else{
            output.push(intervals[i]);
        }
    }
    
    return output;
};