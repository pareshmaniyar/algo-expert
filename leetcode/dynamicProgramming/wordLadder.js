/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 - psuedo code
 - recursion, cache
    - base if word is endword, return [[word]]
    - loop
        - arr = recursion(oneDistance(word))
        - loop arr
            - push current word, arr
        - push to result
    - return cache[word] = result;
    DOESN"T WORK!
 */

    var findLadders = function(beginWord, endWord, wordList) {
        const oneDistance = getOneDistance([...wordList, beginWord]);
        console.log(oneDistance);
        const memo = {[endWord]: [[endWord]]};
        let explore = [beginWord];
        const visited = {[beginWord]: null};
        let result = [];
        let flag = false;
        while(explore.length !== 0) {
            console.log(explore);
            let temp = [];
            while(explore.length !== 0) {
                const nextNode = explore.pop();
                for(let adjNode of oneDistance[nextNode]) {
                    if(adjNode === endWord) {
                        const res = buildParent(nextNode, visited, endWord);
                        console.log("res: ", res);
                        result.push(res);
                        flag = true;
                        continue;
                    }
                    if(adjNode in visited) continue;
                    temp.push(adjNode);
                    visited[adjNode] = nextNode;
                }
            }
            if(flag) break;
            explore = temp;
        }
        return result;
        // return iterativeBFS(beginWord, endWord, oneDistance, null, memo);
    };
    
    function buildParent(adjNode, visited, endWord) {
        let result = [endWord];
        while(adjNode !== null) {
            result.push(adjNode);
            adjNode = visited[adjNode];
        }
        return result.reverse();
    }
    
    function iterativeBFS(beginWord, endWord, oneDistance, parent, memo) {
        if(beginWord in memo) return memo[beginWord];
        let result = [];
        for(const adjWord of oneDistance[beginWord]) {
            if(adjWord === parent) continue;
            const paths = recursiveDFS(adjWord, endWord, oneDistance, beginWord, memo);
            for(const path of paths) {
                result.push([adjWord, ...path]);
            }
        }
        memo[beginWord] = result;
        return result;
    }
    
    function getOneDistance(wordList) {
        let result = {};
        for(const word of wordList) {
            result[word] = [];
            for(const prospect of wordList) {
                if(isOneDistanceAway(prospect, word)) {
                    result[word].push(prospect);
                }
            }
        }
        return result;
    }
    
    function isOneDistanceAway(prospect, word, flag = true) {
        let temp = prospect;
        for(let char of word.split('')) {
            temp = temp.replace(char, '');
        }
        return flag ? (
            isOneDistanceAway(word, prospect, false)
                && temp.length === 1)
            : temp.length === 1;
    }
    
    