'use client';

import { LoadingCard } from '@/components/cards';
import TIME from '@/constants/time';
import { getPokemonDetail } from '@/services';
import { Flex, Image, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import StatBar from '@/components/stat-bar/StatBar';

const PokemonDetail = ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = params;

  const { data: pokemonDetailResponse, status } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: ({ signal }) => getPokemonDetail({ abortSignal: signal, name: pokemonName }),
    cacheTime: TIME.ONE_DAY,
  });

  return status === 'loading' || status === 'idle' ? (
    <LoadingCard />
  ) : status === 'error' ? (
    <div>error</div>
  ) : (
    <Flex direction="row">
      <Image
        src={pokemonDetailResponse.data.sprites.other['official-artwork']?.front_default}
        alt={pokemonDetailResponse.data.name}
      />
      <Stack width="100%">
        {pokemonDetailResponse.data.stats.map((stat) => (
          <StatBar
            key={stat.stat.name}
            value={stat.base_stat}
            statName={stat.stat.name}
            pokemonType={pokemonDetailResponse.data.types[0].type.name}
          />
        ))}
      </Stack>
    </Flex>
  );
};

export default PokemonDetail;
