/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    // can possibly use a hashmap to keep track 
    let stack = [];
    
    for(let char of str){
        if(char === '(') stack.push(')');
        
        else if(char === '{') stack.push('}');
        
        else if(char === '[') stack.push(']');
        
        else if(!stack.length || stack.pop() !== char) return false;
    };
    
    return stack.length === 0;
};