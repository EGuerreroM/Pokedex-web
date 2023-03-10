const pokemonType = {
  bug: 'bug',
  dark: 'dark',
  dragon: 'dragon',
  electric: 'electric',
  fairy: 'fairy',
  fighting: 'fighting',
  fire: 'fire',
  flying: 'flying',
  ghost: 'ghost',
  grass: 'grass',
  ground: 'ground',
  ice: 'ice',
  normal: 'normal',
  poison: 'poison',
  psychic: 'psychic',
  rock: 'rock',
  steel: 'steel',
  water: 'water',
} as const;

export type PokemonType = (typeof pokemonType)[keyof typeof pokemonType];
