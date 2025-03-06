// functions
// syntax
// function functionName() {
//     // code to be executed
// }


function happyBirthday() {
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
}

happyBirthday();

function happyBirthday2(name, age) {
    console.log(`Happy birthday ${name}! You are ${age} years old!`);
}

happyBirthday2('John', 20);


function add(x, y){
    return x + y;
}

const number = add(1, 2);

console.log(number);