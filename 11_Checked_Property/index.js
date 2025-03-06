// checked property is a boolean property that indicates whether the checkbox is checked or not
// the checked property is set to true if the checkbox is checked, and false if it is not checked

const myCheckbox = document.getElementById("mycheckbox");
const myCheckbox2 = document.getElementById("mycheckbox2");
const myCheckbox3 = document.getElementById("mycheckbox3");

const submitBtn = document.getElementById("MySubmit");

const subResult = document.getElementById("subResult");

submitBtn.onclick = function() {
    if (myCheckbox.checked) {
        console.log("Credit Card is checked");
        subResult.textContent = "Credit Card is checked";
    }
    if (myCheckbox2.checked) {
        console.log("Debit Card is checked");
        subResult.textContent = "Debit Card is checked";
    }
    if (myCheckbox3.checked) {
        console.log("Net Banking is checked");
        subResult.textContent = "Net Banking is checked";
    }
}