/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 s1, s2
 min contiguous substring of s1
 abcdebdde, bde
 if LCS is not bde return "";
 for each letter start and end
    - reach till end
    - if more than min store
 
 */

    var minWindow = function(s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;
        let minLength = s1 + s2;
        for(let i = 0; i < len1; i++) {
            if(s1[i] === s2[0]) {
                let pt1 = 0, pt2 = 0;
                while(pt1 < len1 && pt2 < len2) {
                    if(s1[i + pt1] === s2[pt2]) {
                        pt1++;pt2++;
                    } else {
                        pt1++;
                    }
                    if(pt1 > minLength.length) break;
                }
                // console.log(pt2, s1.substring(i, i + pt1));
                if(pt2 === len2 && minLength.length > pt1) {
                    minLength = s1.substring(i, i + pt1);
                }
            }
        }
        return minLength.length === len1 + len2 ? "" : minLength;
    };
    