/*

- store visited
- BFS
- build adj list

- stack = [start]
- while stack is not empty
    - pop and add to stack popped unvisited neighbours
    - visited[pop] = true
- return false

*/
func validPath(n int, edges [][]int, start int, end int) bool {
    if start == end {
        return true
    }
    stack := make([]int, 0)
    adjList := buildAdjList(edges, n)
    visited := make([]int, n)
    stack = append(stack, start)
    pop := 0
    for len(stack) != 0 {
        pop = stack[len(stack) - 1]
        stack = stack[:len(stack) - 1]
        visited[pop] = 1
        for _, adj := range adjList[pop] {
            if adj == end {
                return true
            }
            if visited[adj] == 0 {
                stack = append(stack, adj)
            }
        }
    }
    return false
}

func buildAdjList(edges [][]int, n int) [][]int {
    result := make([][]int, n)
    for i := 0; i < n; i++ {
        result[i] = make([]int, 0)
    }
    p1 := 0
    p2 := 0
    for _, edge := range edges {
        p1 = edge[0]
        p2 = edge[1]
        result[p1] = append(result[p1], p2)
        result[p2] = append(result[p2], p1)
    }
    return result
}
