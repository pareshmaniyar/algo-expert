/*


*/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

 var removeDuplicates = function(s, k) {
    const stack = [];// 
    for(let i = 0; i < s.length; i++) {
        let char = s[i];// [d1, e1
        const top = stack.length > 0 ? stack[stack.length - 1] : {char: -1};
        if(char === top.char) {
            top.count++;
            if(top.count === k) {
                stack.pop();
            }
        } else {
            stack.push({char, count: 1});
        }
    }
    // TODO
    return stack.reduce((accum, item) => {
        for(let i = 0; i < item.count; i++) {
            accum += item.char;
        }
        return accum;
    }, "");
};
