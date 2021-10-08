/*
reach = 0
- loop
    - reach = max(reach, num) = 4
    - reach === 0 return false;
    - reach--
- return true

*/
import "fmt"

func canJump(nums []int) bool {
	reach := 0
	if len(nums) == 1 {
		return true
	}
	for i, num := range nums {
		reach = Max(reach, num)
		if i+reach >= len(nums)-1 {
			return true
		}
		if reach == 0 {
			return false
		}
		reach--
	}
	return true
}

func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}