/*
- ovverlapping
- AAAAACCCCCAAAAACCCCCAAAAACCCCC
S - O(n)
A-5C-5G-0T-0: [9, 19, 29]

Generate all
space - O(n), time - O(n ^ 2)
ROLLING HASH MIGH BE FASTER BUT BELOW CODE WORKS IN FIRST TIME!!!!
*/

/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    if(s.length <= 10) return [];
    const data = { A: 0, C: 0, G: 0, T: 0 };
    for(let i = 0; i < 9; i++) {
        data[s[i]]++;
    }
    const store = {};
    for(let i = 9; i < s.length; i++) {
        data[s[i]]++;
        storeValue(i, data, store);
        data[s[i - 9]]--;
    }
    const result = {};
    for(const arr of Object.values(store)) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                const seq1 = s.slice(arr[i] - 9, arr[i] + 1);
                const seq2 = s.slice(arr[j] - 9, arr[j] + 1);
                if(seq1 === seq2) {
                    result[seq1] = true;
                }
            }
        }
    }
    return Object.keys(result);
};

function storeValue(i, data, store) {
    const key = generatedKey(data);
    if(!(key in store)) {
        store[key] = [];
    }
    store[key].push(i);
}

function generatedKey(data) {
    let result = '';
    for(const [key, value] of Object.entries(data)) {
        result += `${key}-${value}|`;
    }
    return result;
}