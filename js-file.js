const containerDiv = document.querySelector('div');
containerDiv.style.display = 'flex';
containerDiv.style.flexWrap = 'wrap';

containerViewportWidthProportion = 100;
containerDiv.style.width = `${containerViewportWidthProportion}vw`;

const squaresPerRow = 16;
for (i = 0; i < squaresPerRow ** 2; i++) {
    
    const gridSquare = document.createElement('div');

    gridSquare.style.boxSizing = 'border-box';
    gridSquare.style.width = `${containerViewportWidthProportion / squaresPerRow}vw`;
    gridSquare.style.height = `${containerViewportWidthProportion / squaresPerRow}vw`;
    gridSquare.style.border = 'solid black 3px';

    containerDiv.appendChild(gridSquare);
}