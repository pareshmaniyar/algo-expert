/*

- pass through all the edges and make O to P and their adjacents BFS
- make all O to X
- make all P to O

*/
func solve(board [][]byte) {
	// pass through all the edges and make O to P and their adjacents BFS
	s := "OXP"

	for i := 0; i < len(board[0]); i++ {
		makeOtoP(0, i, board)
		makeOtoP(len(board)-1, i, board)
	}

	for i := 0; i < len(board); i++ {
		makeOtoP(i, 0, board)
		makeOtoP(i, len(board[0])-1, board)
	}
	// make all O to X
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			if board[i][j] == s[0] {
				board[i][j] = s[1]
			}
		}
	}
	// make all P to O
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			if board[i][j] == s[2] {
				board[i][j] = s[0]
			}
		}
	}
}

func makeOtoP(i int, j int, board [][]byte) {
	s := "OXP"
	if board[i][j] == s[1] || board[i][j] == s[2] {
		return
	}
	adjI := []int{i, i + 1, i, i - 1}
	adjJ := []int{j + 1, j, j - 1, j}
	board[i][j] = s[2]
	for k := 0; k < len(adjI); k++ {
		x := adjI[k]
		y := adjJ[k]
		if x < 0 || y < 0 || x >= len(board) || y >= len(board[0]) {
			continue
		}
		if board[x][y] == s[1] || board[x][y] == s[2] {
			continue
		}
		makeOtoP(x, y, board)
	}
}


