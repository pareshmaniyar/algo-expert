/**
 * @param {number} n
 * @return {string[]}
 */
/*
1 = ["()"]
2 = ["()()", "(())"]
3 = ["()()()", "(())()", "()(())", "((()))"]
n
(), ((

""

- loop from 1 to n
    - 

*/

var generateParenthesis = function(n) {
    const result = [];
    function dfs(str, open, close) {
        if(open > close) return;
        if(open === 0 && close === 0) {
            result.push(str);
        }
        if(open > 0) dfs(str + '(', open - 1, close);
        if(close > 0) dfs(str + ')', open, close - 1);
    }
    dfs("", n, n);
    return result;
};


