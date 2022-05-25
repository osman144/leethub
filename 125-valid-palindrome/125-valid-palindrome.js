/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Using built in libraries
//     let newStr = s.toLowerCase().replace(/[^A-Z0-9]/ig, "").split('').join('');
//     let reverse = newStr.split('').reverse().join('')
    
//     return(newStr === reverse);
    
    // Two pointer solution 
    s = s.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    let i = 0;
    let j = s.length-1;
    
    while(i<j){
        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i=i+1;
        j=j-1;
    }
    
    return true;
};