/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.toLowerCase().replace(/[^A-Z0-9]/ig, "").split('').join('');
    let reverse = newStr.split('').reverse().join('')
    
    return(newStr === reverse);
};