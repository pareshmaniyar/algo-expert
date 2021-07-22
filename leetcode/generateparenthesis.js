/**
 * @param {number} n
 * @return {string[]}
 1  - ()
 2 - ()()   (())
 3 - ()()() ((())) ()(()) (())() (()())

"" 3
() 2
(()) 1 |  ()() 1
(()()) 0 ((())) 0 (())() 0 | (())() 0 ()(()) 0 ()()() 0

*/
var generateParenthesis = function(n) {
    let result = {};
    addParenthesis("", n, result, {});
    return Object.keys(result);
};

function addParenthesis(baseValue, n, result, cache) {
    if(baseValue in cache) return;
    if(n === 0) {
        result[baseValue] = true;
        return;
    }
    const openingIndex = [];
    let currentSearchIndex = 0;
    for(let i = 0; i < baseValue.length; i++) {
        let index = baseValue.indexOf('(', currentSearchIndex);
        if(index === -1) break;
        openingIndex.push(index);
        currentSearchIndex = index + 1;
    }
    openingIndex.push(baseValue.length);
    for(let i = 0; i < openingIndex.length; i++) {
        const leftSubstring = baseValue.substring(0, openingIndex[i] + 1);
        const rightSubstring = baseValue.substring(openingIndex[i] + 1);
        const newBaseString = `${leftSubstring}()${rightSubstring}`;
        addParenthesis(newBaseString, n - 1, result, cache);
    }
    cache[baseValue] = true;
}
