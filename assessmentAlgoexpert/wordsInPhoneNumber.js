/*
	- number to alphabet mapping
	- WONT WORK BUT GOT THE IDEA
	- Brute Force
	- n digits
	- ["dm", "em", "fm", "dn", "en", "fn", "do", "eo", "fo"]
	- loop through each digit
		- loop through alph mappings
		- keeping adding to loops
	- awesome but space intensive - O(4 ^ max word length)
	
	- Trie
	- either array - Have multiple recursion and might get tricky
	- or phone number - words can be looped through in O(n * length of word)
	
	PseudoCode
	- Build trie of number
	- loop through array
		- if found a start at end, push in result;
	- return result;
*/

function wordsInPhoneNumber(phoneNumber, words) {
    const trie = buildTrie(phoneNumber);
      const numberedArray = getNumberedStringArray(words);
      let result = [];
      for(let i = 0; i < numberedArray.length; i++) {
          if(containsInTrie(trie, numberedArray[i])) {
              result.push(words[i]);
          }
      }
      return result;
  }
  
  function containsInTrie(trie, word) {
      for(let i = 0; i < word.length; i++) {
          let letter = word[i];
          if(letter in trie) {
              trie = trie[letter];
              continue;
          }
          return false;
      }
      return true;
  }
  
  const numberMapping = {
      "a": 2,
      "b": 2,
      "c": 2,
      "d": 3,
      "e": 3,
      "f": 3,
      "g": 4,
      "h": 4,
      "i": 4,
      "j": 5,
      "k": 5,
      "l": 5,
      "m": 6,
      "n": 6,
      "o": 6,
      "p": 7,
      "q": 7,
      "r": 7,
      "s": 7,
      "t": 8,
      "u": 8,
      "v": 8,
      "w": 9,
      "x": 9,
      "y": 9,
      "z": 9
  }
  function getNumberedStringArray(words) {
      let result = [];
      for(let i = 0; i < words.length; i++) {
          const word = words[i];
          let number = "";
          for(let j = 0; j < word.length; j++) {
              number += numberMapping[word[j]];
          }
          result.push(number);
      }
      return result;
  }
  
  const wordMapping = [
      ["0"], ["1"], ["2", "a", "b", "c"],
      ["3", "d", "e", "f"], ["4", "g", "h", "i"], ["5", "j", "k","l"],
      ["6", "m", "n", "o"], ["7", "p", "q", "r", "s"], ["8", "t", "u", "v"],
      ["9", "w", "x", "y", "z"]
  ];
  
  function buildTrie(phoneNumber) {
      let trie = {};
      for(let i = 1; i <= phoneNumber.length; i++) {
          addWordToTrie(trie, phoneNumber.substring(0, i));
      }
      return trie;
  }
  const EndSymbol = "*";
  function addWordToTrie(trie, word) {
      for(let i = 0; i < word.length; i++) {
          let letter = word[i];
          if(letter in trie) {
              trie = trie[letter];
          } else {
           trie[letter] = {};
           trie = trie[letter];
          }
      }
      trie[EndSymbol] = word;
  }
  
  // Do not edit the line below.
  exports.wordsInPhoneNumber = wordsInPhoneNumber;
  