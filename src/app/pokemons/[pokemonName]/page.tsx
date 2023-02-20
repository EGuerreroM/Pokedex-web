'use client';

import { LoadingCard, PokemonCard } from '@/components/cards';
import TIME from '@/constants/time';
import { getPokemonDetail } from '@/services';
import { useQuery } from 'react-query';

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
    <PokemonCard pokemonDetail={pokemonDetailResponse.data} />
  );
};

export default PokemonDetail;
