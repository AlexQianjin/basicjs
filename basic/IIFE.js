var Car = function() {
	var _name;
	var _print = function(str) {
		console.log(str);
    };

    this.print = _print;
    
	(function() {
		_name = 'xxx';

		_print(_name);
	})();
};

var car = new Car();
car.print('xxxxxx');
