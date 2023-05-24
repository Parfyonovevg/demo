const URL = 'https://api.github.com/users/';
const input = document.getElementById('input');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = input.value;
  if (user) {
    getUser(user);
    getRepos(user);
    input.value = '';
  } else {
    alert('empty request');
  }
});

async function getUser(value) {
  error.classList.add('hidden');
  const profile = document.getElementById('profile');
  const photo = document.getElementById('img');
  const about = document.getElementById('about');
  const followers = document.getElementById('followers');
  const following = document.getElementById('following');
  const repos = document.getElementById('repos');

  const name = document.getElementById('name');
  try {
    const getUser = await axios.get(URL + value);

    const {
      name: userName,
      bio: userAbout,
      followers: userFollowers,
      following: userFollowing,
      avatar_url: userImage,
      public_repos: userRepos,
    } = await getUser.data;

    profile.classList.remove('hidden');
    name.innerText = userName;
    about.innerText = userAbout;
    followers.innerText = userFollowers;
    following.innerText = userFollowing;
    repos.innerText = userRepos;
    photo.style.backgroundImage = `url(${userImage})`;
  } catch (err) {}
}

async function getRepos(value) {
  const tags = document.getElementById('tags');
  try {
    const usersRepos = await axios.get(URL + value + `/repos`);
    const reposList = await usersRepos.data;
    reposList.forEach((repo) => {
      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.innerHTML = `
      <span>${repo.name}</span>  
      `;
      tags.appendChild(repoLink);
    });
  } catch (err) {
    error.classList.remove('hidden');
  }
}

// archive_url
// name
