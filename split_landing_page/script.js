const leftSide = document.querySelector('.playstation');
const rightSide = document.querySelector('.xbox');
const container = document.querySelector('.container');

leftSide.addEventListener('mouseenter', (e) =>
  container.classList.add('hover-left')
);
leftSide.addEventListener('mouseleave', (e) =>
  container.classList.remove('hover-left')
);

rightSide.addEventListener('mouseenter', (e) =>
  container.classList.add('hover-right')
);
rightSide.addEventListener('mouseleave', (e) =>
  container.classList.remove('hover-right')
);
