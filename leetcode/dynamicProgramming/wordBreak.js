/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 catsanddog
 [cat, cats, and, sand, dog]
 - recursion(st = 0, s)
    - if(st = slen + 1) return true
    - from start to s.length;
        - if not present conitnie
        - if(recursion(i + 1, s)) return true
    - return false;
*/

var wordBreak = function(s, wordDict) {
    let map = {};
    for(const word of wordDict) {
        map[word] = true;
    }
    return recursiveSolution(0, s, map, {});
};

function recursiveSolution(start, s, map, cache) {
    //console.log(s);
    if(s in cache) return cache[s];
    if(s.length === 0 || s in map) return true;
    for(let i = start; i < s.length; i++) {
        const prospect = s.substring(0, i);
        if(!(prospect in map)) continue;
        if(recursiveSolution(start, s.substring(prospect.length), map, cache)) return true;
    }
    cache[s] = false;
    return false;
}


