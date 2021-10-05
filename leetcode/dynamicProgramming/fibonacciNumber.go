func fib(n int) int {
	cache := map[int]int{}
	return fibonacciValue(n, cache)
}

/*
1 - 1
2 - 1 + 1, 2 - 2
3 - 2 + 1 - 3
4 - 1 * 4, 2 * 2, 1 * 2 + 2 * 1, 1 * 2 + 2 * 1, 121
n = n - 1 + n - 2
3 = 2 + 1 = 2 + 1
4 = 3 + 2 = 3 + 2 = 5

*/

func climbStairs(n int) int {
	cache := map[int]int{}
	return fibonacciValue(n, cache)
}

func fibonacciValue(n int, cache map[int]int) int {
	if _, ok := cache[n]; ok {
		return cache[n]
	}
	if n == 1 || n == 0 {
		return n
	}
	cache[n] = fibonacciValue(n-1, cache) + fibonacciValue(n-2, cache)
	return cache[n]
}
