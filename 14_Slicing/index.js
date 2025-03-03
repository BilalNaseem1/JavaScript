// string slicing means extracting a part of a string

const fullname = `Bilal Naseem`;

let firstName = fullname.slice(0, 5);
console.log(firstName);

let lastName = fullname.slice(0, 7);
console.log(lastName);

console.log(fullname.slice(5));
console.log(fullname.slice(-2));

const email = `bilalnaseem1@hotmail.com`

let username = email.slice(0, email.indexOf('@'));
console.log(username);

let extension = email.slice(email.indexOf('@') + 1);
console.log(extension);