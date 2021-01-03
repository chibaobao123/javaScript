function getTicketFee(person){
	var basePrise = 10000;
	if (person.age < 15){
		return 10000 * 0.8;
	} else if (person.age > 60) {
		return 10000 * 0.9;
	} else {
		return basePrise;
	}
};
var person = {
	age: 10
};
var fee = getTicketFee(person);
console.log(fee)