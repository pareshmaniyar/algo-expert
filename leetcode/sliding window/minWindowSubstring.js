/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    return findSmallestSubString(s, t);
};

function findSmallestSubString(str, substr) {
    let map = getMap(substr);
    let left = 0, right = 0;
    const len = str.length;
    let count = Object.keys(map).length;
    let min = str + "$";
    while(right < len + 1) {
        while(count !== 0 && right < len) {
            const el = str[right];
            if(el in map) {
                map[el]--;
                if(map[el] === 0) count--;
            }
            right++;
        }
        if(count !== 0) break;
        if(min.length > right - left) {
            min = str.slice(left, right);
        }
        const el = str[left];
        if(el in map) {
            map[el]++;
            if(map[el] === 1) count++;
        }
        left++;
    }
    return min === str + '$' ? '': min;
}

function getMap(substr) {
    let result = {};
    for(const el of substr.split('')) {
        result[el] = result[el] || 0;
        result[el]++;
    }
    return result;
}