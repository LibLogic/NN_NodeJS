var fs = require('fs');

fs.mkdir('stuff', function(){
	fs.readFile('read.txt', 'utf8', function(err, data){
		if(err){console.log(err)}
		fs.writeFile('./stuff/writeFile.txt', data, function(err){
			if(err){console.log(err)}
		})
	});
});