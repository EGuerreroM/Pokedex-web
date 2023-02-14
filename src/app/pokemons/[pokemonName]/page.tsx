'use client';

import { PokemonCard } from '@/components/cards';
import TIME from '@/constants/time';
import { getPokemonDetail } from '@/services';
import { Typography } from '@/styles';
import { useQuery } from 'react-query';

const PokemonDetail = ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = params;

  const { data: pokemonDetailResponse } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: ({ signal }) => getPokemonDetail({ abortSignal: signal, name: pokemonName }),
    staleTime: TIME.ONE_DAY,
  });
  return pokemonDetailResponse ? (
    <PokemonCard pokemonDetail={pokemonDetailResponse.data} />
  ) : (
    <Typography.Body>Loading...</Typography.Body>
  );
};

export default PokemonDetail;
