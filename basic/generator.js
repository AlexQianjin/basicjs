function* abc() {
    let count = 0;
    while(true) {
        let msg = yield ++count;
        // console.log(msg);
    }
}

let iter = abc();
console.log(iter.next().value);
// 1
console.log(iter.next('abc').value);
// 'abc'
// 2
console.log(iter.next('abcefg').value);
