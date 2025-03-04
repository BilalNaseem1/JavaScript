// Logical Operators are used to combine conditional statements

// List of Logical Operators

//1.  &&    -       Logical AND
//2.  ||    -       Logical OR
//3.  !     -       Logical NOT

let temp = window.prompt('What is the temperature outside?');

if (temp > 30 && temp < 40) {
    console.log('It is a hot day');
} else if (temp < 30) {
    console.log('It is a cold day');
} else {
    console.log('It is neither hot nor cold');
}

// equality operators
// 1.  ==    -       Equality - Compares the values for e.g. 10 == '10' would return true
// 2.  ===   -       Strict Equality - Compares the values and the data type for e.g. 10 === '10' would return false
// 3.  !=    -       Inequality - Compares the values for e.g. 10 != '10' would return false
// 4.  !==   -       Strict Inequality - Compares the values and the data type for e.g. 10 !== '10' would return true

// example

let a = 10;
let b = '10';

if (a == b) {
    console.log('a is equal to b');
} else {
    console.log('a is not equal to b');
}