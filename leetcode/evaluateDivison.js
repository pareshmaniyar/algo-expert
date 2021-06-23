/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function(equations, values, queries) {
    let adjacencyArray = getAdjacencyArray(equations, values);
    const result = [];
    for(let i = 0; i < queries.length; i++) {
        result.push(searchForDestinationDFS(queries[i][0], queries[i][1], adjacencyArray, {}));
    }
    return result;
};

function searchForDestinationDFS(start, end, adjacencyArray, visited) {
    if(!(start in adjacencyArray && end in adjacencyArray)) return -1;
    if(start === end) return 1;
    if(start in visited) return -1;
    visited[start] = true;
    const children = adjacencyArray[start];
    for(let i = 0; i < children.length; i++) {
        const result = searchForDestinationDFS(children[i].des, end, adjacencyArray, visited);
        if(result != -1) {
            return children[i].value * result;
        }
    }
    return -1;
}

function getAdjacencyArray(equations, values) {
    let result = {};
    equations.forEach((equation, index) => {
        const value = values[index];
        const [numerator, denominator] = equation;
        if(!(numerator in result)) {
            result[numerator] = [];
        }
        result[numerator].push({
            des: denominator,
            value
        });
        if(!(denominator in result)) {
            result[denominator] = [];
        }
        result[denominator].push({
            des: numerator,
            value: (1 / value)
        });
    });
    return result;
}

