class Board {
  constructor() {
    this.rows = 3;
    this.columns = 3;
    this.cells = this.createCells();
  }

  createCells() {
    let cells = [];
    for (let y = 0; y < this.columns; y++) {
      let row = [];
      for (let x = 0; x < this.rows; x++) {
        let cell = new Cell(x, y);
        row.push(cell);
      }
      cells.push(row);
    }
    return cells;
  }

  drawHtmlBoard() {
    for (let i = 0; i < this.cells.length; i++) {
      let board = document.querySelector("#board");
      let rowDiv = document.createElement("div");
      rowDiv.className = "row";
      board.append(rowDiv);
      this.cells[i].forEach((cell) => {
        let cellDiv = cell.drawCell();
        rowDiv.append(cellDiv);
      });
    }
  }
}
