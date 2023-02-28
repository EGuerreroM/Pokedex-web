'use client';

import { PokemonBaseStat } from '@/types/PokemonBaseStat';
import { styledBaseStat } from '@/utils/style';
import { Stack, Progress, Text, useColorModeValue, Box } from '@chakra-ui/react';

type StatBarProps = {
  statName: string;
  value: number;
  pokemonType: string;
};

const StatBar = (props: StatBarProps) => {
  const { statName, value, pokemonType } = props;
  const pokemonTypeColor = useColorModeValue(`${pokemonType}.500`, `${pokemonType}.200`);

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Stack direction="row">
        <Box width={12}>
          <Text textTransform="capitalize" color={pokemonTypeColor} fontWeight="semibold">
            {styledBaseStat(statName as PokemonBaseStat)}
          </Text>
        </Box>
        <Text>{value}</Text>
      </Stack>

      <Progress size="sm" value={value} max={255} width="100%" colorScheme={`${pokemonType}`} rounded="lg" />
    </Stack>
  );
};

export default StatBar;
