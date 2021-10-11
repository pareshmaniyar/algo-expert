/*
- n ^ 2 - find all
values[i] + values[j] + i - j
- values
- less dist between them

sort - nlogn - complicated

DP - pattern
2,1,5,2,6
2,1,7,5,10 - i
2,2,7,7,10 - max
2,0,3,-1,2 - j

val[i] + i + val[j] - j

8,1 - 8
8,1,5

*/
func maxScoreSightseeingPair(values []int) int {
	vLen := len(values)
	sum := make([]int, vLen)
	sub := make([]int, vLen)
	var max int = 1
	var result int = -1000
	for i := 0; i < vLen; i++ {
		max = Max(max, values[i]+i)
		sum[i] = max
		sub[i] = values[i] - i
		if i == 0 {
			continue
		}
		result = Max(result, sum[i-1]+sub[i])
	}
	return result
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

