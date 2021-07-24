
console.log('Practice makes Perfect!');  
/*

- Ques
drawHTree(x, y, len, depth) {

}
- drawHTree(0, 0, 1, 1)

function drawOneH(x, y, len)
drawLine([-0.5, 0], [0.5, 0])
drawLine([-0.5, 0.5], [-0.5, -0.5])
drawLine([0.5, 0.5], [0.5, -0.5])

|   |
-----
|   |

drawLine(pt1, pt2)
depth - 1, call - 1
2 - 1 + 4
3 - 1 + 4 + 4 * 4
n - 1 + 4 ^ 1 + 4 ^ 2 + 4 ^ 3 + .... + 4 ^ n - 1
time - O(4 ^ n) n - depth

drawHTree(x, y, len, depth)
- recursive
  - base depth = 0 return
  - drawOneH
  - recursion - 4 times ending, len
  - space - O(depth)
- iterative
  - queue - depth
  - Space - O(4 ^ (n - 1))
x-h,y+h        x+h, y+h
x-h, y   x,y   x+h, y
x-h,y-h        x+h, y-h
Avik

*/

function drawHTree(x, y, len, depth) {
  if(depth === 0) return;
  drawOneH(x, y, len, depth);
  let h = len / 2;
  const points = [
    [x - h, y + h], [x - h, y - h],
    [x + h, y + h], [x + h, y - h]
  ];
  for(const [newX, newY] of points) {
    drawHTree(newX, newY, (len / Math.sqrt(2)), depth - 1);
  }
}

function drawOneH(x, y, len, depth) {
  let h = len / 2;
  const points = [
    [[x - h, y], [x + h, y]],
    [[x - h, y + h], [x - h, y - h]],
    [[x + h, y + h], [x + h, y - h]]
  ];
  for(const [start, end] of points) { // IT SHOULD BE OF NOT IN!!!
    drawLine(start, end);
  }
}

function drawLine(pt1, pt2) {
  console.log(pt1, pt2);
}

console.log(drawHTree(0, 0, 4, 2));