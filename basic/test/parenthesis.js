var input = '( ( ))()((((()))))';
var parenthesis = input.replace(/\s/g, '');
var origin = parenthesis.split('');

var target = [];
for (let index = 0; index < origin.length; index++) {
	var item = origin[index];
	var compare = target.pop();
	if (compare) {
		if (['()', ')('].indexOf(item + compare) === -1) {
			target.push(compare);
			target.push(item);
		}
	}
	else {
		target.push(item);
	}
}

if(target.length === 0) {
	console.log('These parentheses are matched!');
} else {
	console.log('These parentheses are not matched!');
}
