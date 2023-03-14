export interface IPokemonMoviesResponse {
  page: number;
  results: IPokemonMovie[];
  total_pages: number;
  total_results: number;
}

export interface IPokemonMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}
