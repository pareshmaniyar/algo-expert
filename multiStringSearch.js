class GenerateTries {
	constructor(string){
		this.root =  {};
		this.populateTrie(string);
	}
	populateTrie(string) {
		let n = string.length;
		for(let i = 0; i < n; i++){
			let node = this.root;
			for(let j = i; j < n; j++) {
				if(!node.hasOwnProperty(string[j])) {
					node[string[j]] = {};
				}
				node = node[string[j]];
			}
			node["*"] = true;
		}
	}
	contains(string){
		let n = string.length;
		let node = this.root;
		for(let i = 0; i < n; i++) {
			if(!node.hasOwnProperty(string[i])) {
				return false;
			}
			node = node[string[i]];
		}
		return true;
	}
}
function multiStringSearch(bigString, smallStrings) {
  let trie = new GenerateTries(bigString);
	let res = [];
	smallStrings.forEach( string => {
		res.push(trie.contains(string));
	});
	return res;
}

// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;