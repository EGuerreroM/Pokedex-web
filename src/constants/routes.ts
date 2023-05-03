const IMAGES = {
  PLACEHOLDER: '/images/pokeball.png',
  CHARIZARD: '/images/charizard.png',
  CINEMA: '/images/cinema.jpg',
};

const SVG = {
  POKEMON: '/images/pokeball-open.png',
};

const HOME = '/';

const POKEMONS = {
  LIST: 'pokemons',
  DETAIL: (name: string) => `pokemons/${name}`,
};

const MOVIES = {
  LIST: 'movies',
};

const ROUTES = {
  HOME,
  IMAGES,
  POKEMONS,
  MOVIES,
  SVG,
};
export default ROUTES;
