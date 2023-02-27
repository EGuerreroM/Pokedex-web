import ROUTES from '@/constants/routes';
import { IPokemonDetail } from '@/interfaces/API';
import { PokemonType } from '@/types/PokemonType';
import { Box, Card, CardBody, Image, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

type PokemonCardProps = {
  pokemonDetail: IPokemonDetail;
  onCardClick?: (pokemon: IPokemonDetail) => void;
};

const styledPokemonNumber = (number: number) => {
  if (number < 10) return `00${number}`;
  if (number < 100) return `0${number}`;
  return number;
};

const gradientChooser = (type: PokemonType) => {
  switch (type) {
    case 'bug':
      return [50, 100, 500];

    case 'normal':
      return [50, 100, 200];

    case 'dark':
      return [50, 300, 800];

    case 'psychic':
      return [50, 100, 300];

    case 'fairy':
      return [50, 100, 200];

    case 'dragon':
      return [50, 100, 300];

    default:
      return [50, 100, 400];
  }
};

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemonDetail, onCardClick } = props;

  const {
    sprites: { other },
  } = pokemonDetail;
  const { name } = pokemonDetail;

  const onClick = () => {
    if (onCardClick) {
      onCardClick(pokemonDetail);
    }
  };

  const gradientColors = gradientChooser(pokemonDetail.types[0].type.name as PokemonType);

  return (
    <Card
      maxW="xs"
      minH="23.5rem"
      onClick={onClick}
      variant="filled"
      bgGradient={`linear( to-b, ${pokemonDetail.types[0].type.name}.${gradientColors[0]} 5%, ${pokemonDetail.types[0].type.name}.${gradientColors[1]} 25% , ${pokemonDetail.types[0].type.name}.${gradientColors[2]}) 25%`}
      sx={{
        transition: 'all 500ms ease-in-out',
        ':hover': {
          cursor: 'pointer',
          transform: 'translateY(-5px) scale(1.005) translateZ(0)',
        },
      }}>
      <CardBody>
        <Box minH="17.5rem">
          <Image src={other['official-artwork']?.front_default || ROUTES.IMAGES.PLACEHOLDER} alt={name} />
        </Box>
        <Stack
          alignItems="center"
          color={pokemonDetail.types[0].type.name === 'electric' ? 'blackAlpha.800' : 'whiteAlpha.800'}>
          <Text fontWeight="semibold">{styledPokemonNumber(pokemonDetail.id)}</Text>
          <Text textTransform="capitalize">{name}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
