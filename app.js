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

// Shows values of cards on each card when start button is pressed

// function values() {
//   startButton.addEventListener("click", function () {
//     for (let i = 0; i < pairValues.length; i++) {
//       cards.forEach((card) => {
//         card.innerHTML = pairValues[i];
//         console.log(cards.innerHTML);
//       });
//     }
//   });
// }

function values() {
  startButton.addEventListener("click", function () {
    cards.forEach((card) => {
      for (let i = 0; i < pairValues.length; i++) {
        card.innerHTML = pairValues[i];
      }
    });
  });
}

values();
console.log(cards);
console.log(pairValues);

// Picking two cards
function selecting(pair1, pair2) {
  cards.forEach((card) => {
    console.log();
  });
}
