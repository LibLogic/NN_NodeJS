var fs = require('fs');

var readMe = fs.readFileSync('read.txt', 'utf8');

	
console.log(readMe);