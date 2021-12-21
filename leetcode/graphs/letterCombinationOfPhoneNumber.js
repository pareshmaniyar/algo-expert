/**
 * @param {string} digits
 * @return {string[]}
 */
/*

- 

*/

const options = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
}

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    return wrapperRecursion(digits);
};

function wrapperRecursion(digits) {
    // 23
    if(digits === "") return [""];
    const option = options[digits[digits.length - 1]]; // def, abc
    digits = digits.slice(0, digits.length - 1);
    const arr = wrapperRecursion(digits);
    // 2
    const result = [];
    for(const sol of arr) {
        for(const el of option) {
            result.push(sol + el);
        }
    }
    return result;
}

