const body = document.querySelector('body');
body.style.margin = '0';

function styleGrid(grid) {
    grid.style.marginLeft = 'auto';
    grid.style.marginRight = 'auto';
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.width = '100vmin';
    grid.style.height = grid.style.width;
}

function resetGridSquares(grid) {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function styleGridSquare(gridSquare) {
    gridSquare.style.boxSizing = 'border-box';
    gridSquare.style.width = `${100 / squaresPerRow}vmin`;
    gridSquare.style.height = gridSquare.style.width;
    gridSquare.style.border = 'solid black 3px';
}

function createGridSquares(grid, squaresPerRow) {
    for (i = 0; i < squaresPerRow ** 2; i++) {
        const gridSquare = document.createElement('div');
        styleGridSquare(gridSquare)
        grid.appendChild(gridSquare);
    }
}

function makeEtchable(grid) {
    const gridSquareList = grid.childNodes;

    gridSquareList.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.style.backgroundColor = 'black';
        });
    });
}

function createGrid(squaresPerRow) {
    // TODO: vertically-center the grid in the window
    const grid = document.querySelector('div');
    styleGrid(grid);
    resetGridSquares(grid);
    createGridSquares(grid, squaresPerRow)
    makeEtchable(grid);
};

const button = document.querySelector('button');

let squaresPerRow
button.addEventListener('click', () => {
    squaresPerRow = Infinity;
    while (squaresPerRow > 100) {
        squaresPerRow = +prompt('How many squares would you like per grid row?\n100 is the maximum.');
    };
    createGrid(squaresPerRow);
});