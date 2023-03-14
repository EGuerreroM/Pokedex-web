import { IPokemonMovie } from "./IPokemonMovie";

export interface IPokemonMoviesResponse {
  page: number;
  results: IPokemonMovie[];
  total_pages: number;
  total_results: number;
}
