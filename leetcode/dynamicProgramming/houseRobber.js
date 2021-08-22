/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let max = 0, adj, prev;
    const dp = Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        adj = dp[i - 1] || 0;
        prev = dp[i - 2] || 0;
        dp[i] = Math.max(adj, prev + nums[i]);
    }
    //console.log(dp);
    return dp[nums.length - 1];
};

/*
prev 2  1,2,3,1
before 4

[2,1,1,2]
 2,2,3,0

newVal = 
prev = 2
before = 3

asdfoiuqwhfiouhewifu
['adasf', 'asdasdqwe', 'piowqiroiqwr', 'ryewiuoqowieyr']


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let adj = 0, prev = 0, temp1;
    for(let i = 0; i < nums.length; i++) {
        temp1 = prev;
        prev = adj;
        adj = Math.max(temp1 + nums[i], prev);
        //console.log(prev, adj);
    }
    return Math.max(prev, adj);
};

/*
prev 2  1,2,3,1
before 4

[2,1,1,2]
 2,2,3,0

newVal = 
prev = 2
before = 3

asdfoiuqwhfiouhewifu
['adasf', 'asdasdqwe', 'piowqiroiqwr', 'ryewiuoqowieyr']


*/
