#!/usr/bin/env node
var primes = [];
var number = 2;

// collect 100 prime numbers
while ( primes.length <= 100 ) {
	var isPrime = true;

	// run through numbers lower than the current number
	// divide by the number and look for whole numbers
	for ( var x=2; x<number; x++ ) {
		var result = number/x;

		if ( Math.floor(result) == result ) {
			isPrime = false;
		}
	}

	if ( isPrime ) {
		primes.push(number);
	}

	// keep adding numbers
	number++;
}

var fs = require('fs');
var outfile = 'part2.txt';
var text = primes.join();
fs.writeFileSync(outfile, text);
console.log('Wrote prime numbers to ' + outfile);
