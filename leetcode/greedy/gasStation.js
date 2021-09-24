/*

- sum(gas) < sum(cost) return -1
fuel = 0
start
Brute force:
- loop start from 0 to n
    - curr = i
    - fuel = gas[i], curr
    - while(fuel < cost[curr])
        - fuel = fuel - cost[curr] + cost[(curr + 1) % n]
        - curr = (curr + 1) % n
        - if(curr === i) return i
- return -1

1,2,3,4,5
3,4,5,1,2
2,2,2,-3,-3
-2,-2,-2,3,3

Right to left:
1,2,3,4,5
3,4,5,1,2
-3,2,2,2,-3



*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 function sum(arr) {
    return arr.reduce((accum, item) => (accum + item));
}

var canCompleteCircuit = function(gas, cost) {
    let tank = 0, start = 0, sum = 0;
    for(let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        sum += gas[i] - cost[i];
        if(tank < 0) {
            start = i + 1;
            tank = 0
        }
    }
    return sum < 0 ? -1 : start;
};



