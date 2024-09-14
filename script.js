const container = document.querySelector('.container');
const button = document.getElementById('new-grid-btn');
const randomColorBtn = document.getElementById('random-color-btn');
const redColorBtn = document.getElementById('red-color-btn');
const darkenBtn = document.getElementById('darken-btn');
const resetBtn = document.getElementById('reset-btn');
const containerSize = 960;

let hoverMode = 'random'; // Default hover mode
let initialSquaresPerSide = 16;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide) {

    container.innerHTML = '';

    const squareSize = container.clientWidth / squaresPerSide;


// Create 16x16 = 256 squares
for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {

    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height= `${squareSize}px`;

    square.dataset.interactions = 0;
    square.style.backgroundColor = 'white'; 
   

    square.addEventListener('mouseover', () => {
        if (hoverMode === 'random') {
          square.style.backgroundColor = getRandomColor();
        } else if (hoverMode === 'red') {
          square.style.backgroundColor = 'red';
        } else if (hoverMode === 'darken') {
          let currentInteractions = parseInt(square.dataset.interactions);
          if (currentInteractions < 10) {
            square.dataset.interactions = currentInteractions + 1;
            // Calculate the new color
            const darkenAmount = (currentInteractions + 1) * 25.5; // 255/10 = 25.5
            square.style.backgroundColor = `rgb(${255 - darkenAmount}, ${255 - darkenAmount}, ${255 - darkenAmount})`;
          } else {
            square.style.backgroundColor = 'black'; // Fully black after 10 interactions
          }
        }
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

randomColorBtn.addEventListener('click', () => {
    hoverMode = 'random';
  });

  redColorBtn.addEventListener('click', () => {
    hoverMode = 'red';
  });

  darkenBtn.addEventListener('click', () => {
    hoverMode = 'darken';
  });

  resetBtn.addEventListener('click', () => {
    createGrid(initialSquaresPerSide); // Reset to the initial grid size
    hoverMode = 'random'; // Optionally reset hover mode to random
  });
  createGrid(initialSquaresPerSide);