'use client';

import { PokemonCard } from '@/components/cards';
import ENDPOINTS from '@/constants/endpoints';
import TIME from '@/constants/time';
import { getPokedexList, getPokemonsByPokedex } from '@/services/pokedex';
import { Layouts } from '@/styles';
import Button from '@/styles/button';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const [pokemonRegionUrl, setPokemonRegionUrl] = useState(ENDPOINTS.POKEDEXES.KANTO);

  const { data: pokemonRegionList } = useQuery({
    queryKey: ['pokedexes'],
    queryFn: ({ signal }) => getPokedexList({ abortSignal: signal }),
    staleTime: TIME.ONE_DAY,
  });

  const { data: pokemonList } = useQuery({
    queryKey: ['pokemons', pokemonRegionUrl],
    queryFn: ({ signal }) => getPokemonsByPokedex({ abortSignal: signal, pokedexUrl: pokemonRegionUrl }),
    staleTime: TIME.ONE_DAY,
  });

  const handlePokemonRegionClick = (url: string) => {
    setPokemonRegionUrl(url);
  };

  return (
    <main>
      <Layouts.Flex direction="row" css={{ alignItems: 'flex-start', gap: '1rem' }}>
        <Layouts.Flex direction="column" css={{ gap: '1rem' }}>
          {pokemonRegionList
            ? pokemonRegionList.data.results.map((pokemonRegion) => (
                <Button.Primary key={pokemonRegion.name} onClick={() => handlePokemonRegionClick(pokemonRegion.url)}>
                  {pokemonRegion.name}
                </Button.Primary>
              ))
            : 'loading...'}
        </Layouts.Flex>
        <Layouts.Grid layout="pokemonList">
          {pokemonList ? (
            pokemonList.map((element) => {
              return <PokemonCard key={element.data.name} pokemonDetail={element.data} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </Layouts.Grid>
      </Layouts.Flex>
    </main>
  );
}
