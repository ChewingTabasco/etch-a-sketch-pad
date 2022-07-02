const gridContainer = document.querySelector("#grid-container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const clearGridBtn = document.querySelector("#clear-grid-btn");
const colorModeBtn = document.querySelector("#color-mode-btn");
let gridTile;
let currentGridSize;

let colorModeOn = false;
let tileColor = "blue";

function renderGrid(gridWidth, defaultWidth = 16) {
  let gridArea = Math.pow(gridWidth, 2);

  //Limit the number of columns in the grid to the desired number of tiles wide the grid will be
  gridContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${gridWidth}, 1fr)`
  );

  //Create a number of grid tiles equal to the area of the grid
  //Append each tile to the container
  for (let i = 1; i <= gridArea; i++) {
    gridTile = document.createElement("div");
    gridContainer.appendChild(gridTile);
    gridTile.classList.add("grid-tile");

    //Change background-color of gridTile on mouseover
    gridTile.addEventListener("mouseover", function (e) {
      if (colorModeOn) {
        tileColor = getRandomRGB();
      }

      e.target.style.backgroundColor = tileColor;
    });
  }
}

function removeAllTiles() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function checkGridLimit(value) {
  if (value > 100 || value < 1) {
    alert("Grid width must be greater than 0 and cannot exceed 100.");
    return true;
  } else if (!value || typeof value === "string") {
    alert(
      "Invalid input. Please enter a number greater than 0 and no greater than 100."
    );
    return true;
  }
  return false;
}

function clearGrid() {
  if (currentGridSize) {
    removeAllTiles();
    renderGrid(currentGridSize);
  } else {
    removeAllTiles();
    renderGrid(16);
  }
}

function getRandomRGB() {
  let rgbRandom1 = Math.floor(Math.random() * 255);
  let rgbRandom2 = Math.floor(Math.random() * 255);
  let rgbRandom3 = Math.floor(Math.random() * 255);

  return `rgb(${rgbRandom1}, ${rgbRandom2}, ${rgbRandom3})`;
}

renderGrid(16);

gridSizeBtn.addEventListener("click", function () {
  let desiredSize = prompt("Set your desired grid width:", "16");
  if (checkGridLimit(parseInt(desiredSize))) {
    return;
  }
  currentGridSize = parseInt(desiredSize);
  removeAllTiles();
  renderGrid(parseInt(desiredSize));
});

clearGridBtn.addEventListener("click", clearGrid);

colorModeBtn.addEventListener("click", function () {
  if (!colorModeOn) {
    colorModeOn = true;
  } else {
    colorModeOn = false;
    tileColor = "blue";
  }
});
