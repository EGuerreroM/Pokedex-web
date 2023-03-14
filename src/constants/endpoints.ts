import ENVIROMENT from "./enviroment";

const POKEMONS = {
  DATA: 'https://pokeapi.co/api/v2/pokemon',
  DETAIL: (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`,
};

const POKEDEXES = {
  DATA: 'https://pokeapi.co/api/v2/pokedex',
  DETAIL: (name: string) => `https://pokeapi.co/api/v2/pokedex/${name}`,
  NATIONAL: 'https://pokeapi.co/api/v2/pokedex/national',
  KANTO: 'https://pokeapi.co/api/v2/pokedex/kanto',
};

const POKEMONSMOVIES = {
  DATA: `https://api.themoviedb.org/3/search/movie?api_key=${ENVIROMENT.APIKEY}&language=en-US&query=pokemon&page=1&include_adult=false`
}

const ENDPOINTS = {
  POKEMONS,
  POKEDEXES,
  POKEMONSMOVIES,
};

export default ENDPOINTS;
