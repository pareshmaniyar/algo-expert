/*
- Just like spiral matrix;

*/

function spinRings(array) {
	let len = array.length;
	let loops = parseInt(len / 2);
	let x = 0, y = 0;
	let maxRight = len - 1, maxBottom = len - 1, minLeft = 0, minTop = 0;
	for(let i = 0; i < loops; i++) {
		moveRight(x, y, array[x][y]);
		x++;y++;
		maxRight--;maxBottom--;minLeft++;minTop++;
	}
  function moveRight(x, y, value) {
		if(y < maxRight) {
			let temp = array[x][y + 1];
			array[x][y + 1] = value;
			moveRight(x, y + 1, temp);
		} else {
			moveDown(x, y, value);
		}
	}
	/*
		x = 1 y = 3 value = 4
		[
			[1, 1, 2, 3],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16]
		]

*/
	function moveDown(x, y, value) {
		if(x < maxBottom) {
		  let temp = array[x + 1][y];
			array[x + 1][y] = value;
			moveDown(x + 1, y, temp);
		} else {
			moveLeft(x, y, value);
		}
	}
	function moveLeft(x, y, value) {
		if(y > minLeft) {
		  let temp = array[x][y - 1];
			array[x][y - 1] = value;
			moveLeft(x, y - 1, temp);
		} else {
			moveUp(x, y, value);
		}
	}
	function moveUp(x, y, value) {
		if(x > minTop) {
		  let temp = array[x - 1][y];
			array[x - 1][y] = value;
			moveUp(x - 1, y, temp);
		} else {
			array[x][y + 1] = value;
		}
	}
}

// Do not edit the line below.
exports.spinRings = spinRings;
