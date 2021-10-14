/*
1,4,9,16,25,36,49,64
18 = 18*1
- num n, cache
    - min
    - for from sqrt(n) = i to 1
        - min = Min(min, 1 + recur(n - sqrt(n))
    - return min

76

*/
// import "math"
func numSquares(n int) int {
	cache := make(map[int]int)
	return recurse(n, cache)
}

func recurse(n int, cache map[int]int) int {
	if val, ok := cache[n]; ok {
		return val
	}
	min := n
	for i := 1; i*i <= n; i++ {
		min = Min(min, 1+recurse(n-i*i, cache))
	}
	cache[n] = min
	return min
}

func Min(x, y int) int {
	if x > y {
		return y
	}
	return x
}
