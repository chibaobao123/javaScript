var classes = [
	{id: 0, class: '1A'},
	{id: 1, class: '2A'},
	{id: 2, class: '3A'},
];

var students = [
	{id: 0, name: 'bao', age: 21, class: 0},
	{id: 1, name: 'bao', age: 21, class: 0},
	{id: 2, name: 'bao', age: 21, class: 1},
	{id: 3, name: 'bao', age: 21, class: 0},
	{id: 4, name: 'bao', age: 21, class: 1},
	{id: 5, name: 'bao', age: 21, class: 2},
	{id: 6, name: 'bao', age: 21, class: 2},
];

var teachers = [
	{id: 0, name: 'bao', age: 21, class: 0},
	{id: 1, name: 'bao', age: 21, class: 1},
	{id: 2, name: 'bao', age: 21, class: 2},
];

function getStudentInClass(id){
	var classObject = classes.find(function(x){
		return x.id === id;
	})
	var studentInClass = students.filter(function(student) {
		return student.class === classObject.id;
	});
	return studentInClass;
}

function getTeacherInClass(id){
	var classObject = classes.find(function(x) {
		return x.id === id;
	});
	var teacherInClass = teachers.filter(function(teacher){
		return teacher.class === classObject.id;
	});
	return teacherInClass;
}

studentInClass = getStudentInClass(0);
teacherInClass = getTeacherInClass(2);
	
console.log(studentInClass);
console.log(teacherInClass)