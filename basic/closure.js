function makeFunc() {
	var name = 'Mozilla';
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();
