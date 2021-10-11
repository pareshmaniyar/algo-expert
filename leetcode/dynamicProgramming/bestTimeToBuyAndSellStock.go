/*
[7,1,5,3,6,4]
[7,1,1,1,1,1]- i
[7,6,6,6,6,4]- j


*/

func maxProfit(prices []int) int {
	n := len(prices)
	leftPass := make([]int, n)
	rightPass := make([]int, n)
	max := 0
	min := 10000
	for i := 0; i < n; i++ {
		min = Min(min, prices[i])
		max = Max(max, prices[n-i-1])
		leftPass[i] = min
		rightPass[n-i-1] = max
	}
	max = 0
	for i := 0; i < n; i++ {
		max = Max(max, rightPass[i]-leftPass[i])
	}
	return max
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

func Min(x, y int) int {
	if x > y {
		return y
	}
	return x
}
