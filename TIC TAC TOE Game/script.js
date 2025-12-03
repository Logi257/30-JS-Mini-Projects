const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status-text");
const button = document.getElementById("restart-btn");

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = Array(9).fill("");
let currentPlayer = "X";
let running = false;

function startGame() {
  // make sure cells exist
  if (!cells || cells.length === 0) {
    console.error("No cells found. Check your HTML class names.");
    return;
  }

  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  button.addEventListener("click", restartGame);

  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  // convert attribute to number
  const cellIndex = Number(this.getAttribute("cellIndex"));

  if (isNaN(cellIndex)) return;

  if (options[cellIndex] !== "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA === "" || cellB === "" || cellC === "") {
      continue;
    }
    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Draw!`;
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  options = Array(9).fill("");
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}

// initialize the game
startGame();
