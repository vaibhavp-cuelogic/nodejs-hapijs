'use strict';

// Load the ('filesystem') fs module.
var fs = require('fs');

// Read content of file into memory.
fs.readFile('../test/example_log.txt', function(err, logData){

	// If an error occurred, throwing it will
  	// display the exception and end our app.

	if(err) throw err;

	// Log data is in form of Buffer(inter byte array format), convert it into string format:
	var text = logData.toString();

	// Difne empty result object:
	var result = {};

	var lines = text.split('\n');

	lines.forEach(function(line){

		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if(!result[letter]) {
			result[letter] = 0;
		}

		result[letter] += parseInt(count);

	});

	console.log(result);

});

