/*
1,3,4,2
[4,3,1]
3,4,-1,-1
1,3,9,2,7,8,11
[11,9,3]
3,9,11,7,8,11,-1
*/
func nextGreaterElement(nums1 []int, nums2 []int) []int {
	data := make(map[int]int)
	stack := make([]int, 0)
	top, num := 0, 0
	for i := len(nums2) - 1; i >= 0; i-- {
		num = nums2[i]
		if len(stack) == 0 {
			stack = append(stack, num)
			data[num] = -1
			continue
		}
		top = stack[len(stack)-1]
		if top > num {
			data[num] = top
		} else {
			for len(stack) != 0 && stack[len(stack)-1] < num {
				stack = stack[:len(stack)-1]
			}
			if len(stack) == 0 {
				data[num] = -1
			} else {
				data[num] = stack[len(stack)-1]
			}
		}
		stack = append(stack, num)
	}
	res := make([]int, len(nums1))
	for i, num := range nums1 {
		res[i] = data[num]
	}
	return res
}