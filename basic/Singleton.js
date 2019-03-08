var printer = (function() {
	var printerInstance;

	function create() {
		function print() {
			// underlying printer mechanics
		}

		function turnOn() {
			// warm up
			// check for paper
		}

		return {
			// public + private states and behaviors
			print: print,
			turnOn: turnOn
		};
	}

	return {
		getInstance: function() {
			if (!printerInstance) {
				printerInstance = create();
			}
			return printerInstance;
		}
	};

	function Singleton() {
		if (!printerInstance) {
			printerInstance = intialize();
		}
	}
})();

var officePrinter = printer.getInstance();

console.log(officePrinter);
