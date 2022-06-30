const gridContainer = document.querySelector("#grid-container");
let gridWidth = 16;
const gridArea = gridWidth * gridWidth;
let gridTile;
let tileSize = 640 / gridWidth;

for (let i = 1; i <= gridArea; i++) {
  gridTile = document.createElement("div");
  gridContainer.appendChild(gridTile);
  gridTile.classList.add("grid-tile");

  gridTile.setAttribute(
    "style",
    `height: ${tileSize}px; width: ${tileSize}px;`
  );

  //Change background-color of gridTile on mouseover
  gridTile.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "blue";
  });
}
