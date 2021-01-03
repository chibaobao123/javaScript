var fs = require('fs');

var text = fs.readFileSync('./song',{encoding: 'utf8'});
console.log(text);

 var text2 = fs.writeFileSync('./song', 'hello! bro!')
 console.log(text2);