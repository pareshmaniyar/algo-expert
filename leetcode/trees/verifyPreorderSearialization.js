/*
stack = 9 | 3
count = 0 | 4
- all loop split(',')
    - if # 
        - inc count
        - check if count == 2
            - pop stack, count
            - inc last count by 1
        - continue
    - push to stack

BELOW DOESN'T WORK
*/

/**
 * @param {string} preorder
 * @return {boolean}
 */
//"9,3,4,#,#,1,#,#,2,#,6,#,#"
//"9,2,#,6,#,#"
var isValidSerialization = function(preorder) {
    if(preorder === "#") return true;
    const nums = preorder.split(',');
    const stack = [];
    const count = [];
    for(const el of nums) { // 9
        if(el === '#') {
            if(count.length < 1) return false;
            count[count.length - 1]++;
        } else {
            stack.push(el);
            count.push(0);
        }
        console.log(stack);
        while(count.length > 0 && count[count.length - 1] == 2) {
            count.pop();
            stack.pop();
            count[count.length - 1]++;
        }
        if(stack.length === 0 && el != nums[nums.length - 1]) return false;
    }
    console.log(stack);
    return stack.length === 0;
};

