// DIDN'T UNDERSTAND IT COMPLETELY

func maxProfit(prices []int, fee int) int {
	if len(prices) < 2 {
		return 0
	}
	curr0 := 0
	curr1 := -prices[0]
	temp := curr0
	for _, price := range prices {
		temp = curr0
		curr0 = Max(curr0, curr1+price-fee)
		curr1 = Max(curr1, temp-price)
	}
	return curr0
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}
