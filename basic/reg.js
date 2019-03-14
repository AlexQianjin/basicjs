// let result = '$TESTONE $TESTONE'.replace(new RegExp('\\$TESTONE', 'gm'), 'foo');
let input = '+++++alex_@@@@_alex-';
// ['+', '@'].forEach(item => {
// 	input = input.replace(new RegExp(`${item}`, 'gm'), '');
// });
// input = input.replace(/[+]|[@]|/gm, '');
input = input.replace(/[^(\w|_)]/gm, '');
// let result = '$TESTONE $TESTONE'.replace(/\$TESTONE/gm, 'foo');
console.log(input);
