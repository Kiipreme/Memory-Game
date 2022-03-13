const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");
let cards = document.querySelectorAll(".cards");

// Array of cards values.
const pairValues = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H",
  "I",
  "I",
];

// Shows the cards with the start button.
function startGame() {
  startButton.addEventListener("click", function () {
    cards.forEach((card) => (card.hidden = false));
    console.log("button works");
  });
}

startGame();
