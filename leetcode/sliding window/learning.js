/*
- make cache of substr, count of each and total unique count
- keep looping until last
    - keep adding until count is zero
    - compute
    - keep removing until count is changed to 1
        - compute
MANY CASES MISSING BELOW!!
        */

const str = "abdcfeabc";
const substr = "cba";

function findSmallestSubString(str, substr) {
    let map = getMap(substr);
    let left = 0, right = 0;
    let count = Object.keys(map).length;
    let min = str;
    while(right < str.length + 1) {
        while(count !== 0) {
            const el = str[right];
            if(el in map) {
                map[el]--;
                if(map[el] === 0) count--;
            }
            right++;
        }
        if(min.length > right - left) {
            min = str.slice(left, right);
        }
        const el = str[left];
        if(el in map) {
            map[el]++;
            if(map[el] === 1) count++;
        }
        left--;
    }
    return min;
}

function getMap(substr) {
    let result = {};
    for(const el of substr.split('')) {
        result[el] = result[el] || 0;
        result[el]++;
    }
    return result;
}

const result = findSmallestSubString(str, substr);
console.log(result);
