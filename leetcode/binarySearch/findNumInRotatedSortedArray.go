/*

- start, mid, end
456789123
- 6
- 1

789123456
-
-

123456789
-
-

------------------
- left
- mid
- right


- if mid < mid - 1
    return mid
- if mid < right
    - mid = right
- if left < mid
    - mid = left

*/
import "fmt"

func findMin(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	if nums[0] < nums[len(nums)-1] {
		return nums[0]
	}
	left, right := 0, len(nums)-1
	mid := 0
	for left < right {
		mid = (left + right)
		mid = mid / 2
		/*
		   if mid != 0 && nums[mid] < nums[mid - 1] {
		       return nums[mid]
		   }
		*/
		if nums[mid] < nums[right] {
			right = mid
		} else if nums[mid] > nums[right] {
			left = mid + 1
		} else {
			right--
		}
	}
	return nums[left]
}

