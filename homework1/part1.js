#!/usr/bin/env node
var fs = require('fs');
var outfile = 'part1.txt';
var text = "A startup is a business built to grow rapidly.\n";

fs.writeFileSync(outfile, text);

console.log("Wrote: " + text + "\nFilename: " + outfile);

