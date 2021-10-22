/*
map:
e - 2
t - 1
r - 1
z - 3
--------------------------
[{val: 2, letter: e}, {val: 1, letter: 1}]

nlogn
--------------------------
t - 1, r - 2, e - 3
0 - null
1 - {t}
2 - {r}
3 - {e}
.
.
n - null
O(n)

*/
import "strings"

func frequencySort(s string) string {
	countMap := make(map[rune]int)
	sLen := len(s)
	for _, letter := range s {
		if val, ok := countMap[letter]; ok {
			countMap[letter] = val + 1
		} else {
			countMap[letter] = 1
		}
	}
	order := make([]map[rune]int, sLen+1)
	for letter, count := range countMap {
		if order[count] == nil {
			newMap := make(map[rune]int)
			newMap[letter] = count
			order[count] = newMap
		} else {
			order[count][letter] = count
		}
	}
	var result strings.Builder
	for i := sLen; i >= 0; i-- {
		m := order[i]
		if m == nil {
			continue
		}
		for letter, count := range m {
			for j := 0; j < count; j++ {
				result.WriteRune(letter)
			}
		}
	}
	return result.String()
}






