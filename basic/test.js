// // for (var i = 0; i < 10; i++) {
// //     (function(i){
// //         setTimeout(function() { console.log(i); }, 100 * i);
// //     }(i));
// // }

// // for (let i = 0; i < 10; i++) {
// //     setTimeout(function() { console.log(i); }, 100 * i);
// // }

// // let messageFunction = function (weather){
// //     let message = `It is ${weather} today`;
// //     console.log(message);
// // }

// // messageFunction("raining");
// var log = require('nodepractice');
// log("xxx");

let sum = [0, 1, 2, 3].reduce(function(acc, val) {
	return acc.toString() + val.toString();
}, 0);

let sum1 = [0, 1, 2, 3].map(x => x * 2);

console.log(sum);
console.log(sum1);

// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [
	{ name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
	{ name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
	{ name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 }
];

// allbooks - list which will contain all friends books +
// additional list contained in initialValue
var allbooks = friends.reduce(
	function(prev, curr, index, array) {
		console.log(index);
		console.log(array);
		return [...prev, ...curr.books];
	},
	['Alphabet']
);

console.log(allbooks);

// // Base64
// function btoa(str) {
//   if (Buffer.byteLength(str) !== str.length)
//     throw new Error('bad string!');
//   return Buffer(str, 'binary').toString('base64');
// }

// let s = btoa('AlexQin');
// console.log(s);
// let ss=atob(s);
// console.log(ss);

// var numbers=[1,33,7,12,5];
// numbers.sort();
// function numericSort(a,b)
// {
//     if(isNaN(a) || isNaN(b)){
//         return 0;
//     }
//     if(a == b){
//         return 0;
//     }
//     if(a < b){
//         return -1;
//     }
//     if(a > b){
//         return 1;
//     }
// }
// numbers.sort(numericSort);
// console.log(numbers.join(','));

//Math.floor
// let r = 3.9 | 0;
// console.log(r);

// const compose = (...fns) =>
//     (arg) =>
//         fns.reduce(
//             (composed, f) => f(composed),
//             arg
//         )

// const oneSecond = () => 1000
// const getCurrentTime = () => new Date()
// const clear = () => console.clear()
// const log = message => console.log(message)

// const serializeClockTime = date =>
//     ({
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds()
//     })
// const civilianHours = clockTime =>
//     ({
//         ...clockTime,
//         hours: (clockTime.hours > 12) ?
//             clockTime.hours - 12 :
//             clockTime.hours
//     })
// const appendAMPM = clockTime =>
//     ({
//         ...clockTime,
//         ampm: (clockTime.hours >= 12) ? "PM" : "AM"
//     })

// const display = target => time => target(time)
// const formatClock = format =>
//     time =>
//         format.replace("hh", time.hours)
//             .replace("mm", time.minutes)
//             .replace("ss", time.seconds)
//             .replace("tt", time.ampm)
// const prependZero = key => clockTime =>
//     ({
//         ...clockTime,
//         [key]: (clockTime[key] < 10) ?
//             "0" + clockTime[key] :
//             clockTime[key]
//     })

// const convertToCivilianTime = clockTime =>
//     compose(
//         appendAMPM,
//         civilianHours
//     )(clockTime)

// const doubleDigits = civilianTime =>
//     compose(
//         prependZero("hours"),
//         prependZero("minutes"),
//         prependZero("seconds")
//     )(civilianTime)
// const startTicking = () =>
//     setInterval(
//         compose(
//             clear,
//             getCurrentTime,
//             serializeClockTime,
//             convertToCivilianTime,
//             doubleDigits,
//             formatClock("hh:mm:ss tt"),
//             display(log)
//         ),
//         oneSecond()
//     )
// startTicking()
