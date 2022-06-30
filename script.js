const gridContainer = document.querySelector("#grid-container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
let gridTile;

function renderGrid(gridWidth, defaultWidth = 16) {
  const tileSize = 640 / gridWidth;
  let gridArea = gridWidth * gridWidth;

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

function checkGridLimit(value) {
  if (value > 100) {
    return true;
  }
  return false;
}

renderGrid(16);

gridSizeBtn.addEventListener("click", function () {
  let desiredSize = prompt("Set your desired grid width:", "16");
  if (checkGridLimit(desiredSize)) {
    alert("Grid width cannot exceed 100.");
    return;
  }
  removeAllTiles();
  renderGrid(parseInt(desiredSize));
});
