var fs = require ('fs');

console.log('start');
var song1 = fs.readFile('song1.txt',{encoding:'utf8'},function(error, song1){
	console.log(song1);
});
var song2 = fs.readFile('song2.txt',{encoding:'utf8'}, function(error, song2){
	console.log(song2)
});
console.log('end');