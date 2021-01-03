var Mouse = require('./mouse.js');
var Cat = require('./cat.js');

var jerry =  new Mouse('orange');
var mickey = new Mouse('white');
console.log(jerry);
console.log(mickey);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom)