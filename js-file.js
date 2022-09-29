const body = document.querySelector('body');
body.style.margin = '0';

// TODO: vertically-center the grid in the window
const grid = document.querySelector('div');
grid.style.marginLeft = 'auto';
grid.style.marginRight = 'auto';
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';

gridPercentageOfWindow = 100;
grid.style.width = `${gridPercentageOfWindow}vmin`;
grid.style.height = grid.style.width;

const squaresPerRow = 16;
for (i = 0; i < squaresPerRow ** 2; i++) {
    
    const gridSquare = document.createElement('div');

    gridSquare.style.boxSizing = 'border-box';
    gridSquare.style.width = `${gridPercentageOfWindow / squaresPerRow}vmin`;
    gridSquare.style.height = gridSquare.style.width;
    gridSquare.style.border = 'solid black 3px';

    grid.appendChild(gridSquare);
}

let gridSquareList = grid.childNodes;

gridSquareList.forEach((gridSquare) => {
});