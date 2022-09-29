const containerDiv = document.querySelector('div')
containerDiv.style.display = 'flex'
containerDiv.style.flexWrap = 'wrap'

for (i = 0; i < 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.style.width = '100px';
    gridSquare.style.height = '100px';
    gridSquare.style.border = 'solid black 3px';

    containerDiv.appendChild(gridSquare);
}