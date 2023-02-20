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

const ENDPOINTS = {
  POKEMONS,
  POKEDEXES,
};

export default ENDPOINTS;
