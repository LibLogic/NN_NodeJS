var fs = require('fs');

fs.readFile('./read.txt', 'utf8', function(err, data){
	if(err){console.log(err)}
	fs.writeFile('writeMe.txt', data, function(err){
		if(err){console.log(err)}
	});
});
