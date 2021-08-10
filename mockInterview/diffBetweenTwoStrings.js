
- Finf LCS - O(N * M)
- Compare 1st and LCS - O(N)
	- pt1- 1st string, p2 - LCS
	- until equal, keep adding normally, pt1++, pt2++
	- if unequal add -Char and pt1++
	- STORING each char index in array
	- pt2 === LCS.length break
- push all remaining from pt1 till end - Char
- Compare 2nd and LCS - O(M)
	- pt1- 2nd string, p2 - LCS
	- until equal, keep adding normally, pt1++, pt2++
	- pt2 === LCS.length break
- push all remaining from pt1 till end + Char
	
function diffBetweenTwoStrings(source, target) {
https://www.pramp.com/challenge/5j2xWAx1qPtlZGLnG2O0
function edit(src, des) {
	const lcs = getLCS(src, des); // ABDFG
	let pt1 = 0, pt2 = 0, pt3 = 0, result = [];
	let address = Array(lcs.length).fill(0);// ABCDEFG | ABDFG
	while(true) {
		if(src[pt1] === lcs[pt2]) {
			result.push(src[pt1]);
			address[pt2] = result.length - 1; // [A, B, -C, X, D, Z, Z] [0, 1, 3, 0, 0]
			pt1++, pt2++;
} else {
	result.push(`-${src[pt1]}`);
	pt1++;
}
if(pt2 === lcs.length) break;
	}
	while(pt1 < src.length) {
		result.push(`-${src[pt1]}`);
pt1++;
}
pt1 = 0; pt2 = 0, offset = 0;
while(true) {
	if(des[pt1] === lcs[pt2]) {
			pt1++, pt2++;
} else {
let getLastLocation = address[pt2] + offset;// ABDFFGH | ABDFG
result = result.substring(0, getLastLocation).concat([`+${src[pt1]}`]).concat(result.substring(getLastLocation));
offset++;
	pt1++;
}
if(pt2 === lcs.length) break;
}
while(pt1 < des.length) {
		result.push(`+${des[pt1]}`);
pt1++;
}
return result;
}
