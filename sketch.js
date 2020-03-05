let cells;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  cells = [];
  for (let i=0; i<5; i++) {
    cells.push(new Cell());
  }
}

function draw() {
  background(0);
  cells.forEach(cell => {
    cell.show();
    cell.move();
  });
}

function mouseClicked() {
  cells.forEach(cell => {
    if (cell.isFinishedSplitting()) {
      if (cell.mouseIsOnObject()) {
        cells.unshift(cell.split());
      }  
    }
  });
}
