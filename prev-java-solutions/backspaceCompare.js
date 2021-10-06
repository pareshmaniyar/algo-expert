/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    while(S.charAt(0) === '#') {
        if(S.length > 0) {
            S = S.substring(1);
        }
    }
    while(T.charAt(0) === '#') {
        if(T.length > 0) {
            T = T.substring(1);
        }
    }
    let s = S.length - 1;
    let t = T.length - 1;
    let max = s<t?s:t;
    let m;
    // "a#c"
    // "a##c"
    for(let i = 0; i <= max; i++) {
        try {
            // "abc#d" "abc##d"
            while(s >= 0 && S.charAt(s) === '#') {
                m = 0;
                while(s >= 0 && S.charAt(s) === '#') {
                    m = m + 1;
                    s = s - 1;
                }
                while(m > 0){
                    if(s < 0) {
                        break;
                    }
                    if(S.charAt(s) != '#') {
                        m = m - 1;
                    }
                    s = s - 1;
                }
                if(s < 0) {
                    break;
                }
            }
            while(t >= 0 && T.charAt(t) === '#') {
                m = 0;
                while(t >= 0 && T.charAt(t) === '#') {
                    m = m + 1;
                    t = t - 1;
                }
                while(m > 0){
                    if(s < 0) {
                        break;
                    }
                    if(T.charAt(t) != '#') {
                        m = m - 1;
                    }
                    t = t - 1;
                }
                if(t < 0) {
                    break;
                }
            }
            if(t < 0 || s < 0) {
                if(s < 0 && t < 0){
                    return true;
                } else {
                    return false;
                }
            }
            if(S.charAt(s) === T.charAt(t)) {
                s = s - 1;
                t = t - 1;
            } else {
                return false;
            }
        } catch(e) {
            console.log("error: ", e);
            return false;
        }
    }
    return true;
    
};
console.log(backspaceCompare("ac#d", "abc##d"));
