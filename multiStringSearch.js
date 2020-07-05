class GenerateTries {
	constructor(string){
		this.root =  {};
		this.populateTrie(string);
	}
	populateTrie(string) {
		let n = string.length;
		let node = this.root;
		for(let j = 0; j < n; j++) {
			if(!node.hasOwnProperty(string[j])) {
				node[string[j]] = {};
			}
			node = node[string[j]];
		}
		node["*"] = string;
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
  let trie = new GenerateTries('');
	let res = [];
	smallStrings.forEach( string => {
		trie.populateTrie(string)
	});
	let cache = {};
	let n = bigString.length;
	for(let i = 0; i < n; i++) {
		let node = trie.root;
		for(let j = i; j < n; j++) {
			if(!node.hasOwnProperty(bigString[j])){
				break;
			}
			node = node[bigString[j]];
			if(node.hasOwnProperty('*')) {
				cache[node['*']] = true;
			}
		}
	}
	smallStrings.forEach(string => {
		res.push(cache.hasOwnProperty(string));
	});
	return res;
}

// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;