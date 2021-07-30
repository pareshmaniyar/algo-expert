/*
97 - 122
a - z

dnotq
[100,110,111,116,113]
[  1,100,


n
110 + 100 = 210
210 - 26 = 184

- convert [100,110,111,116,113]
       
116 + 

crime
114 + 100 = 214
214 - 26 * i = 110

110 - prev + 26 * i = ASCII 

n - prev + 26

r - 114
114 + 100 = 214 - 26 = 110
curr+ prev = n - 26 = encrpt
110 + 26 - 100
encrpt - prev + 26 = current
prev = decrpt[i - 1] + decrease;

i = 0
dec - 1
ascii
[c]
i = 1
dec = 1 + ASCII = 100
101
i = 2
dec = ASCII 114 + 101

dec = ASCII(prev) +

*/
let res = decrypt("dnotq");
console.log(res);
function decrypt(word) {
  let encrpt = getASCII(word.split(""));
  let result = [];
  let sub = 1;
  for(let i = 0; i < encrpt.length; i++) {
    let num = encrpt[i];
    num = num - sub;
    while(num < 97) {
      num += 26;
    }
    sub = num + sub;
    result.push(num);
  }
  return makeWord(result);
}

function makeWord(result) {
  let res = "";
  for(let i = 0; i < result.length; i++) {
    res += String.fromCharCode(result[i]);
  }
  return res;
}

function getASCII(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let ascii = arr[i].charCodeAt(0);
    result.push(ascii);
  }
  return result;
}


