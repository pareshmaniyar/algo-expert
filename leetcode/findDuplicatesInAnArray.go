/*
- [1,1,2]

*/

func findDuplicates(nums []int) []int {
	result := []int{}
	for _, num := range nums {
		index := Abs(num) - 1
		if nums[index] < 0 {
			result = append(result, index+1)
		} else {
			nums[index] *= -1
		}
	}
	return result
}

func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}