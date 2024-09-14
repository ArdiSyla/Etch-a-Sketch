const container = document.querySelector('.container');

// Create 16x16 = 256 squares
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  });

  container.appendChild(square);
 
}

