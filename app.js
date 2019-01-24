var fs = require('fs');

fs.unlink('./stuff/writeFile.txt', function(err){
	if(err){console.log(err)}
	fs.rmdir('./stuff', function(err){
		if(err){console.log(err)}		
	});
});