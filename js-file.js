const containerDiv = document.querySelector('div');
containerDiv.style.display = 'flex';
containerDiv.style.flexWrap = 'wrap';

percentageOfWindow = 100;
containerDiv.style.width = `${percentageOfWindow}vmin`;
containerDiv.style.height = containerDiv.style.width

const squaresPerRow = 16;
for (i = 0; i < squaresPerRow ** 2; i++) {
    
    const gridSquare = document.createElement('div');

    gridSquare.style.boxSizing = 'border-box';
    gridSquare.style.width = `${percentageOfWindow / squaresPerRow}vmin`;
    gridSquare.style.height = gridSquare.style.width;
    gridSquare.style.border = 'solid black 3px';

    containerDiv.appendChild(gridSquare);
}