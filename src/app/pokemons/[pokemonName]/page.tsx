'use client';

import { PokemonCard } from '@/components/cards';
import TIME from '@/constants/time';
import { getPokemonDetail } from '@/services';
import { Layouts, Typography } from '@/styles';
import { useQuery } from 'react-query';

const PokemonDetail = ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = params;

  const { data: pokemonDetailResponse } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: ({ signal }) => getPokemonDetail({ abortSignal: signal, name: pokemonName }),
    staleTime: TIME.ONE_DAY,
  });

  return pokemonDetailResponse ? (
    <Layouts.Flex>
      <PokemonCard pokemonDetail={pokemonDetailResponse.data} />
      <Layouts.Flex direction="column">
        <Typography.Body>Height</Typography.Body>
        <Typography.Body>{pokemonDetailResponse.data.height}</Typography.Body>
      </Layouts.Flex>
    </Layouts.Flex>
  ) : (
    <Typography.Body>Loading...</Typography.Body>
  );
};

export default PokemonDetail;
