function longestAbsolutePath(path) {
	const tree = getTree(path);
	const result = {max: 0};
	dfsForMaxLength(tree, result, 0);
	return result.max;
}

function dfsForMaxLength(root, result, offset) {
	// base case
	if(root.data.includes('.') {
		result.max = Math.max(result.max, offset + root.data);
}
	const len = root.data.length + 1;
	for(const children of root.children) {
		dfsForMaxLength(root, result, len);
}
}


class Node {
	constructor(data) {
data: data,
children: []
}
}

function getTree(path) {
	const pseudoFileNames = path.split('\n');
	const levels = Array(pseudoFileNames.length).fill(0);
	for(let i = 0; i < pseudoFileNames.length; i++) {
		levels[i] = getOccurances(pesudoFileNames[i], '\t');
		pseudoFileNames[i] = pseudoFileNames[i].replaceAll('\t');
}
	const data = {};
for(let i = 0; i < pseudoFileNames.length; i++) {
	let dir = pseudoFileNames[i];
	const level = levels[i];
	if(!(level in data)) {
		data[level] = [];
}
	let node = new Node(dir);
data[level].push(node);
	if(level === 0) continue;
	const parent = data[level - 1][data[level - 1].length - 1];
	parent.children.push(node);
}
return data[0][0];
}

function getOccurances(str, searchString) {
	
}
