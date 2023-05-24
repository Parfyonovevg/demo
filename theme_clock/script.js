const toggleButton = document.getElementById('btn');
const body = document.querySelector('body');
const date = document.getElementById('date');
const time = document.getElementById('time');

toggleButton.addEventListener('click', () => {
  console.log(toggleButton.innerText);
  if (toggleButton.innerText === 'Dark mode') {
    toggleButton.innerText = 'Light mode';
  } else {
    toggleButton.innerText = 'Dark mode';
  }

  body.classList.toggle('dark');
});

const currentDate = new Date();
console.log(currentDate);

const day = currentDate.getDate();
const weekday = currentDate.toLocaleDateString('en-us', {
  weekday: 'long',
});
const month = currentDate.toLocaleDateString('en-us', {
  month: 'short',
});
const hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

if (minutes < 10) {
  minutes = `0` + minutes;
}

date.innerHTML = `${weekday}, ${month} <span class='day'>${day}</span>`;

time.innerText = `${hours}:${minutes}`;

// Working with arrows

const secondArrow = document.getElementById('seconds');
const minutesArrow = document.getElementById('minutes');
const hoursArrow = document.getElementById('hours');

const currentSec = seconds * 6;
const currentMin = minutes * 6;
const currentHour = hours * 30;
secondArrow.style.transform = `rotate(${currentSec}deg)`;
minutesArrow.style.transform = `rotate(${currentMin}deg)`;
hoursArrow.style.transform = `rotate(${currentHour}deg)`;
