'use strict';

// Parser function:

function Parser() {

};

Parser.prototype.parse = function(textFile) {

	var result = {};

	var lines = textFile.split('\n');

	lines.forEach(function(line){

		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if(!result[letter]) {

			result[letter] = 0;
		}

		result[letter] += parseInt(count);
	});

	return result;
}

// Export the Parser constructor from this module so as to create Parser constructor functions's object and use it method to parse.
module.exports = Parser;
