function* abc() {
  let count = 0;
  while (true) {
    let msg = yield ++count;
    console.log(msg);
  }
}

let iter = abc();
console.log(iter.next().value);
// 1
console.log(iter.next("abc").value);
// 'abc'
// 2
console.log(iter.next("abcefg").value);

function* foo() {
  let x = yield "Please give me a value of x";
  console.log(x);
  let y = yield "Please give me a value of y";
  console.log(y);
  let z = yield "Please give me a value of z";
  console.log(z);

  return x + y + z;
}

let generatingFoo = foo();

let re = generatingFoo.next();
console.log(re);
re = generatingFoo.next(8);
console.log(re);
re = generatingFoo.next(17);
console.log(re);
re = generatingFoo.next(25);
console.log(re);
