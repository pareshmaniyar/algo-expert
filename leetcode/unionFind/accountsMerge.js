/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
/*

node {
    email: j@gmail.com
    name: John
}

Map: {
    email: node
}
2 ways
- sets
- store like name-index pair - WONT WORK

Sets


*/

function Node(name, email, index) {
    this.name = name;
    this.email = email;
    this.index = index;
    this.parent = this;
    this.rank = 0;
}

function findSet(node) {
    const head = node;
    while(node.parent != node){
        node = node.parent;
    }
    head.parent = node;
    return node;
}

function setUnion(node1, node2) {
    const parent1 = findSet(node1);
    const parent2 = findSet(node2);
    if(parent1 === parent2) return;
    if(parent1.rank >= parent2.rank) {
        parent2.parent = parent1;
        parent1.rank++;
    } else {
        parent2.parent = parent1;
        parent2.rank++;
    }
}

var accountsMerge = function(accounts) {
    const nodes = {};
    for(let j = 0; j < accounts.length; j++) {
        const account = accounts[j];
        const name = account[0];
        let parent = null;
        for(let i = 1; i < account.length; i++) {
            const email = account[i];
            const node = new Node(name, email, j);
            if(parent) {            
                setUnion(node, parent);
            } else {
                parent = node;
            }
            if(email in nodes) {
                setUnion(parent, nodes[email]);
            } else {
                nodes[email] = node;
            }
        }
    }
    const visited = {};
    for(const [email, node] of Object.entries(nodes)) {
        const parent = findSet(node);
        const uniqueParent = `${parent.name}${parent.index}`;
        if(uniqueParent in visited) {
            visited[uniqueParent].push(email);
        } else {
            visited[uniqueParent] = [];
        }
    }
    const result = [];
    for(const [nameIndex, emails] of Object.entries(visited)) {
        const [name, _] = nameIndex.split('$');
        result.push(name);
        emails.sort();
        for(let email of emails) {
            result.push(email);
        }
    }
    return result;
};


