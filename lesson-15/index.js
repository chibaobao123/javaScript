var fs = require ('fs');
var co = require ('co');

function readFilePromise(path){
	return new Promise(function(resolve, reject) {
		fs.readFile( path, { encoding:'utf8' }, function(err,data){
			if(err){
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

var readFile = co.wrap(function*(files){
	var values = yield files.map(function(file){
		return readFilePromise(file);
	});
	return values;
});
readFile(['song1.txt', 'song4.txt', 'song3.txt'])
	.then(function(values){
		console.log(values);
	})
	.catch(function(err){
		console.log(err);
	})