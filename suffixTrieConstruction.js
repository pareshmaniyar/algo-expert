// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
          function insert(node, i) {
              for(let j = i; j < string.length; j++) {
                  let letter = string[j];
                  if(!node.hasOwnProperty(letter)) {
                      node[letter] = {};
                  }
                  node = node[letter];
              }
              node['*'] = true;
          }
          let n = string.length;
          for(let i = 0; i < n; i++) {
              insert(this.root, i)
          }
    }
  
    contains(string) {
      let node = this.root;
          let n = string.length;
          for(let i = 0; i < n; i++) {
              if(!node.hasOwnProperty(string[i])) {
                  return false;
              }
              node = node[string[i]];
          }
          if(node.hasOwnProperty('*'))
              return true;
          else
              return false;
    }
  }
  
  // Do not edit the line below.
  exports.SuffixTrie = SuffixTrie;
  