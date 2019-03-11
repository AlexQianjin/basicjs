let arr = [2, 3, 4, 5, 5, 4, 1];

let numbers = new Set(arr);

console.log(numbers);

class SuperArray extends Array {
	diff(comparisonArray) {
		const hash = new Set(comparisonArray);
		return this.filter(elem => !hash.has(elem));
	}
}

let superArr = new SuperArray();
// console.log(superArr.diff(arr));
// console.log(arr);

console.log(superArr.diff.call(arr, arr));
