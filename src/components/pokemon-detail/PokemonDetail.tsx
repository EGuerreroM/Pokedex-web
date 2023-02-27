'use-client';

import { IPokemonDetail } from '@/interfaces/API';
import ROUTES from '@/constants/routes';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

type PokemonDetailProps = {
  pokemonDetail: IPokemonDetail | null;
};

const PokemonDetail = (props: PokemonDetailProps) => {
  const { pokemonDetail } = props;

  return (
    <Stack>
      <Box boxSize="md">
        <Image
          src={pokemonDetail?.sprites.other['official-artwork']?.front_default || ROUTES.IMAGES.PLACEHOLDER}
          alt={pokemonDetail?.name}
        />
      </Box>
      <Stack>
        <Stack direction="row" padding="1rem" gap="1rem">
          <Stack>
            <Text>Weight</Text>
            <Text>{`${pokemonDetail?.weight}kg`}</Text>
          </Stack>
          <Stack>
            <Text>Height</Text>
            <Text>{`${pokemonDetail?.height}cm`}</Text>
          </Stack>
        </Stack>
        <Stack direction="row" padding="1rem" gap="1rem">
          {pokemonDetail?.stats.map((stat) => (
            <Stack key={stat.stat.name}>
              <Text>{stat.stat.name}</Text>
              <Text>{stat.base_stat}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PokemonDetail;
