'use client';

import { LoadingCard } from '@/components/cards';
import TIME from '@/constants/time';
import { getPokemonDetail } from '@/services';
import { Flex, Image, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import StatBar from '@/components/stat-bar/StatBar';
import { useRouter } from 'next/router';

const PokemonDetail = () => {
  const router = useRouter();
  const { pokemonName } = router.query;

  const { data: pokemonDetailResponse, status } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: ({ signal }) => getPokemonDetail({ abortSignal: signal, name: (pokemonName as string) ?? '' }),
    cacheTime: TIME.ONE_DAY,
    enabled: !!pokemonName,
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
