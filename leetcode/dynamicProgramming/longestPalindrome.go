/*
- a:2, b:2, c:1, d:3

*/
//import "math"

func longestPalindrome(s string) int {
	store := make(map[rune]int)
	odd := false
	count := 0
	for _, character := range s {
		if _, found := store[character]; !found {
			store[character] = 0
		}
		store[character]++
	}
	for _, val := range store {
		if val%2 == 0 {
			count += val
		} else {
			count += val - 1
			odd = true
		}
	}
	if odd {
		count++
	}
	return count
}
