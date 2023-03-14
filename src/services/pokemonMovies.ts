import ENDPOINTS from '@/constants/endpoints';
import { IPokemonMoviesResponse } from '@/interfaces/API';
import axios from 'axios';

export const getPokemonMovies = async () => {
  return axios.get<IPokemonMoviesResponse>(ENDPOINTS.POKEMONSMOVIES.DATA);
};
