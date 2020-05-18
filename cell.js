class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `cell-${x}-${y}`;
    this.owner = null;
    this.symbol = null;
  }

  drawCell() {
    let htmlCell = document.createElement("div");
    htmlCell.className = "cell";
    htmlCell.setAttribute("id", this.id);
    return htmlCell;
  }

  mark(player) {
    this.owner = player;
    this.symbol = player.symbol;
    this.htmlCell.textContent = this.symbol;
  }

  get htmlCell() {
    let cell = document.querySelector(`#${this.id}`);
    return cell;
  }
}
