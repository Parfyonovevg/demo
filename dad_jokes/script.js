const button = document.querySelector('.btn');
const joke = document.getElementById('joke');

// const getJoke = () => {
//   fetch('https://icanhazdadjoke.com', {
//     headers: { Accept: 'application/json' },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     })
//     .catch((error) => alert(error));
// };

const getJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  joke.innerHTML = data.joke;
};

getJoke();
button.addEventListener('click', getJoke);
