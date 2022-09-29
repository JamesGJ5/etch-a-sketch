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

button.addEventListener('click', () => {
    squaresPerRow = +prompt('How many squares would you like per grid row?');
    createGrid(squaresPerRow);
});

// 1. DONE Put grid creation into a function
// 2. DONE Add button to HTML
// 3. DONE Add event listener to button to display prompt when clicked asking for 
// grid size
// 4. DONE Call function with grid size
// 5. DONE Make sure function resets
// 6. Limit the grid size that may be asked for
// 7. Clean up function