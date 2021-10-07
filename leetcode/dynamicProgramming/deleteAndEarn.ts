/*

[3,4,2]
2, 3, 4
2: 2, 3: 3, 4: 1
l = 4
p = 9

*/

function deleteAndEarn(nums: number[]): number {
    let max = nums.reduce((accum, num) => Math.max(accum, num), 0);
    let count = new Array(max + 1).fill(0);
    nums.forEach(num => {
        count[num]++;
    });
    let prev = 0, later = 0, temp;
    for(let i = 1; i < max + 1; i++) {
        temp = Math.max(count[i] * i + later, prev);
        later = prev;
        prev = temp;
    }
    return Math.max(prev, later);
};

