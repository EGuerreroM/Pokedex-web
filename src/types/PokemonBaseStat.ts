const pokemonBaseStat = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  specialAttack: 'special-attack',
  specialDefense: 'special-defense',
  speed: 'speed',
} as const;

export type PokemonBaseStat = (typeof pokemonBaseStat)[keyof typeof pokemonBaseStat];
