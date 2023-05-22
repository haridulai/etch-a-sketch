console.log("Etch-a-Sketch");

const container = document.querySelector(".etch-a-sketch");

function createGrid(size) {
    for(let i = 0; i < size**2; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid");
        gridDiv.addEventListener('mouseover', sketchCell);
        container.appendChild(gridDiv);
    }
}

function sketchCell() {
    this.classList.add("active");
}

createGrid(16);