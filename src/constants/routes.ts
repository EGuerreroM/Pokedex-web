const IMAGES = {
  PLACEHOLDER: '/images/pokeball.png',
};

const HOME = '/';

const POKEMONS = {
  LIST: 'pokemons',
  DETAIL: (name: string) => `pokemons/${name}`,
};

const BERRIES = {
  LIST: 'berries',
};

const ROUTES = {
  HOME,
  IMAGES,
  POKEMONS,
  BERRIES,
};
export default ROUTES;
