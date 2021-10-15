/*
           .         .
        .              .
  .               .
.    .         .         .

[1,2,1,3,4,1,2,4,3,1]
[0,1,0,2,1,0,1,2,0,0] - profits
[0,1,1,2,2,2,3,4,4,4]

DID NOT UNDERSTAND!!!!!!!!!!!!

def maxProfit(self, prices):
    if len(prices) < 2:
        return 0
    sell = 0
    buy = -prices[0]
    prev_sell = 0
    prev_buy = 0
    for price in prices: //[1,2,1,3,4,1,2,4,3,1]
        prev_buy = buy // 1
        buy = max(prev_sell - price, prev_buy) // 1
        prev_sell = sell // 3
        sell = max(prev_buy + price, prev_sell) // 5
    return sell

----------------


*/
// import "fmt"
func maxProfit(prices []int) int {
	n := len(prices)
	if n < 2 {
		return 0
	}
	sell := 0
	buy := -prices[0]
	prevSell := 0
	prevBuy := 0
	for _, price := range prices {
		prevBuy = buy
		buy = Max(prevSell-price, prevBuy)
		prevSell = sell
		sell = Max(prevBuy+price, prevSell)
	}
	return sell
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}