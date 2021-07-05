function reverseWords(arr) {
    let cache = [];
    let pointer = arr.length - 1;
    let result = [];
    while(pointer >= 0) {
        if(arr[pointer] === ' ') {
            while(cache.length > 0) {
                result.push(cache.pop());
                console.log(cache, result);
            }
            result.push(' ');
        } else {
            cache.push(arr[pointer]);
        }
        // console.log(cache, result);
        pointer--;
    }
    while(cache.length > 0) {
      result.push(cache.pop())
    }
    return result;
  }
const result  = reverseWords(['c', 'a', 't' ,' ' , 'd', 'o', 'g']);
console.log(result);