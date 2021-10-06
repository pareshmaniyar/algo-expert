/*
4,3,2,4,1,6
4 3 5 6 6 12

*/
func minCostClimbingStairs(cost []int) int {
	prev := 0
	later := 0
	for _, num := range cost {
		temp := min(prev, later) + num
		later = prev
		prev = temp
	}
	return min(prev, later)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}