// ternary operator is a short form of an if statement
// it is used to assign a value to a variable based on a condition
// the syntax is: condition ? value1 : value2
// which means if condition is true, assign value1 to variable, else assign value2 to variable

const age =window.prompt(`How old are you?`);
const sent1 = 'You are an adult';
const sent2 = 'You are not an adult';


age >= 18 ? console.log(sent1) : console.log(sent2);


document.getElementById("age").textContent = age >= 18 ? sent1 : sent2;