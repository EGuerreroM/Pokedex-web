import ENDPOINTS from '@/constants/endpoints';
import { IApiResponse } from '@/interfaces/API';
import { IPokedex, IPokedexDetail } from '@/interfaces/API/IPokedex';
import axios from 'axios';

type GetPokedexListArgs = {
  limit?: number;
  offset?: number;
  abortSignal?: AbortSignal;
};

type GetPokedexDetailArgs = {
  name: string;
  abortSignal?: AbortSignal;
};

export const getPokedexList = async ({ limit = 100, offset = 0, abortSignal }: GetPokedexListArgs) => {
  return axios.get<IApiResponse<IPokedex>>(ENDPOINTS.POKEDEXES.DATA, {
    params: { limit, offset },
    signal: abortSignal,
  });
};

export const getPokedexDetail = async ({ name, abortSignal }: GetPokedexDetailArgs) => {
  return axios.get<IPokedexDetail>(ENDPOINTS.POKEDEXES.DETAIL(name), {
    signal: abortSignal,
  });
};
