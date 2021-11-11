/*
prospect common of first two
*/
func findCenter(edges [][]int) int {
    a := edges[0][0]
    b := edges[0][1]
    c := edges[1][0]
    d := edges[1][1]
    if a == c || a == d {
        return a
    }
    return b
}