'use-client';

import { IPokemonDetail } from '@/interfaces/API';
import ROUTES from '@/constants/routes';
import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import StatBar from '../stat-bar/StatBar';

type PokemonDetailProps = {
  pokemonDetail: IPokemonDetail | null;
};

const PokemonDetail = (props: PokemonDetailProps) => {
  const { pokemonDetail } = props;
  return (
    <Stack direction="row">
      <Box boxSize="lg">
        <Image
          src={pokemonDetail?.sprites.other['official-artwork']?.front_default || ROUTES.IMAGES.PLACEHOLDER}
          alt={pokemonDetail?.name}
          boxSize="100%"
        />
      </Box>
      <Stack minW="xl">
        <Stack>
          <Heading textTransform="capitalize">{pokemonDetail?.name}</Heading>
        </Stack>
        <Stack gap="1rem">
          {pokemonDetail?.stats.map((element) => (
            <StatBar
              key={element.stat.name}
              value={element.base_stat}
              pokemonType={pokemonDetail.types[0].type.name}
              statName={element.stat.name}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PokemonDetail;
