/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/*

- cal indegree of each node
- push 1 indegree into queue
- temp queue
- keep the while loop until one or two nodes remain
    - remove 1 degree
    - reduce indegree
    - add new 1 degree
- return queue nodes


*/

var findMinHeightTrees = function(n, edges) {
    if(n === 1 && edges.length === 0) return [0];
    const indegree = new Array(n).fill(0);
    const adjList = new Array(n);
    for(let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    for(const [node1, node2] of edges) {
        indegree[node1]++;
        indegree[node2]++;
        adjList[node1].push(node2);
        adjList[node2].push(node1);
    }
    let queue = [], temp = [];
    for(let i = 0; i < n; i++) {
        if(indegree[i] === 1) queue.push(i);
    }
    let result = [];
    while(queue.length !== 0) {
        result = [];
        while(queue.length > 0) {
            const el = queue.pop();
            result.push(el);
            for(const adj of adjList[el]) {
                indegree[adj]--;
                if(indegree[adj] === 1) {
                    temp.push(adj);
                }
            }
        }
        queue = temp;
        temp = [];
    }
    return result;
};

/*

Google Feedback:
1. Coding -> Good, quick, bugs but fixed oneself, communication
2. DSA -> Could have been better, took time
3. Design -> Better, couldn't appecriate the problem
4. Comprehension and communication -> good, grasp feedback
5. Efficacy -> lot of clarifying, discuss
6. Test Code -> showing eagarness

3 rounds ->
1 - Googlyness -> Hypothetical question
- client deliverable
- team work
- issue with manager
- believes in feedback

= Googlyness

*/
