const IMAGES = {
  PLACEHOLDER: '/images/pokeball.png',
  CHARIZARD: '/images/charizard.png',
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
};
export default ROUTES;
