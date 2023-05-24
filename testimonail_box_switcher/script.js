const users = [
  {
    name: 'John John',
    img: 'https://randomuser.me/api/portraits/men/64.jpg',
    job: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Lisa Lisa',
    img: 'https://randomuser.me/api/portraits/women/71.jpg',
    job: 'Front-end Developer',
    text: "Some dummy text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: 'Mary Mary',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    job: 'Football player',
    text: 'Very interesting content of the card',
  },
  {
    name: 'BOB BOB',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    job: 'Lawyer',
    text: 'let me introduce myself',
  },
];

let currentUser = 0;

const box = document.querySelector('.box');

const render = () => {
  if (currentUser === users.length) {
    currentUser = 0;
  }
  box.innerHTML = '';
  box.innerHTML = `
  <div class="progress"></div>
      <div class="testimonial">
        ${users[currentUser].text}
      </div>
      <div class="user">
        <img
          src=${users[currentUser].img}
          alt=${users[currentUser].name}
        />
        <div class="user-info">
          <p id="name">${users[currentUser].name}</p>
          <p id="job">${users[currentUser].job}</p>
        </div>
      </div>
      <i class="fa-sharp fa-solid fa-quote-left"></i>
      <i class="fa-sharp fa-solid fa-quote-right"></i>
  `;
};

render();

setInterval(() => {
  currentUser++;
  render();
}, 3000);
