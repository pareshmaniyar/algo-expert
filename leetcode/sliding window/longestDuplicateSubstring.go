/*

- abcd11ab11abc11abcd = abcd
- ababa11ab11abab = abab

BF
- loop i from 0 to n
    - loop j from i + 1 to n
        - x = i, y = j
        - for x < len && y < len && s[x] == s[y]
            - x++, y++
        - store max
n * n * n = n ^ 3
=> n ^ 2
---------------------------------
b,a,n,a,n,a
ba,an,na,an,na
ban,ana,nan,ana
bana,anan,nana
banan,anana
---------------------------------
n * n * n
- loop len 1 to n
    - loop 0 to n - len
        - string building - n
---------------------------------
trie

---------------------------------
Rabin karp
- loop len 1 to n
    - loop 0 to n - len
        - compute value
        - check if present
        - update max

*/

// import "math"
// import "fmt"

func longestDupSubstring(S string) string {
	res := ""
	l, r := 1, len(S)-1
	for l <= r {
		mid := (l + r) / 2
		sub, is_check := check(mid, S)
		if is_check {
			res = sub
			l = mid + 1
		} else {
			r = mid - 1
		}
	}
	return res
}

func check(length int, S string) (string, bool) {
	seen := make(map[string]bool, len(S)-length)
	for i := 0; i < len(S)-length+1; i++ {
		sub := S[i : i+length]
		if _, ok := seen[sub]; ok {
			return sub, true
		} else {
			seen[sub] = true
		}
	}
	return "", false
}

/*
My soln
func longestDupSubstring(s string) string {
	result := []int{0, 0}
	data := make(map[int][]int)
	for i := 1; i < len(s) + 1; i++ {
			count := 0
			for k := 0; k < i - 1; k++ {
					count += powInt(3, k) * getNum(s[k])
			}
			for j := i - 1; j < len(s); j++ {
					fmt.Println(i, j)
					if j != i - 1 {
							count -= getNum(s[j - i])
							count /= 3;
					}
					count += powInt(3, i - 1) * getNum(s[j])
					if _, ok := data[count]; ok {
							if result[1] - result[0] < data[count][1] - data[count][0] {
									//0 1234 5 i=4,j=5
									if getString(data[count], s) == getString([]int{j, i + j} , s) {
											result = []int[j, j + i]
									}
							}
					} else {
							data[count] = []int{j, j + i}
					}
			}
	}
	return s[result[0]: result[1]]
}

func getString() string {
	// str := ""
	// if j + i > len(s) {
	//     str = s[j:len(s)]
	// } else {
	//     str = s[j: j + i]
	// }
	// str2 := ""
	// if data[count][1] > len(s) {
	//     str2 = s[data[count][0]:len(s)]
	// } else {
	//     str2 = s[data[count][0]:data[count][1]]
	// }
	// if str == str2 {
	//     result = []int{data[count][0], data[count][1]}
	// }
	return ""
}
func getNum(str byte) int {
	return (int(str) - 96)
}

func powInt(x, y int) int {
	return int(math.Pow(float64(x), float64(y)))
}

*/