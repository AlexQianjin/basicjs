var TeslaModelS = function() {
	this.numWheels = 4;
	this.manufacturer = 'Tesla';
	this.make = 'Model S';
};

TeslaModelS.prototype = {
	go: function() {
		// Rotate wheels
	},
	stop: function() {
		// Apply brake pads
	}
};

var tesla = new TeslaModelS();

console.log(tesla);

var TeslaModelS2 = function() {
	this.numWheels = 4;
	this.manufacturer = 'Tesla';
	this.make = 'Model S';
};

TeslaModelS2.prototype = (function() {
	var go = function() {
		// Rotate wheels
	};

	var stop = function() {
		// Apply brake pads
	};

	return {
		pressBrakePedal: stop,
		pressGasPedal: go
	};
})();

var tesla2 = new TeslaModelS2();

console.log(tesla2);
