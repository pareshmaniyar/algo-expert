/*
next greater right
clarity:
- temp valid int
- zero length

approach
BF:
- T - O(n ^ 2), S - O(1)

Space
- 

Time
- S - O(n)
73,74,75,71,69,72
r to l
[75, 74, 73] top

[0, 0, 0, 0, 0, 0]
[72,]
- loop
    - pop until stack empty or el smaller
    - if stack not empty, update
- dry run
73,74,75,71,69,72
 0, 1, 2, 3, 4, 5
[5, ]

*/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const stack = [];
    const len = temperatures.length;
    const result = Array(len).fill(0);
    for(let i = len - 1; i >= 0; i--) {
        const temp = temperatures[i];
        while(stack.length != 0 && temperatures[stack[stack.length - 1]] <= temp) {
            stack.pop();
        }
        if(stack.length != 0) {
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return result;
};



