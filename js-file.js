const body = document.querySelector('body');
body.style.margin = '0';

function styleGrid(grid) {
    grid.style.marginLeft = 'auto';
    grid.style.marginRight = 'auto';
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.width = `${100 - buttonVminProportion}vmin`;
    grid.style.height = grid.style.width;
};

function resetGridSquares(grid) {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    };
};

function styleGridSquare(gridSquare) {
    gridSquare.style.boxSizing = 'border-box';
    gridSquare.style.width = `${(100 - buttonVminProportion) / squaresPerRow}vmin`;
    gridSquare.style.height = gridSquare.style.width;
    gridSquare.style.border = 'solid black 1px';
};

function createGridSquares(grid, squaresPerRow) {
    for (i = 0; i < squaresPerRow ** 2; i++) {
        const gridSquare = document.createElement('div');
        styleGridSquare(gridSquare);
        grid.appendChild(gridSquare);
    };
};

function updateLightness(gridSquare) {
    // TODO: make the below conditionals less verbose, group together statements, etc.
    const currentLightness = gridSquare.className;

    let newLightness;

    if (currentLightness === '') {
        newLightness = '50';
        gridSquare.classList.add(newLightness);

    } else if (currentLightness === '50' || currentLightness === '40' || currentLightness === '30' || currentLightness === '20' || currentLightness === '10') {
        newLightness = `${+currentLightness - 10}`
        gridSquare.classList.remove(currentLightness);
        gridSquare.classList.add(newLightness);

    } else if (currentLightness === '0') {
        newLightness = currentLightness;
    };

    return newLightness
}

function enableEtching(grid) {
    const gridSquareList = grid.childNodes;

    gridSquareList.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', () => {

            randomHue = Math.random() * 360;
            const newLightness = updateLightness(gridSquare);
            gridSquare.style.backgroundColor = `hsl(${randomHue}, 100%, ${newLightness}%)`;
        });
    });
};

function createGrid(squaresPerRow) {
    const grid = document.querySelector('div');
    styleGrid(grid);
    resetGridSquares(grid);
    createGridSquares(grid, squaresPerRow);
    enableEtching(grid);
};

const button = document.querySelector('button');
button.style.display = 'block';
button.style.width = '100%';
const buttonVminProportion = 5;
button.style.height = `${buttonVminProportion}vmin`;

let squaresPerRow;
button.addEventListener('click', () => {
    squaresPerRow = Infinity;
    while (squaresPerRow > 100) {
        squaresPerRow = +prompt('How many squares would you like per grid row?\n100 is the maximum.');
    };
    createGrid(squaresPerRow);
});