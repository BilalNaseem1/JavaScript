// variable is a container for storing data values

// there are two types of variables in javascript
// 1. declaring a variable
// 2. assigning a value to a variable

let x = 10;


let y;
y = 20;

console.log('The value of x is ', x);
console.log(`The value of y is ${y}`);

// Data types in javascript
// 1. string
// 2. number
// 3. boolean

// string
let firstName = 'John';
let lastName = 'Doe';

// number
let age = 30;
let gpa = 3.5;

// boolean
let isStudent = true;


let personalInfo = `My name is ${firstName} ${lastName} and I am ${age} years old.`
let uniInfo = `My GPA is ${gpa} and I am a student: ${isStudent}`

console.log(personalInfo);
console.log(uniInfo);

document.getElementById('p1').textContent = personalInfo;
document.getElementById('p2').textContent = uniInfo;

// concatenation
console.log('My name is ' + firstName + ' ' + lastName + ' and I am ' + age + ' years old.');
console.log('My GPA is ' + gpa + ' and I am a student: ' + isStudent);

//displaying the type of a variable
console.log(typeof x);
console.log(typeof y);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof age);
console.log(typeof gpa);
console.log(typeof isStudent);


