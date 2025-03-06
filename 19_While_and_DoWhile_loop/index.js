let username = "";


while(username === "" || username === null) {
    username = window.prompt('What is your name?');
}

console.log(username);

do {
    school = window.prompt('What is your school?');
}
while(school === "" || school === null);

// in do while loop, the code will be executed at least once