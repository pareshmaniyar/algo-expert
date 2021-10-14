func getMaxLen(nums []int) int {
    positive := 0
    negative := 0
    max := 0
    for i:= 0; i < len(nums); i++ {
        num := nums[i]
        if num == 0 {
            positive = 0
            negative = 0
        } else if num > 0 {
            positive++;
            if negative != 0 {
                negative++
            }
        } else {
            temp := positive
            if negative == 0 {
                positive = 0
            } else {
                positive = negative + 1
            }
            negative = temp + 1
        }
        max = Max(max, positive)
    }
    return max
}
func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}