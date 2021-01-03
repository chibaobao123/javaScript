var  readLineSync = require ('readline-sync'); //gọi thư việ nó ra
var fs = require ('fs');//gọi thư việ nó ra

var students  = [];

function loadData(){
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}

function showMenu(){
	console.log('1 : show all students');
	console.log('2 : create a new students');
	console.log('3 : save & exit');
	var option = readLineSync.question('-->');
	switch  (option){
		case '1':
			showStudent();
			showMenu();
			break;
		case '2':
			createStudent();
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console.log('wrong ! please choose again!');
			showMenu();
			break;
	}
}

function showStudent(){
	for ( var student of students){
		console.log(student. name, student.age);
	}
}

function createStudent(){
	var name = readLineSync.question('Name : ');
	var age = readLineSync.question('age : ');
	var student = {
		name: name,
		age: parseInt(age)
	}
	students.push(student)	
}

function saveAndExit(){
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json',content,{encoding:'utf8'});
}


function main(){
	loadData();
	showMenu();
}
main()