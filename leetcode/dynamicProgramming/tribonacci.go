func tribonacci(n int) int {
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
	if n == 2 {
		return 1
	}
	cache[n] = fibonacciValue(n-1, cache) + fibonacciValue(n-2, cache) + fibonacciValue(n-3, cache)
	return cache[n]
}
