/*
	Same example as like my_parse.js to print the letter and its respective count but here we use it using organized way,
	for that we write parse logic seperatly into diffrent file and used it here.
*/

'use strict';

// Load the ('filesystem') fs module.
var fs = require('fs');

// Call and include here the custom created parser function file where we write parser function who parse and print the logic.
var Parser = require('../test/parser_function');

// Read content of file into memory.
fs.readFile('../test/example_log.txt', function(err, logData) {

	// If an error occurred, throwing it will
  	// display the exception and end our app.

	if(err) throw err;

	// Log data is in form of Buffer(inter byte array format), convert it into string format:
	var text = logData.toString();

	// create parser object here:
	var parser = new Parser();

	console.log(parser.parse(text));

});

