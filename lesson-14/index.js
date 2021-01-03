var fs = require ('fs');

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

function onDone (song){
	console.log(song);
}

function onError (err){
	console.log(err);
}



Promise.all ([
	readFilePromise('./song1.txt'),
	readFilePromise('./song2.txt'),
	readFilePromise('./song3.txt')
])	.then(onDone)
	.catch(onError)