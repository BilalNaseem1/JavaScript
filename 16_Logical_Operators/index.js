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