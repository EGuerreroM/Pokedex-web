/* eslint-disable no-nested-ternary */

'use client';

import { LoadingCard, Pagination, PokemonCard } from '@/components';
import ENDPOINTS from '@/constants/endpoints';
import TIME from '@/constants/time';
import { IPokemon } from '@/interfaces/API';
import { getPokedexDetails, getPokemonsDetails } from '@/services';
import { Grid, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const getPagedArray = <T,>(array: T[], pageSize: number, pageNumber: number) => {
  const startIndex = pageSize * (pageNumber - 1);
  const endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
};

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(1);

  const { status: pokemonStatus } = useQuery({
    queryKey: ENDPOINTS.POKEDEXES.NATIONAL,
    queryFn: ({ signal }) => getPokedexDetails({ pokedexUrl: ENDPOINTS.POKEDEXES.NATIONAL, abortSignal: signal }),
    onSuccess: (pokedex) => {
      setPokemons(pokedex.pokemon_entries.map((pokemon) => pokemon.pokemon_species));
    },
    cacheTime: TIME.ONE_DAY,
  });

  const {
    data: pokemonsDetailResponse,
    isFetching,
    isIdle,
    isError,
  } = useQuery({
    queryKey: ['pokemonDetails', page],
    queryFn: ({ signal }) =>
      getPokemonsDetails({ names: getPagedArray(pokemons, 9, page).map((pokemon) => pokemon.name), abortSignal: signal }),
    enabled: !!pokemons.length,

    cacheTime: TIME.ONE_DAY,
  });

  const totalPages = Math.ceil(pokemons.length / 9);

  if (pokemonStatus === 'loading') {
    return (
      <Grid templateColumns="repeat(3,320px)" alignItems="center" justifyContent="center" gap="1rem">
        {Array.from({ length: 9 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </Grid>
    );
  }

  if (pokemonStatus === 'error') {
    return <Text>error</Text>;
  }

  return (
    <Stack alignItems="center">
      <Pagination totalPages={totalPages} onChange={setPage} />
      <Grid templateColumns="repeat(3,320px)" alignItems="center" justifyContent="center" gap="1rem">
        {isIdle || isFetching ? (
          Array.from({ length: 9 }).map((_, index) => <LoadingCard key={index} />)
        ) : isError || !pokemonsDetailResponse ? (
          <Text>error</Text>
        ) : (
          pokemonsDetailResponse.map((response) => <PokemonCard key={response.data.name} pokemonDetail={response.data} />)
        )}
      </Grid>
    </Stack>
  );
};
export default Pokemons;
