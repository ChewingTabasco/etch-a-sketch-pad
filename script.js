const gridContainer = document.querySelector("#grid-container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
let gridWidth = 16;
const gridArea = gridWidth * gridWidth;
let gridTile;
let tileSize = 640 / gridWidth;

function renderGrid() {
  for (let i = 1; i <= gridArea; i++) {
    gridTile = document.createElement("div");
    gridContainer.appendChild(gridTile);
    gridTile.classList.add("grid-tile");

    //Set tile size based on how many tiles wide the grid is
    gridTile.setAttribute(
      "style",
      `height: ${tileSize}px; width: ${tileSize}px;`
    );

    //Change background-color of gridTile on mouseover
    gridTile.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "blue";
    });
  }
}

function removeAllTiles() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

renderGrid();

// gridSizeBtn.addEventListener("click", function () {
//   let desiredSize = prompt("Set your desired grid width:", "16");
//   gridWidth = parseInt(desiredSize);
//   renderGrid();
// });
