/* eslint-disable import/prefer-default-export */

import ENDPOINTS from '@/constants/endpoints';
import { IPokemonMoviesResponse } from '@/interfaces/API';
import axios from 'axios';

type GetMovieListArgs = {
  page?: number;
};

export const getPokemonMovies = async ({ page = 1 }: GetMovieListArgs) => {
  return axios.get<IPokemonMoviesResponse>(ENDPOINTS.POKEMONSMOVIES.MOVIES(page));
};
