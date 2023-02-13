import ENDPOINTS from '@/constants/endpoints';
import { IApiResponse, IPokemon, IPokemonDetail } from '@/interfaces/API';
import axios from 'axios';

type GetPokemonDetailArgs = {
  name: string;
  abortSignal?: AbortSignal;
};

type GetPokemonsDetailsArgs = {
  names: string[];
  limit?: number;
  abortSignal?: AbortSignal;
};

type GetPokemonListArgs = {
  limit?: number;
  offset?: number;
  abortSignal?: AbortSignal;
};

export const getPokemonDetail = async ({ name, abortSignal }: GetPokemonDetailArgs) => {
  return axios.get<IPokemonDetail>(ENDPOINTS.POKEMONS.DETAIL(name), { signal: abortSignal });
};

export const getPokemonsDetails = ({ names, abortSignal }: GetPokemonsDetailsArgs) => {
  const promises = names.map((name) => getPokemonDetail({ name, abortSignal }));

  return Promise.all(promises);
};

export const getPokemonList = async ({ limit = 9, offset, abortSignal }: GetPokemonListArgs) => {
  const { data } = await axios.get<IApiResponse<IPokemon>>(ENDPOINTS.POKEMONS.DATA, {
    params: {
      limit,
      offset,
    },
    signal: abortSignal,
  });
  const { results: pokemons } = data;

  return getPokemonsDetails({ names: pokemons.map((pokemon) => pokemon.name), abortSignal });
};
