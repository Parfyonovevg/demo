const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const sizeShow = document.getElementById('size');
const peakColor = document.getElementById('color');
const clear = document.getElementById('clear');

let size = 20;
let color = 'black';
let isPressed = false;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});
const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

sizeShow.innerText = size;

increase.addEventListener('click', () => {
  size++;
  sizeShow.innerText = size;
});

decrease.addEventListener('click', () => {
  size--;
  sizeShow.innerText = size;
});

peakColor.addEventListener('change', () => (color = peakColor.value));

const clearSheet = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

clear.addEventListener('click', clearSheet);
