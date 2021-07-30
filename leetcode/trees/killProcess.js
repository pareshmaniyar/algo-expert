/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
/*
[1,3,10,5] id
[3,0, 5,3] p

data = {
0: [3],
3: [1, 5],
5: [10]
}
*/

var killProcess = function(pid, ppid, kill) {
    const data = {};
    for(let i = 0; i < ppid.length; i++) {
        data[ppid[i]] = data[ppid[i]] || [];
        data[ppid[i]].push(pid[i]);
    }
    return helper(kill, data);
};

function helper(kill, data) {
    let result = [];
    let queue = [kill];
    while(queue.length !== 0) {
        const process = queue.pop();
        let deps = data[process] || [];
        for(let dep of deps) {
            queue.push(dep);
        }
        result.push(process);
    }
    return result;
}