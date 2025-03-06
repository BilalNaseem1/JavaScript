const age = window.prompt('How old are you?');
const printstatement = document.getElementById("printstatement");

// Switch Case
// It's an alternative to if-else statements
switch (age) {
    case 18:
        printstatement.textContent = "You are an adult";
        break;
    case 13:
        printstatement.textContent = "You are a teenager";
        break;
    default:
        printstatement.textContent = "You are not an adult";
        break;
}
