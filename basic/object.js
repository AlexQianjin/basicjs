// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };

//   const me = Object.create(person, {foo: {
//     writable: true,
//     configurable: true,
//     value: 'hello'
//   }});

//   me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten

//   me.printIntroduction();
//   // expected output: "My name is Matthew. Am I human? true"

// function ShowProperties(b) {
//     for (var i in b) {
//         console.log(i + ": " + b[i] + "\n")
//     }
// }

// ShowProperties(person);

// const object1 = {};

// Object.defineProperties(object1, {
//     property1: {
//         value: 42,
//         writable: true
//     },
//     property2: {}
// });

// console.log(object1.property1);
// // expected output: 42

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

function test() {
	'use strict';

	let obj1 = { a: 0, b: { c: 0 } };
	let obj2 = Object.assign({}, obj1);
	console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

	obj1.a = 1;
	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
	console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

	obj2.a = 2;
	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
	console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

	obj2.b.c = 3;
	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
	console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

	// Deep Clone
	obj1 = { a: 0, b: { c: 0 } };
	let obj3 = JSON.parse(JSON.stringify(obj1));
	obj1.a = 4;
	obj1.b.c = 4;
	console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

test();
