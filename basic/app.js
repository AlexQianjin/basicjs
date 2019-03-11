var superagent = require('superagent');

var url = 'http://www.cnblogs.com';
function getResult() {
	superagent
		.get(url)
		.set('Referer', 'https://www.baidu.com')
		.set('Accept', 'image/webp,image/*,*/*;q=0.8')
		.end(
			function (req, res) {
				console.log(url);
				console.log(res.text.substr(0, 30));
				console.log(new Date());
			}
		);
}
var time = 1000 * 60 * 5;
setInterval(getResult, time);


// module.exports = function(message){
//     console.log(`Custom Message: ${message}`);
// }

// var fs = require('fs');
// var path = require('path');

// var done = function(err, result) {
//     if(err) throw err;
//     console.log(result);
// };

// done(1, 1);

// var walk = function(dir, done) {
//   var results = [];
//   fs.readdir(dir, function(err, list) {
//     if (err) return done(err);
//     var pending = list.length;
//     if (!pending) return done(null, results);
//     list.forEach(function(file) {
//       file = path.resolve(dir, file);
//       fs.stat(file, function(err, stat) {
//         if (stat && stat.isDirectory()) {
//           walk(file, function(err, res) {
//             results = results.concat(res);
//             if (!--pending) done(null, results);
//           });
//         } else {
//           results.push(file);
//           if (!--pending) done(null, results);
//         }
//       });
//     });
//   });
// };

// var walk = function(dir, done) {
//   var results = [];
//   fs.readdir(dir, function(err, list) {
//     if (err) return done(err);
//     var i = 0;
//     (function next() {
//       var file = list[i++];
//       if (!file) return done(null, results);
//       file = dir + '/' + file;
//       fs.stat(file, function(err, stat) {
//         if (stat && stat.isDirectory()) {
//           walk(file, function(err, res) {
//             results = results.concat(res);
//             next();
//           });
//         } else {
//           results.push(file);
//           next();
//         }
//       });
//     })();
//   });
// };

// var dirPath = path.resolve('E:\\WH1508031_Alex\\Resource\\');
// walk(dirPath, function(err, results) {
//   if (err) throw err;
//   console.log(results);
// });

// function start() {

//     var arr = [444,5,1111,33,222];
//     var a = arr.sort();

//     console.log(a.join(','));

//     a = arr.sort(function (a, b) {
//         return a - b;
//     });

//     console.log(a.join(','));
//     // console.log('Hello, world!');
// }

// start();
// function constfuncs() {
//     var funcs = [];
//     for (var index = 0; index < 10; index++) {
//         funcs[index] = (function (index) { 
//             return function() { return index;};
//         }(index));

//     }
//     return funcs;
// }

// var funcs = constfuncs();
// funcs[5]();
// console.log(funcs[5]());