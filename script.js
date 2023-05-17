console.log("Etch-a-Sketch");

const container = document.querySelector("#container");

function createGrid(size) {
    for(let i = 0; i < size**2; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid");
        container.appendChild(gridDiv);
    }
}

createGrid(16);