class Trie {
    private store = {};
    constructor() {
        this.store = {};
    }

    insert(word: string): void {
        let storeRef = this.store;
        for(const letter of word.split('')) {
            if(!(letter in storeRef)) {
                storeRef[letter] = {};
            }
            storeRef = storeRef[letter];
        }
        storeRef['*'] = word;
    }

    search(word: string): boolean {
        let storeRef = this.store;
        for(const letter of word.split('')) {
            if(!(letter in storeRef)) {
                return false;
            }
            storeRef = storeRef[letter];
        }
        return '*' in storeRef;
    }

    startsWith(prefix: string): boolean {
        let storeRef = this.store;
        for(const letter of prefix.split('')) {
            if(!(letter in storeRef)) {
                return false;
            }
            storeRef = storeRef[letter];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */