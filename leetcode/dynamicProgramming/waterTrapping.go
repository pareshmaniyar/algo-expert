/*
[0,1,0,2,1,0,1,3]
[0,1,1,2,2,2,2,2]
[3,3,3,3,3,3,3,3]
[0,0,1,0,1,2,1,0]
*/
func trap(height []int) int {
	n := len(height)
	left := make([]int, n)
	right := make([]int, n)
	leftTemp, rightTemp := 0, 0
	for i := 0; i < n; i++ {
		leftTemp = Max(leftTemp, height[i])
		rightTemp = Max(rightTemp, height[n-i-1])
		left[i] = leftTemp
		right[n-i-1] = rightTemp
	}
	sum := 0
	for i := 0; i < n; i++ {
		sum += Max(0, Min(left[i], right[i])-height[i])
	}
	return sum
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
