/*
- findWord i,j,pos,visited,board
    - if visited return false
    - if pos == length return true
    - if pos != i,j return false
    - for neighbours
        - if(findWord x,y,nextPos,visited,board) return true
    - return false
T - O(m*n*l) m*n, l
S - O(m*n)

*/
import "strconv"

func exist(board [][]byte, word string) bool {
	m := len(board)
	n := len(board[0])
	visited := make(map[string]bool)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if findWord(i, j, 0, visited, board, word) {
				return true
			}
		}
	}
	return false
}

func keyGenerator(i int, j int) string {
	return "$" + strconv.Itoa(i) + "#" + strconv.Itoa(j)
}

func findWord(i int, j int, pos int, visited map[string]bool, board [][]byte, word string) bool {
	if value, found := visited[keyGenerator(i, j)]; found && value {
		return false
	}
	if word[pos] != board[i][j] {
		return false
	}
	if pos+1 == len(word) {
		return true
	}
	neighbours := getNeighbours(i, j, board)
	visited[keyGenerator(i, j)] = true
	for k := 0; k < len(neighbours); k++ {
		if findWord(neighbours[k][0], neighbours[k][1], pos+1, visited, board, word) {
			return true
		}
	}
	visited[keyGenerator(i, j)] = false
	return false
}

func getNeighbours(i int, j int, board [][]byte) [][]int {
	m := len(board)
	n := len(board[0])
	result := [][]int{}
	x := []int{i + 1, i - 1, i, i}
	y := []int{j, j, j + 1, j - 1}
	for k := 0; k < len(x); k++ {
		if x[k] < 0 || y[k] < 0 || x[k] >= m || y[k] >= n {
			continue
		}
		result = append(result, []int{x[k], y[k]})
	}
	return result
}


