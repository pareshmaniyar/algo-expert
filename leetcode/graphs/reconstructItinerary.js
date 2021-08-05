/*
- n degree
SFO - 2
JFK - 1
ATL - 2
- brute force
PRETTY HARD, COULDN"T COMPLETE IN 20 min
- aux cal
    - adj list ordered by name A comes before B
        - JFK: [SFO, ATL], ATL: [JFK, SFO]
    - num of airports reached from each airport
        - JFK - 2, SFO - 1
    - total no of airports
    - pick one from airports that can reach all airports with lowest order by name
    - DFS on that airport
        - travel all the edge once - depth tickets
    - visited set for edges

- loop through all airports
    - 


*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

 var findItinerary = function(tickets) {
    // adj list
    const adjList = getAdjacencyList(tickets);
    // no of airports from each airport
    // select one
    // DFS
};

function getAdjacencyList(tickets) {
    const result = {};
    for(const [src, des] of tickets) {
        if(!(src in result)) {
            result[src] = [];
        }
    }
}





