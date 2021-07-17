/*
Given a string A, partition A such that every substring of the partition is a palindrome.
Return the minimum cuts needed for a palindrome partitioning of A.

Input 1:
    A = "aba"

Output 1:
    0

Explanation 1:
    "aba" is already a palindrome, so no cuts are needed.

Input 2:
    A = "aab"
    
Output 2:
    1

Explanation 2:
    Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.

aa|bbb|ccc - 2
a|b|c|dd|ee|ff - 5











aba|cc - 1
Approach 1:
aba|ccddccee
a|baccab
A|baccab   
aba|bccb - ---
- loop 0 to n
	- baseString = 0 to i
- recursion ababccb
	-
	- a, recursion babccb, if(“a“ is pal) return min(1 + recursion(),recursion(ababccb));
	- ab, recursion abccb            return recursion(ababccb);
aba
a|b|a
ab|a
abaccddccee
time - O(n ^ 2), space - O(n ^ 2)

*/
    function minCuts(string) {
	return recursiveFindMinCuts(string, {});
}

function recursiveFindMinCuts(string, cache) {
	if(string in cache) return cache[string];
	let minCuts = string.length;
	for(let i = 0; i < string.length; i++) {
		let baseString = string.substring(0, i);// n
		if(isPalindrome(baseString)) { // n
			minCuts = Math.min(minCuts, 1 + recursiveFindMinCuts(string.substring(i + 1));//ab|a
		}
	}
	cache[string] = minCuts;
    return minCuts;
}


