import { PokemonType } from '@/types/PokemonType';

export const gradientChooser = (type: PokemonType) => {
  switch (type) {
    case 'bug':
      return [100, 200, 500];

    case 'normal':
      return [100, 200, 300];

    case 'dark':
      return [100, 300, 800];

    case 'psychic':
      return [100, 200, 300];

    case 'fairy':
      return [100, 200, 200];

    case 'dragon':
      return [100, 200, 300];

    default:
      return [100, 200, 400];
  }
};

export const styledPokemonNumber = (number: number) => {
  if (number < 10) return `00${number}`;
  if (number < 100) return `0${number}`;
  return number;
};
