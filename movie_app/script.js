const API_URL =
  'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f2f45a8ecb00473c13541b230a204626&page=1';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=f2f45a8ecb00473c13541b230a204626&query=`;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const IMG_NOT_FOUND = 'https://www.cw-industrialgroup.com/img/noimage.png';

const main = document.getElementById('main');
const form = document.getElementById('form');
const input = document.getElementById('input');

const fetchMovies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const movies = await data.results;
    if (movies.length === 0) {
      fetchMovies(API_URL);
      alert('There is no such film');
    }
    movies.forEach((movie) => {
      const title = movie.title;
      const rating = movie.vote_average;
      const overview = movie.overview;
      const imgSource = IMG_URL + movie.poster_path;
      const img = imgSource.endsWith('null') ? IMG_NOT_FOUND : imgSource;

      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
       <img src="${img}" alt=${title}>
       <div class="movie-info">
         <h3>${title}</h3>
         <span>${rating.toFixed(1)}</span>
       </div>
       <div class="overview">
         <h3>Overview</h3>
         <p>
           ${overview}
         </p>
       </div>`;

      const ratings = document.querySelectorAll('span');

      ratings.forEach((rating) => {
        if (+rating.innerText >= 8) {
          rating.classList.add('green');
        } else if (+rating.innerText >= 6 && +rating.innerText < 8) {
          rating.classList.add('orange');
        } else {
          rating.classList.add('red');
        }
      });

      main.appendChild(movieEl);
    });
  } catch (error) {
    alert('Something gone wrong');
    fetchMovies(API_URL);
  }
};

fetchMovies(API_URL);

const searchMovies = (value) => {
  try {
    fetchMovies(SEARCH_URL + value);
  } catch (error) {
    alert('Something gone wrong');
    fetchMovies(API_URL);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  main.innerHTML = '';
  if (input.value) {
    searchMovies(input.value);
  } else {
    fetchMovies(API_URL);
  }
  input.value = '';
});
