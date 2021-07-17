/*
Given a matrix of dimension m*n where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:  
0: Empty cell
1: Cells have fresh oranges
2: Cells have rotten oranges
Determine what is the minimum time required so that all the oranges become rotten. A rotten orange at index [i,j] can rot other fresh orange at indexes [i-1,j], [i+1,j], [i,j-1], [i,j+1] (up, down, left and right). If it is impossible to rot every orange then simply return -1.
Input:  arr[][C] = { {2, 1, 0, 2, 1},
                     {1, 0, 1, 1, 1},
                     {1, 0, 0, 2, 1}};
				{ {2, 2, 0, 2, 2},
                     {2, 0, 2, 2, 2},
                     {2, 0, 0, 2, 2}};
Output:
All oranges can become rotten in 2-time frames.
Explanation: 
At 0th time frame:
 {2, 1, 0, 2, 1}
 {1, 0, 1, 2, 1}
 {1, 0, 0, 2, 1}

At 1st time frame:
 {2, 2, 0, 2, 2}
 {2, 0, 2, 2, 2}
 {1, 0, 0, 2, 2}

At 2nd time frame:
 {2, 2, 0, 2, 2}
 {2, 0, 2, 2, 2}
 {2, 0, 0, 2, 2}


Input:  arr[][C] = { {2, 1, 0, 2, 1},
                     {0, 0, 1, 2, 1},
                     {1, 0, 0, 2, 1}};
Output:
All oranges cannot be rotten.
Explanation: 
At 0th time frame:
{2, 1, 0, 2, 1}
{0, 0, 1, 2, 1}
{1, 0, 0, 2, 1}

At 1st time frame:
{2, 2, 0, 2, 2}
{0, 0, 2, 2, 2}
{1, 0, 0, 2, 2}

At 2nd time frame:
{2, 2, 0, 2, 2}
{0, 0, 2, 2, 2}
{1, 0, 0, 2, 2}
...
The 1 at the bottom left corner of the matrix is never rotten.
- time
- count = 
- rottenQueue not empty
- 1, 2, 3 - rottenQueue
- toBeRotten - pushing adjacent rottenQueue by emptying it
- rottenQueue - toBeRotten
- toBeRotten = []
- time++
if count != 0 return -1
return time;
S - O(n), T - O(n), n = M * N

getValidAdjacentElements
	- get 4 directions
	- they are 1
	- make the value 2
	- count--;
- return array

*/

function getTimeToRot(matrix) {
	// initialize few variables
	let rottenQueue = {};
	let toBeRotten = [];
	let count = { count: 0 };
	let time = 0;
	for(let i = 0; i < matrix.length; i++) {
		for(let j = 0; j < matrix[0].length; j++) {
			if(matrix[i][j] === 1) freshOranges++;
			if(matrix[i][j] === 2) rottenQueue.push([i, j]);
}
	}
	// while empty and fill in other queue
           // 2 1 
	while(rottenQueue.length != 0) {
		while(rottenQueue.length != 0) {
	toBeRotten.push(getValidAdjacentElements(rottenQueue.pop(), count));
}
rottenQueue = tobeRotten;
tobeRotten = [];
if(rottenQueue.length == 0) break;
time++;
}
	// edge case
	if(count.count != 0) return -1;
	return time;
}
