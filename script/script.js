const board = document.getElementById("board");

for (let i = 1; i <= 90; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i;

  board.appendChild(cell);
}

function pullNumber() {
  return Math.floor(Math.random() * 90) + 1;
}

const button = document.getElementById("pullNumber");

button.addEventListener("click", function () {
  const number = pullNumber();
  const cells = document.querySelectorAll(".cell");

  cells.forEach(function (cell) {
    if (cell.textContent == number) {
      cell.classList.add("extracted");
    }
  });
});
