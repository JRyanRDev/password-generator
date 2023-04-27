const chars = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
const letters = chars.split(" ");

const upperCaseLetters = letters.map((element) => {
    return element.toUpperCase();
})

const numChars = "1 2 3 4 5 6 7 8 9 0"
const numbers = numChars.split(" ");

const symbolChars = "! @ # $ % *"
const symbols = symbolChars.split(" ");

const checkBoxes = document.querySelectorAll("input[type='checkbox']");
var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
const form = document.getElementById("passwordOptions");
const displayPass = document.querySelector("div#passwordSpace h3");
const slider = document.getElementById("iPassLength");
const passwordLength = document.getElementById("lengthValue");


var userSelection = [];

checkBoxes.forEach((item) => {
    item.addEventListener("click", () => {
        checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    })
})

form.addEventListener("submit", (e) => {
    userSelection = [];
    getUserChoice();
    displayPass.textContent = `${generateRandomString(slider.value)}`;
    e.preventDefault();
})

passwordLength.textContent = `${slider.value}`;

slider.addEventListener("input", () => {
    passwordLength.textContent = `${slider.value}`;
    return;
}, false)


function getUserChoice() {
    for (let c = 0; c < checkedBoxes.length; c++) {
        if (checkedBoxes[c].id === "iLetters") {
            userSelection[c] = letters;
        }
        else if (checkedBoxes[c].id === "iUpperCaseLetters") {
            userSelection[c] = upperCaseLetters;
        }
        else if (checkedBoxes[c].id === "iNumbers") {
            userSelection[c] = numbers;
        }
        else if (checkedBoxes[c].id === "iSymbols") {
            userSelection[c] = symbols;
        }
    }
}

function generateRandomString(sliderValue) {
    var pass = "";
    if (checkedBoxes.length === 0) {
        return "Your new password will appear here";
    }
    else {
        for (let c = 0; c < sliderValue; c++) {
            let randomNumber = Math.floor(Math.random() * userSelection.length);
            let secondRandom = Math.floor(Math.random() * userSelection[randomNumber].length);
            let newChar = userSelection[randomNumber][secondRandom];
            pass += newChar;
        }
        return pass;
    }
}
