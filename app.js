const startButton = document.querySelector(".start");
let cards = document.querySelectorAll(".cards");

// Array of cards values.
let pairValues = [
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
    shuffleArray(pairValues);
    cards.forEach((card, i) => {
      console.log(pairValues[i]);
      card.children[0].innerHTML = pairValues[i];
    });
    cards.forEach((card) => {
      card.hidden = false;
      card.children[0].hidden = false;
    });
    setTimeout(function () {
      cards.forEach((card) => (card.children[0].hidden = true));
    }, 3500);
    startButton.innerHTML = "Restart";
  });
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

startGame();

let prev = null;

function selecting() {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      card.children[0].hidden = false;

      if (prev == null) {
        // revealing first card
        prev = card;
      } else if (
        //Matching letters and different cards
        prev != null &&
        prev.children[0].innerHTML === card.children[0].innerHTML &&
        prev != card
      ) {
        setTimeout(function () {
          card.hidden = true;
          prev.hidden = true;
          prev = null;
        }, 500);
      } else if (prev != card) {
        // Not matching letters and cards
        setTimeout(function () {
          card.children[0].hidden = true;
          prev.children[0].hidden = true;
          prev = null;
        }, 500);
      }
    });
  });
}

selecting();
