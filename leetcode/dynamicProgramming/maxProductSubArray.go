/*
curr = 4;
max = 6;

*/

func maxProduct(nums []int) int {
	left := 1
	right := 1
	var max int = nums[0]
	for i := 0; i < len(nums); i++ {
		if left == 0 {
			left = 1
		}
		if right == 0 {
			right = 1
		}
		left = left * nums[i]
		right = right * nums[len(nums)-i-1]
		max = Max(max, Max(left, right))
	}
	return max
}
func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}