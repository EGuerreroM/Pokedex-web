import { IPokemon } from './IPokemon';

export interface IPokedex {
  name: string;
  url: string;
}

interface IDescription {
  description: string;
  language: {
    name: string;
    url: string;
  };
}

interface IPokedexName {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

interface IPokemonEntry {
  entry_number: number;
  pokemon_species: IPokemon;
}

interface IVersionGroup {
  name: string;
  url: string;
}

export interface IPokedexDetail {
  descriptions: IDescription[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: IPokedexName[];
  pokemon_entries: IPokemonEntry[];
  region: {
    name: string;
    url: string;
  };
  version_groups: IVersionGroup[];
}
