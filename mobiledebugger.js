(function() {
	var isInitialized = false, _console = {};

	function log(body, file, line) {
		if(line==null ||line==undefined ||!line) {
			line = "-";
		}
		if(file==null ||file==undefined ||!file) {
			file = "-";
		}
		if(body==null ||body==undefined ||!body) {
			body = "-";
		}
		$.post( "//mobiledebugger.com/log/"+ROOM_NAME, { body: body,line: line, file : file} );
	}

	window.onerror = function(msg, file, line, col, error) {
    	// callback is called with an Array[StackFrame]
    	log(error, file, line);
	};

	function originalFnCallDecorator(fn, fnName) {
		return function() {
			fn.apply(this, arguments);
			if (typeof _console[fnName] === 'function') {
				_console[fnName].apply(console, arguments);
			}
		};
	}

	function destroy() {
		isInitialized = false;
		console.log = _console.log;
	}

	function init() {
		if (isInitialized) { return; }
			isInitialized = true;
		_console.log = console.log;
		console.log = originalFnCallDecorator(log, 'log');
	}

	init();
	window.logger = {
		log: log,
		init: init,
		destroy:destroy,
	}
})();
