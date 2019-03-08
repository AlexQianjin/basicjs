// var promise1 = new Promise(function(resolve, reject) {
//     // throw new Error('xxx');
//     setTimeout(function() { 
//       resolve('foo');
//     }, 300);
//   });
  
// promise1.then(function(value) { 
// console.log(value);
// // expected output: "foo"
// var promise2 = new Promise(function(resolve, reject) {
//   // throw new Error('xxx');
//   setTimeout(function() { 
//     resolve('doo');
//   }, 300);
// });
// return promise2;
// }, function(value) {
// //   console.log(value);
// }).then(value => console.log(value)).catch(function(error) {
//     console.log(error);
// }).finally(function () {
//     console.log('The end');
// });
  
//   console.log(promise1);

// let date = new Date();
// console.log(date.getTime());

function start() {
  return new Promise((resolve, reject) => {
    resolve('start');
  });
}
start()
  .then(data => {
    // promise start
    console.log(data);
    return new Promise(resolve => resolve(1));
    // return Promise.resolve(1); // 1
  })
  .then(data => {
    // promise 1
    console.log(data);
  })
// start
// 1