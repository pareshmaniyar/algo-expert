/*
abcdefg
- should contain first letter
- should be a subset of puzzle
abcdefg - faced, cabbage, baggage, bag, gadef
invalid - beefed, based

puzzle word
qpwoeur q

- if word has puzzle[0]
- all letter are in puzzle

BF:
- m * n

Trie
hash map

["aaaa": {a: t}, "asas": {a: t, s: t}]
["aboveyz": {a,b,o,v,e,y,z}, "abrodyz": {a,b,r,o,d,y,z}]
TLE below
Better to implement using trie
*/
func findNumOfValidWords(words []string, puzzles []string) []int {
    wordCache := make(map[string]map[byte]bool, 0)
    puzzleCache := make(map[string]map[byte]bool, 0)
    for _, word := range words {
        wordCache[word] = generateMap(word)
    }
    for _, word := range puzzles {
        puzzleCache[word] = generateMap(word)
    }
    result := make([]int, len(puzzles))
    for _, word := range words {
        for i, puzzle := range puzzles {
            if isValidPuzzleWord(puzzle, word, puzzleCache[puzzle], wordCache[word]) {
                result[i]++
            }
        }
    }
    return result
}

func isValidPuzzleWord(
    puzzle string,
    word string,
    puzzleCache map[byte]bool,
    wordCache map[byte]bool) bool {
    if _, ok := wordCache[puzzle[0]]; !ok {
        return false
    }
    for char := range wordCache {
        if _, ok := puzzleCache[char]; !ok {
            return false
        }
    }
    return true
}

func generateMap(word string) map[byte]bool {
    result := make(map[byte]bool)
    for i := range word {
        result[word[i]] = true
    }
    return result
}




