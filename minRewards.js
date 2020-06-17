function minRewards(scores) {
	let arr = [1];
	let n = scores.length;
	if(n==1) return 1;
	arr.push(scores[0]<scores[1]?2:0);
	// console.log(arr)
	let res = arr[0] + arr[1];
	let min = arr[0]>arr[1]?arr[1]:arr[0];
	for(let i = 2; i < n;i++){
		if(scores[i] > scores[i - 1]){
			arr[i] = arr[i - 1] + 1;
		} else {
			arr[i] = arr[i - 1] - 1;
		}
		if(scores[i] < scores[i - 1] && scores[i - 1] > scores[i - 2]){
			arr[i] = arr[i] < 1?arr[i]:1;
		}
		if(arr[i] < min) {
			min = arr[i];
		}
		// res = res + arr[i];
	}
	let err = (1 - min);
	console.log(scores);
	console.log(arr, err);
	arr = arr.map(i => i + err);
	for(let i = 2; i < n;i++){
		if(scores[i] < scores[i - 1] && scores[i - 1] > scores[i - 2]){
			arr[i] = 1;
		}
		if(scores[i] > scores[i - 1]){
			arr[i] = arr[i - 1] + 1;
		} else {
			arr[i] = arr[i - 1] - 1;
		}
	}
	console.log(arr, "1")
	if(scores[0] < scores[1] && scores[1] > scores[2] ) {
		// res = res - (1 - min);
		arr[0] = 1;
	}
	// console.log("asd: ", arr[n - 2] > arr[n - 1]);
	if(scores[n - 2] > scores[n - 1] && scores[n - 2] > scores[n - 3]){
		// res = res - (1 - min) - arr[n - 1] + 1;
		// console.log("asd");
		arr[n - 1] = 1;
	}
	
	res = arr.reduce((t, i) => t + i);
	console.log(arr, res);
	return res;
}

// Do not edit the line below.
exports.minRewards = minRewards;
