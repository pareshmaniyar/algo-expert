/*
the sky is blue
blue is sky the - O(n)
stack

blue is sky

*/
import "strings"

func reverseWords(s string) string {
	stack := make([]string, len(s))
	s = " " + s
	var letter string = " "
	var res strings.Builder
	lastAdded := ""
	for i := len(s) - 1; i >= 0; i-- {
		letter = string(s[i])
		if letter == " " && lastAdded != " " {
			for len(stack) != 0 {
				letter = string(stack[len(stack)-1])
				if letter != " " {
					res.WriteString(letter)
				}
				stack = stack[:len(stack)-1]
			}
			res.WriteString(" ")
			lastAdded = " "
			continue
		}
		stack = append(stack, letter)
		lastAdded = letter
	}
	return strings.Trim(res.String(), " ")
}
