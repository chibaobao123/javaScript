var readlineSync = require('readline-sync');

var pet = {};
var name = readlineSync.question('Your pet name is :  ');
var gender = readlineSync.question('Your pet gender is (male or female):  ');
var age = readlineSync.question('Your pet age is :  ');
pet.name = name;
pet.gender = gender;
pet.age = parseInt(age);
console.log(pet)