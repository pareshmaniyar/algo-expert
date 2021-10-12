/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * func guess(num int) int;
 */
//import "fmt"

func guessNumber(n int) int {
	start := 1
	end := n
	mid := ((start + end) / 2)
	res := guess(mid)
	for res != 0 {
		if res == 1 {
			start = mid + 1
		} else {
			end = mid - 1
		}
		mid = ((start + end) / 2)
		res = guess(mid)
		//fmt.Println(start, end, mid, res)
	}
	return mid
}
