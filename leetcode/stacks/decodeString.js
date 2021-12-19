/**
 * @param {string} s
 * @return {string}
 */
/*

- num
    res += num times recurse(closing brackets)

abc3[de2[f]]
3|2
de|f
abc


*/

var decodeString = function(s) {
    const numStack = [];
    const charStack = [];
    let result = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
            result += s[i];
        } else if(!isNaN(s[i])) {
            let num = '';
            while(!isNaN(s[i])) {
                num += s[i];
                i++;
            }
            numStack.push(parseInt(num));
            i--;
        } else if(s[i] === '[') {
            charStack.push(result);
            result = '';
        } else if(s[i] === ']') {
            const num = numStack.pop();
            let str = '';
            for(let j = 0; j < num; j++) {
                str += result;
            }
            result = charStack.pop() + str;
        }
    }
    return result;
};


