const gridContainer = document.querySelector("#grid-container");
let gridWidth = 16;
const gridArea = gridWidth * gridWidth;
let gridTile;

for (let i = 1; i <= gridArea; i++) {
  gridTile = document.createElement("div");
  gridContainer.appendChild(gridTile);
  gridTile.classList.add(`grid-tile${gridWidth}`);

  gridTile.addEventListener("mouseover", function (e) {
    e.target.setAttribute("style", "background-color: blue;");
  });
}
