const startBtn = document.querySelector("#start-btn");
const gameBoard = document.querySelector("#board");
const game = new Game();

startBtn.addEventListener("click", (event) => {
  gameBoard.style.display = "block";
  event.target.style.display = "none";
  game.startGame();
});

gameBoard.addEventListener("click", (event) => {
  if (event.target.className === "cell") {
    game.handleCellClick(event.target);
  }
});

// When game is started game object is initiated.
// Player 1 plays and token is marked on the preferred cell.
// cell owner becomes Player 1
// Player 2 will mark his cell.
