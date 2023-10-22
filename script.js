const boardGame = document.querySelector(".container");
const anounceWinner = document.querySelector(".winner");

let board = ["", "", "", "", "", "", "", "", ""];
function gameBoard() {
  let gamePlayer = "cross"; // Initialize the gamePlayer as "cross"
  board.forEach((cell, index) => {
    let createBox = document.createElement("div");
    createBox.classList.add("boxes");
    boardGame.append(createBox);

    createBox.addEventListener("click", () => {
      if (board[index] === "") {
        if (gamePlayer === "cross") {
          createBox.appendChild(cross());
          board[index] = "X";
          gamePlayer = "zero";
        } else {
          createBox.appendChild(zero());
          board[index] = "O";
          gamePlayer = "cross";
        }
        winner();
      }
    });
  });
}

gameBoard();

function cross() {
  let crossSign = document.createElement("p");
  crossSign.classList.add("cross");
  crossSign.textContent = "X"; // Set the text content to "X"
  return crossSign;
}

function zero() {
  let zeroSign = document.createElement("p");
  zeroSign.classList.add("zero");
  zeroSign.textContent = "O"; // Set the text content to "O"
  return zeroSign;
}

function winner() {
  let Gamewinner = false;
  let allboxes = document.querySelectorAll(".boxes");

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((array) => {
    const crossWins = array.every((cell) =>
      allboxes[cell].firstChild?.classList.contains("cross")
    );

    if (crossWins) {
      anounceWinner.textContent = `The winner is Cross`;
      allboxes.forEach((boxes) => boxes.replaceWith(boxes.cloneNode(true)));
      Gamewinner = true;
      return;
    }
});
winningCombos.forEach((array) => {
    const zeroWins = array.every((cell) =>
    allboxes[cell].firstChild?.classList.contains("zero")
    );
    
    if (zeroWins) {
        anounceWinner.textContent = `The winner is Zero`;
        allboxes.forEach((boxes) => boxes.replaceWith(boxes.cloneNode(true)));
        Gamewinner = true;
      return;
    } else if (!Gamewinner && !board.includes("")) {
      anounceWinner.textContent = "It's a draw!";
    }
  });
}
