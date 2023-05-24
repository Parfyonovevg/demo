const colors = {
  grass: '#d9ffbf',
  fire: '#ff5c79',
  water: '#2b78c8',
  bug: '#e38115',
  poison: '#95d262',
  flying: '#70b7ff',
  ground: '#4c2203',
  rock: '#7d7574',
  fairy: '#ff3cb8',
  dragon: '#f7a635',
  psychic: '#1e4e47',
  fighting: '#a09ddd',
  normal: '#770800',
};

const mainTypes = Object.keys(colors);

const container = document.getElementById('container');
const count = 150;
const URL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemons = async () => {
  for (let i = 1; i <= count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (num) => {
  const data = await axios(URL + num);
  const pokemon = data.data;
  createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('card');
  pokemonElement.style.backgroundColor = ``;

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const pokeTypes = pokemon.types.map((type) => type.type.name);

  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  pokemonElement.style.backgroundColor = colors[type];
  pokemonElement.innerHTML = `
  <div class="card">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            alt=""
          />
        </div>

        <div class="card__info">
          <p class="card__number">#${id}</p>
          <p class="card__name">${name}</p>
          <p>Type: <span class="card__type">${type}</span></p>
        </div>
      </div>
  `;

  container.appendChild(pokemonElement);
};

fetchPokemons();
