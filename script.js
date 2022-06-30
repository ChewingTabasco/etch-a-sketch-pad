const gridContainer = document.querySelector("#grid-container");
let gridWidth = 32;
const gridArea = gridWidth * gridWidth;
let gridTile;

for (let i = 1; i <= gridArea; i++) {
  gridTile = document.createElement("div");
  gridContainer.appendChild(gridTile);
  gridTile.classList.add("grid-tile");

  //Change background-color of gridTile on mouseover
  gridTile.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "blue";
  });
}
