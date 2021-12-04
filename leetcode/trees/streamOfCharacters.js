/*



*/
/**
 * @param {string[]} words
 */

 function getTrie(words) {
    const result = {};
    for(const word of words) {
        let ref = result;
        for(const letter of word.split('')) {
            if(!(letter in ref)) {
                ref[letter] = {};
            }
            ref = ref[letter];
        }
        ref['*'] = word;
    }
    return result;
}

var StreamChecker = function(words) {
    this.trie = getTrie(words);
    this.context = [];
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    const context = this.context;
    const trie = this.trie;
    const newContext = [];
    context.push(trie);
    let flag = false;
    for(let i = 0; i < context.length; i++) {
        if(letter in context[i]) {
            context[i] = context[i][letter];
            newContext.push(context[i]);
            if('*' in context[i]) {
                flag = true;
            }
        } else {
            context[i] = null;
        }
    }
    this.context = newContext;
    return flag;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */