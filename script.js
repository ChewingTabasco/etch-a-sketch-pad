const gridContainer = document.querySelector("#grid-container");
let gridWidth = 16;
const gridArea = gridWidth * gridWidth;

for (let i = 1; i <= gridArea; i++) {
  let gridTile = document.createElement("div");
  //   gridContainer.appendChild(document.createElement("div"));

  gridContainer.appendChild(gridTile);
  gridTile.classList.add("grid-tile");
}
