'use client';

import { PokemonCard } from '@/components/cards';
import TIME from '@/constants/time';
import { getPokemonList } from '@/services';
import { Layouts, Typography } from '@/styles';
import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const [pageSize, setPageSize] = useState(9);
  const [page, setPage] = useState(0);

  const { data: pokemonList } = useQuery({
    queryKey: ['pokemons', page, pageSize],
    queryFn: ({ signal }) => getPokemonList({ limit: pageSize, offset: page * pageSize, abortSignal: signal }),
  });
  return (
    <main>
      <Layouts.Grid>
        {pokemonList ? (
          pokemonList.map((element) => {
            return (
              <PokemonCard
                key={element.data.name}
                name={element.data.name}
                src={element.data.sprites.other['official-artwork']?.front_default}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </Layouts.Grid>
      <Link href={'./pokemonName'}>Link</Link>
    </main>
  );
}
