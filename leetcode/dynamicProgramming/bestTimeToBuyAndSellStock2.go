/*

- [7,1,5,3,6,4]

0  0 0 0 0 0 0
1  0 0 4 4 5 5
2  0 0 4 4 7 7
3
4
5

mat[i][j] = Max(mat[i][j - 1], loopMax + val[j])
- loop k 0 to j - 1
    - max of mat[i - 1][k] - val[k]
        - 0 - 7, 0 - 1, 4 - 5, 4 - 3
n * n * n - n ^ 3


*/
func maxProfit(prices []int) int {
	pLen := len(prices)
	localMax := -10000
	curr := make([]int, pLen+1)
	prev := make([]int, pLen+1)
	for i := 0; i < pLen/2; i++ {
		for j := 1; j < pLen+1; j++ {
			curr[j] = Max(curr[j-1], localMax+prices[j-1])
			localMax = Max(localMax, prev[j]-prices[j-1])
		}
		prev = curr
		curr = make([]int, pLen+1)
		localMax = -10000
	}
	return prev[pLen]
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

