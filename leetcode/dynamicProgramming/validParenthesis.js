/**
 * @param {string} s
 * @return {number}
 ))()()(())()
 000202002402
 (())
 0024
 ()(())
 020026
 
 */
 var longestValidParentheses = function(s) {
    const slen = s.length;
    if(slen === 0) return 0;
    const stack = [];
    const validParenthesis = new Array(slen).fill(0);
    let maxCount = 0;
    for(let i = 0; i < slen; i++) {
        if(s[i] === '(') {
            stack.push(i);
            continue;
        }
        if(stack.length === 0) continue;
        const lastOpenIdx = stack.pop();
        const prevNumber = validParenthesis[lastOpenIdx - 1] || 0;
        validParenthesis[i] = i - lastOpenIdx + 1 + prevNumber;
        maxCount = Math.max(validParenthesis[i], maxCount);
    }
    return maxCount;
};

