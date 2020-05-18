class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  createPlayers() {
    let players = [
      new Player("Player 1", "X", true),
      new Player("Player 2", "O"),
    ];
    return players;
  }

  startGame() {
    this.board.drawHtmlBoard();
    this.ready = true;
  }

  handleCellClick(targetDiv) {
    const board = this.board;
    const cells = board.cells.flat();
    const cell = cells.find((cell) => {
      return cell.id === targetDiv.id;
    });
    if (!cell.owner && this.ready) {
      cell.mark(this.activePlayer);
      if (this.checkForWin(cell)) {
        this.gameOver(`${cell.owner.name} wins!`);
      } else if (this.checkDraw()) {
        this.gameOver("Game over! It's a draw!");
      } else {
        this.switchPlayers();
      }
    }
  }

  gameOver(message) {
    const messageDiv = document.querySelector("#message");
    messageDiv.style.display = "block";
    messageDiv.textContent = message;
    this.ready = false;
  }

  checkDraw() {
    let draw = true;
    const cells = this.board.cells.flat();

    for (let i = 0; i < cells.length; i++) {
      if (!cells[i].owner) {
        draw = false;
      }
    }
    return draw;
  }

  switchPlayers() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].active) {
        this.players[i].active = false;
      } else {
        this.players[i].active = true;
      }
    }
  }

  checkForWin(targetCell) {
    const owner = targetCell.owner;
    const rows = this.board.rows;
    const columns = this.board.columns;
    const cells = this.board.cells;
    let win = false;

    //vertical
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns - 2; y++) {
        if (
          cells[x][y].owner === owner &&
          cells[x][y + 1].owner === owner &&
          cells[x][y + 2].owner === owner
        ) {
          win = true;
        }
      }
    }

    //horizontal
    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows - 2; x++) {
        if (
          cells[x][y].owner === owner &&
          cells[x + 1][y].owner === owner &&
          cells[x + 2][y].owner === owner
        ) {
          win = true;
        }
      }
    }

    //diagonal right
    if (
      cells[0][0].owner === owner &&
      cells[1][1].owner === owner &&
      cells[2][2].owner === owner
    ) {
      win = true;
    }

    if (
      cells[2][0].owner === owner &&
      cells[1][1].owner === owner &&
      cells[0][2].owner === owner
    ) {
      win = true;
    }

    return win;
  }

  get activePlayer() {
    return this.players.find((player) => {
      return player.active;
    });
  }
}
