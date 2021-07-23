/*
Jay - WIN

- [2, 100, 50, 120, 1000], newBudget = 190
- 47, [2, 47, 47, 47, 47] = sum = 190
[1, 100, 10] sum = 5 = newBudget
[1, 2, 2] cap = 2
[2, 1, 1] 1
[1, 0, 0] cap = 1
[0, 1, 0]
[0, 0, 1]
- small
[4, 5, 6] 1
[0, 0, 1] [1, 0, 0]
[4, 5, 6] 4
[4, 0, 0]

[4, 5, 6] - 10
[4, 5, 1] - 10
[1, 3, 6]

[10, 9, 8]
[4, 5, 6, 8, 10], n = 10
[4, 5, 1, 0, 0 ] 10 - 4 - 5 - cap = 5

[2, 100, 50, 120, 1000] 190
[2, 50, 100, 120, 1000] 
[2, 50, 100, 32, 0]      cap = 100
190 - 2 - 50 - 100 - 
Hello! there was a power cut here, I am back! One sec, wifi is getting connected.
I am thinking about the problem meanwhile
One minute
[2, 50, 100, 120, 1000] 1272|

[2, 50, 100, 120, 1000] - 190
[2, 50, 50, 50, 50] cap = 100 - DON"T DISCARD APPROACHES
previous budget that was higher than cap should be cap
190 - 152 = 38
[2, 50, 100, 120, 1000]
[2, 50, 100, 100, 100] - newBudget
[2, 50, 50, 100, 100]
O(n)

[2, 50, 50, 50, 50]
1272
1000 - 999 = 1271
999 - 
- loop current <= newBudget
  - cap--;
  - loop
    - all to the cap
- return cap
Time - O(n ^ 2)

1272 - 190 = 
currentBudget
- loop from end to start n-1 to 1
  - i
  - maxSubtraction = arr[i] - arr[i - 1]
  - currentBudget - maxSubtraction * len - i > newBudget continue;also update
  - currentBudget - newBudget = minAmountToReduce = 19
  - valueToReduce = (minAmout / i ) + 1 19 / i(5) = 3 + 1
  - return cap = arr[i] - valueToReduce;
- return 0;
190
o(n*log(n))
Okay.

*/

function findGrantsCap(grantsArray, newBudget) {
    const len = grantsArray.length;
    grantsArray.sort((a, b) => (a - b));
    let currentSum = 0;
    let cap = -Infinity;
    for(let i = 0; i < len; i++) {
      currentSum += grantsArray[i];
      cap = Math.max(cap, grantsArray[i]);
    }
    for(let i = len - 1; i >= 0; i--) {
      if(currentSum <= newBudget) break;
      let current = grantsArray[i];
      let next = grantsArray[i - 1] || 0;
      let maxValueToReduce = current - next;// [2, 50, 50, 50, 50]
      if(currentSum - (maxValueToReduce * (len - i)) > newBudget) {
        currentSum = currentSum - maxValueToReduce * (len - i);
        continue;
      }
      let minAmount = currentSum - newBudget;
      let amountToReduce = minAmount / (len - i);
      return current - amountToReduce;
    }
    return cap;
  }
  