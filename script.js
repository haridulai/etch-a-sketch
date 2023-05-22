console.log("Etch-a-Sketch");

const container = document.querySelector(".etch-a-sketch");
const btnSetGrid = document.querySelector(".btn-set-grid");
const btnRefreshGrid = document.querySelector(".btn-refresh-grid");

btnSetGrid.addEventListener("click", askGridSize);
btnRefreshGrid.addEventListener("click", refreshGrid);

function createGrid(size) {
  clearGrid();

  container.style.cssText = `--square-count: ${size};`;

  for (let i = 0; i < size ** 2; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.addEventListener("mouseover", sketchCell);
    container.appendChild(gridDiv);
  }
}

function clearGrid() {
  document.querySelectorAll(".grid").forEach((el) => el.remove());
}

function refreshGrid() {
    document.querySelectorAll(".grid").forEach((el) => el.classList.remove("active"));
  }

function sketchCell() {
  this.classList.add("active");
}

function askGridSize() {
  let gridSize = prompt("How many squares for the etch-a-sketch grid?");
  gridSize = parseInt(gridSize);

  if (gridSize && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Grid size invalid.");
  }
}

createGrid(16);
