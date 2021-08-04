Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
https://leetcode.com/problems/minimum-window-substring/

5:34
- return ""
abc
abxycabxc
abxc

aabc
{a: 2,b: 1,c:1}
count
aabxycpppaabxc
first: {a: [6, 7], b: [], c: []}
base condition 0-5
- loop 6 to end - bxycpppaa   | b
	- check value if not present in first continue
	- find new window - cpppaab
	- while(remove unwanted elements)
            - min compute
T-O(n) S-O(n)
{a: 0,b: 0,c:0}

aabxycpppaabxc
abbca abc



















function minWIndowSubstring(input, target) {
	// get valid sliding window else return "";
let map = target.split("").reduce(
	(accum, el) => {
		if(!(el in accum)) {
			accum[el] = 0;
		}
accum[el] +=1;
return accum;
}, {});
// edge case if(last === -1) return "";
	// for loop
	let start = 0;
	let count = Object.keys(map).length;
	let minLength = +Infinity, min = "";{a: 0, b: 0, c:0}
for(let i = 0; i < input.length; i++) {
		// cases
const char = input[i];
		if(!(char in map)) continue;
		map[char]--;
		if(map[char] === 0) {
count--;
}
		if(count === 0) {
			min = input.substring(start, i)
		}
	if(minLength === +Infinity) return "";
	return min
// return result string
}
aabc
aabxca


function getValidWindow(input, target) {
	// aabc
	let mapTarget = target.split("").reduce(
	(accum, el) => {
		if(!(el in accum)) {
			accum[el] = 0;
		}
accum[el] +=1;
return accum;
}, {});
const map = JSON>parse(JSON.stringify(mapTarget));
for(let i = 0; i < input.length; i++) {
	let char = input[i];
	if(!(char in mapTarget) continue;
	mapTarget[char]--;
	if(mapTarget[char] === 0) delete mapTarget[char];
	if(Object.keys(mapTarget).length === 0) return i;
}
return [map, -1];
}



Feeback
	- 

