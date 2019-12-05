// (function() {
// 	console.log('this is the start');

// 	setTimeout(function cb() {
// 		console.log('Callback 1: this is a msg from call back');
// 	}); // has a default time value of 0

// 	console.log('this is just a message');

// 	setTimeout(function cb1() {
// 		console.log('Callback 2: this is a msg from call back');
// 	}, 0);

// 	console.log('this is the end');
// })();

// // "this is the start"
// // "this is just a message"
// // "this is the end"
// // "Callback 1: this is a msg from call back"
// // "Callback 2: this is a msg from call back"

// setTimeout(()=>console.log("d"), 0)
// var r = new Promise(function(resolve, reject){
// 	resolve()
// });
// r.then(() => {
// 	var begin = Date.now();
// 	while(Date.now() - begin < 1000);
// 	console.log("c1")
// 	new Promise(function(resolve, reject){
// 		resolve()
// 	}).then(() => console.log("c2"))
// });

// var r = new Promise(function(resolve, reject) {
// 	console.log('a');
// 	resolve();
// });
// setTimeout(() => console.log('d'), 0);
// r.then(() => console.log('c'));
// console.log('b');

// demo
console.log('script start');

setTimeout(() => {
  console.log('setTimeout 1');
});

Promise.resolve()
.then(() => {
  console.log('promise 1');
})
.then(() => {
  console.log('promise 2');
});

console.log('script end');