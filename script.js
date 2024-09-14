const container = document.querySelector('.container');
const button = document.getElementById('new-grid-btn');
const containerSize = 960;

function createGrid(squaresPerSide) {

    container.innerHTML = '';

    const squareSize = container.clientWidth / squaresPerSide;


// Create 16x16 = 256 squares
for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {

    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height= `${squareSize}px`;

  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  });

  container.appendChild(square);
 
 }
}

button.addEventListener('click', () => {
    let squaresPerSide = prompt("Enter the number of squares per side for the new grid (max: 100):", 16);
    squaresPerSide = parseInt(squaresPerSide);

    if(squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(16)