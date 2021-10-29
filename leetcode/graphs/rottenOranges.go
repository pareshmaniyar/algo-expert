/*
- 0,1,2

- one pass
    - freshCount
    - add rotten to queue
- result = 0
- dequeue
- while queue empty or freshcount != 0
    - dequeue until queue empty
        - find adj element which are fresh
        - change count
        - append to newqueue
    - newqueue to queue
    - result++
- if freshCount == 0 return result else -1

*/
import "fmt"

func orangesRotting(grid [][]int) int {
	freshCount := 0
	queue := make([][]int, 0)
	// one pass
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == 1 {
				freshCount++
			} else if grid[i][j] == 2 {
				queue = append(queue, []int{i, j})
			}
		}
	}

	result := 0
	adjI := []int{1, -1, 0, 0}
	adjJ := []int{0, 0, -1, 1}
	rotAdjFreshOranges := func(i int, j int) [][]int {
		result := make([][]int, 0)
		for k := 0; k < len(adjI); k++ {
			x := i + adjI[k]
			y := j + adjJ[k]
			if x < 0 || y < 0 || x >= len(grid) || y >= len(grid[0]) {
				continue
			}
			if grid[x][y] == 1 {
				result = append(result, []int{x, y})
				grid[x][y] = 2
				freshCount--
			}
		}
		return result
	}
	for len(queue) != 0 && freshCount > 0 {
		aux := make([][]int, 0)
		for len(queue) != 0 {
			el := queue[len(queue)-1]
			queue = queue[:len(queue)-1]
			for _, cell := range rotAdjFreshOranges(el[0], el[1]) {
				aux = append(aux, cell)
			}
		}
		queue = aux
		result++
	}
	if freshCount > 0 {
		return -1
	}
	return result
}




