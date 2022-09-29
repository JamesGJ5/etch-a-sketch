const containerDiv = document.querySelector('div')

for (i = 0; i < 16; i++) {
    const gridSquare = document.createElement('div');
    
    gridSquare.style.width = '100px';
    gridSquare.style.height = '100px';
    gridSquare.style.border = 'solid black';
    gridSquare.style.display = 'inline-block';

    containerDiv.appendChild(gridSquare);
}