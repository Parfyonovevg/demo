const image = document.getElementById('img');
const count = document.getElementById('count');

let clickTime = 100;

let total = 0;
image.addEventListener('click', (e) => {
  //!Manual double-click

  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      total++;
      count.innerText = total;
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fa-solid');
  heart.classList.add('fa-heart');
  heart.classList.add('click');

  //! Finding position of click in the parent container
  
  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = yInside + `px`;
  heart.style.left = xInside + `px`;

  image.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
};
