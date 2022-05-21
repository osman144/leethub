/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    // can possibly use a hashmap to keep track 
    let stack = [];
    let bracket = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    
    for(let char of str){
        if(bracket[char]){
            stack.push(bracket[char])
        }else{
            if(stack.pop() !== char) return false;
        }
    }
    
    
    return (!stack.length)
    
};