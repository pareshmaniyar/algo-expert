/*

- n = no.of empty squares

- travelPath(i, j, dist, grid) (0, 0, 0, grid)
    - if i,j = 2 add to result if equal to n
    - get options = only 0
    - loop options
        - mark i,j = 3
        - travelPath(i, j, dist + 1, grid) (0, 1, 1, grid)
        - mark i, j = 0

*/

func uniquePathsIII(grid [][]int) int {
	n, x, y := 0, 0, 0
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == 0 {
				n++
			}
			if grid[i][j] == 1 {
				x = i
				y = j
			}
		}
	}
	result := 0
	//fmt.Println(n)
	travelPath(x, y, 0, &result, n, grid)
	return result
}

func travelPath(i int, j int, dist int, result *int, n int, grid [][]int) {
	//fmt.Println("start", i, j, dist, "------------------", grid[i][j])
	if grid[i][j] == 2 {
		if dist-1 == n {
			*result = *result + 1
		}
		// fmt.Println("yay!", dist)
		return
	}
	options := getValidOptions(i, j, grid)
	for _, coord := range options {
		grid[i][j] = 3
		travelPath(coord[0], coord[1], dist+1, result, n, grid)
		grid[i][j] = 0
	}
	//fmt.Println("end", i, j)
}

func getValidOptions(i int, j int, grid [][]int) [][]int {
	result := make([][]int, 0)
	adjI := []int{i, i + 1, i, i - 1}
	adjJ := []int{j + 1, j, j - 1, j}
	for k := 0; k < len(adjI); k++ {
		x := adjI[k]
		y := adjJ[k]
		// out of bounds
		if x < 0 || y < 0 || x >= len(grid) || y >= len(grid[0]) {
			continue
		}
		// valid values
		if grid[x][y] == 0 || grid[x][y] == 2 {
			result = append(result, []int{x, y})
		}
	}
	return result
}

