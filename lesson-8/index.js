var member = {
	tier : 'diamon'
};
var member1 = {
	tier : 'silver'
};
function getTotal(price, card){
	var discountRate;
	switch (card.tier) {
		case 'bronze':
		discountRate = 0.02;
		break;
		case 'silver':
		discountRate = 0.05;
		break;
		case 'gold':
		discountRate = 0.1;
		break;
		// case 'diamon':
		// discountRate = 0.2;
		// break;
		default:
		discountRate = 0.2;
		break;
	}

		return price * (1 - discountRate);
};
var total = getTotal(500000, member);
var total1 = getTotal(550000, member1);
console.log(total);
console.log(total1);