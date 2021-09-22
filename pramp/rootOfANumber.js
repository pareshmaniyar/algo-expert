/*
x, n
7, 3 3rt(7)
9, 2 = 3

2|10
3rt(7) = x
7 = x ^ 3
log7 = 3logx
(1/3)log7 = logx
x = e ^ ((1/3)log7)


x = 5rt(100)
x ^ 5 = 100
log(x) = (1/5) *log100
x = e ^ ((1/5) *log100);
I CANT USE BINARY SEARCH HERE!
BELOW soln is correct though!
*/

function root(x, n) {
    const val = (1 / n) * Math.log(x);
    const str = Math.pow(2.71828, val);
    const round = (Math.round(str * 1000) / 1000) + "";
    if(!round.includes('.')) return round;
    let [integerVal, decimal] = round.split('.');
    return `${integerVal}.${decimal.substr(0, 3)}`;
  }
  
  