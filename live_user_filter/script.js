const URL = 'https://randomuser.me/api?results=50';
const usersList = document.getElementById('users');
const input = document.getElementById('search');

const getUsers = async () => {
  try {
    const data = await fetch(URL);
    const result = await data.json();

    usersList.innerHTML = '';

    const users = result.results;
    users.forEach((user) => {
      renderUser(user);
    });
  } catch (e) {
    console.log(e);
  }
};

getUsers();

const renderUser = (user) => {
  const name = `${user.name.first} ${user.name.last}`;
  const photoURL = user.picture.large;
  const location = `${user.location.city}, ${user.location.country}`;

  const userEl = document.createElement('li');
  userEl.classList.add('user');
  userEl.innerHTML = `
  <img src=${photoURL} alt=${name} />
  <div class="info">
   <h3 class="name">${name}</h3>
   <small>${location}</small>
  </div>
  `;

  usersList.appendChild(userEl);
};

input.addEventListener('input', (e) => {
  const users = document.querySelectorAll('.user');
  users.forEach((user) => {
    if (user.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      user.classList.remove('hide');
    } else {
      user.classList.add('hide');
    }
  });
});
