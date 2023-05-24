const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    // const top = e.layerY;
    // const left = e.layerX;

    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const top = y - buttonTop;
    const left = x - buttonLeft;

    const ripple = document.createElement('span');
    ripple.classList.add('circle');
    ripple.style = `top:${top}px; left:${left}px;`;
    
    button.appendChild(ripple);

    setTimeout(() => {
      button.removeChild(ripple);
    }, 500);
  })
);
