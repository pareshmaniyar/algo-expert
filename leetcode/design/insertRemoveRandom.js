
var RandomizedSet = function() {
    this.data = {};
    this.indexMap = {};
    this.highest = -1;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this.data) return false;
    this.highest++;
    this.data[val] = this.highest;
    this.indexMap[this.highest] = val;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!(val in this.data)) {
        return false;
    }
    const lastVal = this.indexMap[this.highest];
    const curr = this.data[val];
    this.indexMap[this.highest] = val;
    this.indexMap[curr] = lastVal;
    this.data[lastVal] = curr;
    delete this.data[val];
    delete this.indexMap[this.highest];
    this.highest--;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * (this.highest + 1));
    return this.indexMap[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */