function generate2DArray(arr, len1, len2){
	let subArray = [];
	for(let i = 0; i < len2 + 1; i++) {
		subArray = [];
		for(let j = 0; j < len1 + 1; j++) {
			subArray.push("");
		}
		arr.push(subArray);
	}
}
function longestCommonSubsequence(str1, str2) {
  let arr = [];
	let len1 = str1.length;
	let len2 = str2.length;
	if(len1 == 0 || len2 == 0) return []
	generate2DArray(arr, len1, len2);
	for(let i = 1; i < len2 + 1; i++) {
		for(let j = 1; j < len1 + 1; j++) {
			if(str2.charAt(i - 1) === str1.charAt(j - 1)) {
				arr[i][j] = arr[i - 1][j - 1] + str2.charAt(i - 1);
			} else {
				arr[i][j] = (arr[i - 1][j].length>=arr[i][j - 1].length)?arr[i - 1][j]:arr[i][j - 1];
			}
		}
	}
	console.log("arr:", arr);
	return arr[len2][len1].split("");
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;

function generate2DArray(arr, len1, len2){
	let subArray = [];
	for(let i = 0; i < len2 + 1; i++) {
		subArray = [];
		for(let j = 0; j < len1 + 1; j++) {
			subArray.push(["", 0, null, null]);
		}
		arr.push(subArray);
	}
}
function longestCommonSubsequence(str1, str2) {
  let arr = [];
	let len1 = str1.length;
	let len2 = str2.length;
	if(len1 == 0 || len2 == 0) return []
	generate2DArray(arr, len1, len2);
	for(let i = 1; i < len2 + 1; i++) {
		for(let j = 1; j < len1 + 1; j++) {
			if(str2.charAt(i - 1) === str1.charAt(j - 1)) {
				arr[i][j] = [str2.charAt(i - 1), arr[i - 1][j - 1][1] + 1, i - 1, j - 1];
			} else {
				if(arr[i - 1][j][1] >= arr[i][j - 1][1]) {
					arr[i][j] = ["", arr[i - 1][j][1], i - 1, j];
				} else {
					arr[i][j] = ["", arr[i][j - 1][1], i, j - 1];
				}
			}
		}
	}
	// console.log("arr:", arr);
	let pointer = arr[len2][len1];
	let result = "";
	while(pointer[3] != null && pointer[2] != null) {
		result = result + pointer[0];
		pointer = arr[pointer[2]][pointer[3]];
	}
	return result.split("").reverse();
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
