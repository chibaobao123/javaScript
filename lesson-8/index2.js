var trafficLight = 'green';
function goOrNot(light){
	switch (light){
		case 'green':
		case 'yellow':
			console.log('go');
			break;
		case 'red':
			console.log('stop');
			break;	
	}
}
goOrNot(trafficLight);