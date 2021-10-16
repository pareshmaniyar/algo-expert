/*
 3,5,2,6,8,1,2
[0,2,-3,4,2,-5,1]
t1 = -Inf, t2 = -Inf
count = 0
---------------------------------------------
- below soln is wrong
- add inf to end
- loop
    - if neg
        - if t1 < count
            t2 = t1
            t1 = count + diff[i]
        - else if t2 < count
            t2 = count + diff[i]
        - count = 0
    - else
        t1 = Max(t2)
*extend
---------------------------------------------

profit = 0 //
prevBuy = -prices[i] //-3
sell = 0
buy = 0
1. Sell = prices[i] + prevBuy // 2
2. Buy = profit - prices[i] // 0


sell = prevBuy + prices[i]
buy = prevSell - prices[i]
prevBuy = buy
prevSell = sell
-----------------------------------------------

only one

prevBuy = Min(prevBuy, prices[i])
sell = Max(sell, prices[i])
maxProfit = Max(maxProfit, sell - prevBuy)
-----------------------------------------------
3,5,2,6,8,1,2
3 3 2 2 2 1 1
i 5 3 3 3 2 2

8 8 8 8 8 2 2
6 6 6 6 2 1-i
problem with overlap
----------------------------------------------
recurrence
DID NOT UNDERSTAND!
t[i][k][0] = Max(t[i - 1][k][1] + prices[i], t[i - 1][k][0])
t[i][k][1] = Max(t[i - 1][k][1], t[i - 1][k][0] - prices[i])

t[i][2][0] = Max(t[i][1])

*/

func maxProfit(prices []int) int {
	t10, t11 := 0, -100000
	t20, t21 := 0, -100000
	for i := 0; i < len(prices); i++ {
		t20 = Max(t20, t21+prices[i])
		t21 = Max(t21, t10-prices[i])
		t10 = Max(t10, t11+prices[i])
		t11 = Max(t11, -prices[i])
	}
	return t20
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}


