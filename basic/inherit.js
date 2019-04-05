// function Parent(name) {
// 	this.name = name;
// }

// Parent.prototype.getName = function() {
// 	console.log('parent',this.name);
// };

// function Child(name) {
//     this.name = name;
// }

// Child.prototype.getName = function() {
// 	console.log('child',this.name);
// };
// Child.prototype = new Parent('childs');
// var c = new Child('child');
// c.getName();

var father = function() {
	this.age = 52;
	this.say = function() {
		console.log(
			'hello i am ' + this.name + ' and i am ' + this.age + 'years old'
		);
	};
};

var child = function() {
	this.name = 'bill';
	father.call(this);
};

father.prototype.shout = function() {
	console.log('xxx');
};

var man = new child();
man.say();
man.shout();
