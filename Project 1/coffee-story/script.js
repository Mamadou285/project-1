const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const restartBtn = document.getElementById("restartBtn");

const subtitle = document.getElementById("subtitle");
const story = document.getElementById("story");

// track steps
// 1 = hot/iced
// 2 = sugar yes/no
// 3 = pay card/cash
// 4 = ending
let step = 1;

// save choices
let drink = "";     // "Hot" or "Iced"
let sugar = "";     // "Sugar" or "No sugar"
let pay = "";       // "Card" or "Cash"

// easy: show story text with fade
function showText(text) {
    story.classList.remove("show");
    story.textContent = text;
    setTimeout(() => story.classList.add("show"), 10);
}

// update the 2 buttons
function setButtons(aText, bText) {
    btnA.textContent = aText;
    btnB.textContent = bText;
}

// goes to next screen
function goToSugar() {
    subtitle.textContent = "Add sugar?";
    setButtons("Yes", "No");
    showText("Choose yes or no.");
    step = 2;
}

function goToPay() {
    subtitle.textContent = "Pay with card or cash?";
    setButtons("Card", "Cash");
    showText("Choose card or cash.");
    step = 3;
}

function finish() {
    subtitle.textContent = "Order complete ✅";
    showText(`You got: ${drink} coffee, ${sugar}, paid with ${pay}. ☕`);
    step = 4;
}

// BUTTON A
btnA.addEventListener("click", () => {
    if (step === 1) {
        // easy: pick Hot
        drink = "Hot";
        goToSugar();
    }
    else if (step === 2) {
        // easy: sugar YES
        sugar = "Sugar";
        goToPay();
    }
    else if (step === 3) {
        // easy: pay CARD
        pay = "Card";
        finish();
    }
});

// BUTTON B
btnB.addEventListener("click", () => {
    if (step === 1) {
        // easy: pick Iced
        drink = "Iced";
        goToSugar();
    }
    else if (step === 2) {
        // easy: sugar NO
        sugar = "No sugar";
        goToPay();
    }
    else if (step === 3) {
        // easy: pay CASH
        pay = "Cash";
        finish();
    }
});

// RESTART
restartBtn.addEventListener("click", () => {
    step = 1;
    drink = "";
    sugar = "";
    pay = "";

    subtitle.textContent = "What do you want?";
    setButtons("Hot", "Iced");
    showText("");
});