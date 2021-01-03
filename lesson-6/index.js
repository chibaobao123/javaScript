function tossACorn(){
	var value = Math.random();
	var result = (value > 0.5) ? 'mặt sấp' : 'mặt ngửa';
	//if (value > 0.5){
		//console.log(value);
		//result = 'Mặt sấp';
	//} else {
		//console.log(value);
		//result ='Mặt ngửa';
	//}
	console.log(result);
};

tossACorn();