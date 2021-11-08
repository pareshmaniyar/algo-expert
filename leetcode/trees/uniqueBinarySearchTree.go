/*

1-1
2-2
3-1+2, 1+1+1, 2+1 - 2 + 1 + 2 = 5
4-1+3, 1+1+2, 2+1+1, 3+1 = 5 + 2 + 2 + 5 = 14
3
0*2
1*1
2*1

4
0,1,2,3
0*3 - 5
1*2 - 2
2*1 - 2
3*0 - 5
*/
import "fmt"
func numTrees(n int) int {
    cache := make(map[int]int, 0)
    return recurseTree(n, cache)
}

func recurseTree(n int, cache map[int]int) int {
    if n == 0 || n == 1 {
        return 1
    }
    if val, ok := cache[n]; ok {
        return val
    }
    result := 0
    for i := 0; i < n; i++ {
        result += recurseTree(i, cache) * recurseTree(n - i - 1, cache)
    }
    cache[n] = result
    return result
}

