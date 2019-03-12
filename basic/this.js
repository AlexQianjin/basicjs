// Declared Object
// var person = {
// 	first: 'John',
// 	last: 'Smith',
// 	full: function() {
// 		console.log(this.first + ' ' + this.last);
// 	}
// };
// person.full();


// new
// function Car(make, model) {
// 	this.make = make;
// 	this.model = model;
// }

// var myCar = new Car('Ford', 'Escape');
// console.log(myCar);


// call apply bind
function add(c, d) {
	console.log(this.a + this.b + c + d);
}
add(3, 4);
// output NaN

var ten = { a: 1, b: 2 };
add.call(ten, 3, 4);
// output 10
add.apply(ten, [3, 4]);
// output 10

var small = {
	a: 1,
	go: function(b, c, d) {
		console.log(this.a + b + c + d);
	}
};
var large = {
	a: 100
};

small.go(2, 3, 4);
// output 10

small.go.call(large, 2, 3, 4);
// output 109

var bindTest = small.go.bind(large, 2);

console.log(bindTest);
// output function (b,c,d){console.log(this.a+b+c+d);}

bindTest(3, 4);
// output 109
