/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 - great, rgeat
 - geat
 - g reat |gr eat
 - abcde, caebd
 - great rgeat
 - gr|ea|t gr|t|ae
    i = 2, n = 5
    2, 3 || 3, 2
    0, 2 | 3, len || 0, len - i + 1 | len - i + 1, len
 */

    var isScramble = function(s1, s2) {
        return recursiveBrainScramble(s1, s2, {});
    };
    /*
    great rgeat
    i = 1
    g,reat|r,geat
    gr,eat|rg,eat
    gr rg
    g,r|r,g
    
    */
    function recursiveBrainScramble(s1, s2, cache) {
        const combination = `1:${s1}-2:${s2}`;
        let len = s1.length;
        if(combination in cache) return cache[combination];
        if(s1 === s2) return true;
        for(let i = 1; i < len; i++) {
            const s1left = s1.substring(0, i);
            const s1right = s1.substring(i);
            let s2left = s2.substring(0, i);
            let s2right = s2.substring(i);
            cache[combination] = recursiveBrainScramble(s1left, s2left, cache) &&
                recursiveBrainScramble(s1right, s2right, cache);
            if(cache[combination]) return true;
            s2left = s2.substring(0, len - i);
            s2right = s2.substring(len - i);
            cache[combination] = recursiveBrainScramble(s1left, s2right, cache) &&
                recursiveBrainScramble(s2left, s1right, cache);
            if(cache[combination]) return true;
        }
        return false;
    }
    
    