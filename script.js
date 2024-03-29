const body = document.querySelector('body');
const button = document.querySelector('button');

body.style.margin = '0';

button.style.display = 'block';
button.style.width = '100%';

const buttonVminProportion = 5;
button.style.height = `${buttonVminProportion}vmin`;

let squaresPerRow;
button.addEventListener('click', () => {
    squaresPerRow = Infinity;
    while (squaresPerRow > 100) {
        input = +prompt('How many squares would you like per grid row?\n100 is the maximum.');
        if (1 <= input && input <= 100 && input % 1 === 0) {
            squaresPerRow = input;
        } else {
            reenterChoice = confirm('You gotta choose an integer in between 1 and 100. Wanna try this again?');
            if (!reenterChoice) return;
        };
    };
    createGrid(squaresPerRow);
});

function styleGrid(grid) {
    if (!grid.classList.contains('present')) {

        grid.style.height =`${100 - buttonVminProportion}vmin`;
        grid.style.width = grid.style.height;
        grid.style.marginLeft = 'auto';
        grid.style.marginRight = 'auto';
        grid.style.display = 'flex';
        grid.style.flexWrap = 'wrap';

        grid.classList.add('present');
    };
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
    const currentLightness = gridSquare.className;
    let newLightness;

    if (currentLightness !== '0') {

        if (!currentLightness) {
            newLightness = '50';

        } else if (currentLightness > '0') {
            newLightness = `${+currentLightness - 10}`
            gridSquare.classList.remove(currentLightness);
        };
        
        gridSquare.classList.add(newLightness);

    } else {
        newLightness = currentLightness;
    };

    return newLightness
}

function enableEtching(grid) {
    const gridSquareList = grid.childNodes;

    gridSquareList.forEach((gridSquare) => {
        events = ['mouseenter', 'click']
        events.forEach((event) => {
            gridSquare.addEventListener(event, () => {
                randomHue = Math.random() * 360;
                const newLightness = updateLightness(gridSquare);
                gridSquare.style.backgroundColor = `hsl(${randomHue}, 100%, ${newLightness}%)`;
            });
        });
    });
};

function createGrid(squaresPerRow) {
    const grid = document.querySelector('div#container');
    styleGrid(grid);
    resetGridSquares(grid);
    createGridSquares(grid, squaresPerRow);
    enableEtching(grid);
};
