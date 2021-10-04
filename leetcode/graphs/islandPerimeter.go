/*
- find land
    - find adjacent land count
        - up, down, left, right
    - add 4 - count


*/

func islandPerimeter(grid [][]int) int {
	var count, i, j int = 0, 0, 0
	for i = 0; i < len(grid); i++ {
		for j = 0; j < len(grid[0]); j++ {
			if grid[i][j] == 0 {
				continue
			}
			count += 4 - getAdjacentCount(i, j, grid)
		}
	}
	return count
}
func getAdjacentCount(i int, j int, grid [][]int) int {
	x := [4]int{0, 0, 1, -1}
	y := [4]int{1, -1, 0, 0}
	count := 0
	for n := 0; n < 4; n++ {
		if i+x[n] >= 0 && j+y[n] >= 0 && i+x[n] < len(grid) && j+y[n] < len(grid[0]) && grid[i+x[n]][j+y[n]] == 1 {
			count++
		}
	}
	return count
}



