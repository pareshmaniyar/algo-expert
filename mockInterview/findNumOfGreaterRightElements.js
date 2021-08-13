class Node {
	constructor(data) {
		this.data = data
		this.left = null;
		this.right = null;
		this.count = 1;
	}
}

function findCounts(arr) {
	const len = arr.length;
const counts = Array(len).fill(0);
let tree = null;
for(let i = len - 1; i >= 0; i--) {
	const el = arr[i];
	counts[i] = getValueByPushing(el);
}
function getValueByPushing(el) {
	let node = new Node(el);
if(tree === null) {
		tree = node;
		return 0;
}
let count = {curr: 0};
recursivelyInsert(tree, el, count, null);
return count.curr;
}
recursivelyInsert(tree, el, count, parent) {
	if(tree === null) {
		let node = new Node(el);
		if(parent.data >= el) {
parent.left = node;
} else {
parent.right = node;
}
return;
}
	if(tree.data >= el) {
		tree.count += 1;
		recursivelyInsert(tree.left, el, count, tree);
} else {
	count.curr += tree.count;
recursivelyInsert(tree.right, el, count, tree);
}
}
return counts;
}

