// Random number generator

const randomBtn = document.getElementById("randomBtn");
const randomNumber = document.getElementById("random");

let randomNum = Math.random();

console.log(randomNum);

randomBtn.onclick = function() {
    randomNum = Math.random();
    randomNumber.textContent = randomNum;
}