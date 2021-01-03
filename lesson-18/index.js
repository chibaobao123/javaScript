// var i = 0;
// var ID = setInterval(function(){
// 	i++;
// 	console.log(i)
// 	if(i === 10){
// 		clearInterval(ID);
// 		console.log('hết giờ');
// 	}
// },1000)
var fs = require ('fs');

function countFrom(a,b){
	return new Promise(function(resolve, reject) {
			if( a > b ){
				console.log('err...');
			} else {
				var id =setInterval(function(){
				console.log(a++);
					if(a > b){
						clearInterval(id);
						resolve();
					}		
				},1000)
			}
});
}

countFrom(15,10)
.then(function(){
	console.log('Done');
});