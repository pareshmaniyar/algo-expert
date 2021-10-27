/*
- go twice
    - have count of three, place all of them
[2, 0, 2, 1, 1, 0]
0-2
1-2
2-2
[0, 0, 1, 1, 2, 2]

- pointers
[2, 0, 2, 1, 1, 0]
[0, 0, 1, 1, 1, 1]
       |
[0,0,0,1,1,1]
     |
[0,0,1,1,2,2]
   |   |
                       |
[0,0,0,0,1,1,1,1,2,2,2,2]
       |       |

zp = 1
op = 3
temp = 1
temp2 = 2
[0, 0, 1, 1, 2, 2]
                |

[0, 1]
zp = 0
op = 0
temp = 1
temp2 = 1

- if zero
    - temp = nums[zp]
    - temp2 = nums[zo]
    - replace zp with zero
    - replace op with temp if zp != zo
    - replace i with temp2
    - zp++, op++
- if one
    - swap op with i
    - op++

*/

func sortColors(nums []int) {
	zero, first := 0, 0
	temp, temp2 := 0, 0
	for i, num := range nums {
		if num == 0 {
			temp = nums[zero]
			temp2 = nums[first]
			nums[zero] = 0
			if zero != first {
				nums[first] = temp
			}
			if i != first {
				nums[i] = temp2
			}
			zero++
			first++
		} else if num == 1 {
			temp = nums[first]
			nums[first] = 1
			nums[i] = temp
			first++
		}
	}
}
