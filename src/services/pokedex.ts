import ENDPOINTS from '@/constants/endpoints';
import VALIDATIONS from '@/constants/validations';
import { IApiResponse } from '@/interfaces/API';
import { IPokedex, IPokedexDetail } from '@/interfaces/API/IPokedex';
import axios from 'axios';
import { getPokemonsDetails } from './pokemon';

type GetPokedexListArgs = {
  limit?: number;
  offset?: number;
  abortSignal?: AbortSignal;
};

type GetPokedexDetailArgs = {
  pokedexUrl: string;
  abortSignal?: AbortSignal;
};
export const getPokedexList = async ({ limit = 100, offset = 0, abortSignal }: GetPokedexListArgs) => {
  return axios.get<IApiResponse<IPokedex>>(ENDPOINTS.POKEDEXES.DATA, {
    params: { limit, offset },
    signal: abortSignal,
  });
};

export const getPokemonsByPokedex = async ({ pokedexUrl, abortSignal }: GetPokedexDetailArgs) => {
  const pokedexDetail = await axios.get<IPokedexDetail>(pokedexUrl, {
    signal: abortSignal,
  });

  const { pokemon_entries: pokemons } = pokedexDetail.data;

  const filteredPokemons = pokemons.filter((pokemon) => !VALIDATIONS.FORBIDDEN_POKEMONS.includes(pokemon.pokemon_species.name));

  return getPokemonsDetails({ names: filteredPokemons.map((pokemon) => pokemon.pokemon_species.name), abortSignal });
};
