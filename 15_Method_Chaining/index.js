// Method Chaining is calling one method after another method
// It is a way to make our code more readable and easier to understand

// WITHOUT METHOD CHAINING

// let username = window.prompt('What is your name?');
// username = username.trim();
// let firstletter = username.charAt(0)
// let firstletter_upper = firstletter.toUpperCase();
// console.log(firstletter_upper);
// let otherletters = username.slice(1);
// console.log(otherletters);
// let otherletters_lower = otherletters.toLowerCase();
// console.log(otherletters_lower);
// username = firstletter_upper + otherletters_lower;
// console.log(username);



// WITH METHOD CHAINING
let username = window.prompt('What is your name?');
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);