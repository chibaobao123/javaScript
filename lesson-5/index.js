function tossACorn(){
	var value = Math.random();
	if (value > 0.5){
		console.log(value);
		console.log('Mặt sấp');
	} else {
		console.log(value);
		console.log('Mặt ngửa');
	}
};

tossACorn();