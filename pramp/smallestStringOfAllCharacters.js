/*
4:42
xxyyzyxabc - zyx
xxyyz
xxyyxz
xz

x: 0, y: 1, z: 0

zyx
x:1,y:-1,z:0
l = 0, r = 0
map = {x: 1, y: 1, z: 1}
count = 3
- loop r === n
  - keep inc r until valid
    - loop add until all the values <= zero
  - store min length, str
  - while count becomes 1
    - left++
time- O(n)
space - O(k) k = arr.length

x,y,z
abcdefg
Feedback:
1. USE bruteforce
2. debugging should improve
3. Good communication
4. Practice sliding window

*/
const res = getShortestUniqueSubstring(['A'], 'AB');
console.log("res:", res, "asd");
function getShortestUniqueSubstring(arr, str) {
  const map = {};
  for(const char of arr) {
    map[char] = 1;
  }
  let left = 0, right = 0, count = arr.length, maxLen = 0, result = "";
  while(right < str.length) {
    // inc right until valid
    // count = 0, map = {x: 0, y: 0, z: 0}, xyz
    while(right < str.length) {
      const char = str[right];//
      if(!(char in map)) {
        right++;
        continue;
      }
      map[char]--;
      if(map[char] === 0) count--;
      if(count === 0) break;
      right++;
    }
    // store
    if(right - left + 1 < maxLen) {
      maxLen = right - left + 1;
      result = str.substring(left, right + 1);
    }
    // inc left
    while(count === 0) {
      const char = str[left];
      if(!(char in map)) {
        left++;
        continue;
      }
      map[char]++;
      if(map[char] === 1) {
        count++;
        continue;
      }
      if(right - left + 1 < maxLen) {
        maxLen = right - left + 1;
        result = str.substring(left, right + 1);
      }
      left++;
    }
  }
  return result;
}









