/*

arr space of n
keep adding resp val
keep max count
- check if his count is 0 too else -1
- return if max count is equal to n else -1
t - O(n)
s - O(n)


p = 3
c = 2

*/

func findJudge(n int, trust [][]int) int {
    if len(trust) == 0 {
        if n == 1 {
            return 1
        }
        return -1
    }
    out := make([]int, n + 1)
    in := make([]int, n + 1)
    for _, t := range trust {
        out[t[0]]++
        in[t[1]]++
    }
    for i := 1; i < n + 1; i++ {
        if out[i] == 0 && in[i] == n - 1 {
            return i
        }
    }
    return -1
}
