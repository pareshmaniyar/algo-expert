/**
 * @param {string[]} words
 * @return {string}
 */
/*
WON"T WORK, 20 min soln, CORRECT LOGIC, USE KAHN
- topological sort
- make adj List
    - ex: wrt - w: {r, t}, r: {t}
    - find n degree of each word - set
        - r: {w}, t: {w}
    - 
    - queue
        - pop
        - remove edges towards itself
        - check for 0 deg, push if 0
- kahn


*/

var alienOrder = function(words) {
    // init
    const [adj, towards] = getList(words);
    // queue
    const queue = [];
    let result = "";
    for(const [des, srcs] of Object.entries(towards)) {
        if(Object.keys(srcs).length === 0) {
            queue.push(des);
        }
    }
    while(queue.length != 0) {
        const el = queue.shift();
        const list = Object.keys(adj[el]);
        
    }
    if(queue.length != 0) return "";
};





