const boardGame = document.querySelector(".container");

function gameBoard() {
  let board = ["", "", "", "", "", "", "", "", ""];

  board.forEach((cell, index) => {

    let createBox = document.createElement("div");

    createBox.classList.add("boxes");

    boardGame.append(createBox);
  });
}

gameBoard();


function 
