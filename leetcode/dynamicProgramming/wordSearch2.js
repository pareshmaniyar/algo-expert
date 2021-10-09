/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
	let n = board.length;
	if(n < 1) return [];
	let m = board[0].length;
	let w = words.length;
	let result = {};
	function getAllValidValues(i, j) {
		let res = [];
		let iVal = [i + 1, i - 1, i, i];
		let jVal = [j, j, j + 1, j - 1];
		for(let k = 0; k < iVal.length; k++){
            const iT = iVal[k], jT = jVal[k];
            if(iT > -1 && jT > -1 && iT < n && jT < m) {
                res.push([iT, jT]);
            }
        }
        //console.log(res);
		return res;
	}
    function buildTrie(words) {
        let result = {};
        for(const word of words) {
            let ref = result;
            for(const letter of word) {
                if(!(letter in ref)) {
                    ref[letter] = {};
                }
                ref = ref[letter];
            }
            ref['*'] = word;
        }
        return result;
    }
    const trie = buildTrie(words);
	function checkForWord(i, j, trie, cache) {
        //console.log(i, j, board[i][j], JSON.stringify(trie));
        if(cache[[i,j].join('')]) return;
        cache[[i,j].join('')] = true;
		if(board[i][j] in trie) {
            trie = trie[board[i][j]];
            //console.log(i, j, board[i][j], JSON.stringify(trie));
            if('*' in trie) {
                result[trie['*']] = true;
            }
            let neighbours = getAllValidValues(i, j);
            // console.log(neighbours);
            for(const [x,y] of neighbours) {
                checkForWord(x, y, trie, cache);
            }
        }
        cache[[i,j].join('')] = false;
        //console.log("---------------");
	}
	
	for(let i = 0; i < n; i++) {
		for(let j = 0; j < m; j++) {
			checkForWord(i, j, trie, {});
		}
	}
	
	return Object.keys(result)
}

