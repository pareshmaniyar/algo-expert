/*
- PS:
  - int, string, {}

{
  key1: "1",
  key2: 2,
  key3: {
    a: "1"
  }
}

https://www.algoexpert.io/questions
- Approach 1:
  - recursion (dict, baseValue = "", result = {})
  - loop through keys - key1, key2, key3
  - if dict[key] type int/string: res[baseValue + key]
  - dictionary(dict[key], baseValue + "." + key, result);
- T - O(n) - no. of value of dict
- S - O(n) - result

*/

function flattenDictionary(dict) {
    const result = {};
    helperRecursion(dict, "", result);
    return result;
  }
  
  function helperRecursion(dict, baseValue, result) 
  {
    for(const key of Object.keys(dict)) {
      const value = dict[key];
      if(typeof value === "number" || typeof value === "string") {
        let flattenedKey = "";
        if(baseValue)
          flattenedKey += baseValue;
        if(key)
          flattenedKey += key;
        if(flattenedKey[flattenedKey.length - 1] === ".")
          flattenedKey = flattenedKey.substring(0, flattenedKey.length - 1);
        result[flattenedKey] = value;
      } else {
        let nextBaseValue = "";
        if(baseValue) {
          nextBaseValue += baseValue;
        }
        if(key) {
          nextBaseValue += `${key}.`;
        }
        helperRecursion(
          value,
          nextBaseValue,
          result);
      }
    }
  }
  
  /*
  {
    key1: "1",
    key2: 2,
    key3: {
      a: "1",
      "": 2
    }
  }
  */
  
  