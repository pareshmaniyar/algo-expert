/*

- n^3
------------------------------------
- n^2
-1,0,1,2,-1,-4
-4,-1,-1,0,1,2
       | l r
- sort nlogn
- keep in data in decrease order

- duplicates

*/
import (
	"sort"
	"strconv"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	l, r := 0, len(nums)-1
	num := 0
	data := make(map[string][]int)
	for i := 0; i < len(nums); i++ {
		l = i + 1
		r = len(nums) - 1
		num = nums[i]
		for l < r {
			if nums[l]+nums[r]+num == 0 {
				add(num, nums[l], nums[r], data)
				l++
				r--
			} else if nums[l]+nums[r]+num < 0 {
				l++
			} else {
				r--
			}
		}
	}
	result := make([][]int, 0)
	for _, value := range data {
		result = append(result, value)
	}
	return result
}

func add(n1 int, n2 int, n3 int, data map[string][]int) {
	newString := strconv.Itoa(n1) + "-" + strconv.Itoa(n2) + "-" + strconv.Itoa(n3)
	arr := []int{n1, n2, n3}
	data[newString] = arr
}
