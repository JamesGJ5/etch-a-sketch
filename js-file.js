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

function makeEtchable(grid) {
    const gridSquareList = grid.childNodes;

    gridSquareList.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', () => {
            randomHue = Math.random() * 360;

            // Going to choose lightness (the L in HSL) based on the current 
            // lightness of the gridSquare. Of course, if it hasn't been 
            // hovered over yet, it has no lightness. For now, since gridSquare 
            // doesn't have any other classes on it (and will not), I will make 
            // its only class equal to a string containing the lightness percentage
            const currentLightness = `${gridSquare.className}`;

            // TODO: make the below conditionals less verbose, group together statements, etc.
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

            gridSquare.style.backgroundColor = `hsl(${randomHue}, 100%, ${newLightness}%)`;
        });
    });
};

function createGrid(squaresPerRow) {
    // TODO: vertically-center the grid in the window
    // TODO: make sure button doesn't mean any vertical scrolling must be done to 
    // see entire grid
    const grid = document.querySelector('div');
    styleGrid(grid);
    resetGridSquares(grid);
    createGridSquares(grid, squaresPerRow);
    makeEtchable(grid);
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