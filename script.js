"use strict";

let GeneratedNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// document.querySelector(".number").textContent = GeneratedNumber;

document.querySelector("#hea").textContent = "Guess The Number!"; // here text content refers to the text written inside the element

// document.querySelector('.guess').value = 23; // value here acts as input cuz this is an input element

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Game logic

  if (!guess) {
    displayMessage("No number written! ⛔");
  } else if (guess === GeneratedNumber) {
    document.querySelector(".number").textContent = guess;
    displayMessage("Congratulations you guessed it! 🎉");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".highscore").textContent = Math.max(
      highscore,
      score
    );
    document.querySelector(".number").style.width = "30rem";
  } else if (guess != GeneratedNumber && score > 1) {
    displayMessage(guess < GeneratedNumber ? "Higher" : "Lower");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;
    displayMessage("You have lost! :(");
  }
});

// Again button event
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  GeneratedNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
