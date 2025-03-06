// String methods are functions that can be used to manipulate strings
// String methods are used to change the value of a string

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName);
console.log(lastName);

// charAt() - returns the character at the specified index
console.log(firstName.charAt(0));
console.log(lastName.charAt(3));

// concat() - returns a new string by concatenating the specified strings
console.log(firstName.concat(' ', lastName));

// indexOf() - returns the index of the first occurrence of a specified value in a string
console.log(firstName.indexOf('o'));
console.log(lastName.indexOf('e'));

// lastIndexOf() - returns the index of the last occurrence of a specified value in a string
console.log(firstName.lastIndexOf('o'));
console.log(lastName.lastIndexOf('e'));

// length - returns the length of a string
console.log(firstName.length);
console.log(lastName.length);

// String Slicing
console.log(firstName.slice(0, 3)); // This would return "Joh"
console.log(lastName.slice(3, 6)); // This would return "Doe"