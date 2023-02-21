import ROUTES from '@/constants/routes';
import { IPokemonDetail } from '@/interfaces/API';
import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

type PokemonCardProps = {
  pokemonDetail: IPokemonDetail;
};

const styledPokemonNumber = (number: number) => {
  if (number < 10) return `00${number}`;
  if (number < 100) return `0${number}`;
  return number;
};

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemonDetail } = props;

  const {
    sprites: { other },
  } = pokemonDetail;
  const { name } = pokemonDetail;

  return (
    <Card maxW="xs" minH="23.5rem">
      <CardBody>
        <Box minH="17.5rem">
          <Image src={other['official-artwork']?.front_default || ROUTES.IMAGES.PLACEHOLDER} alt={name} />
        </Box>
        <Stack alignItems="center">
          <Text>{styledPokemonNumber(pokemonDetail.id)}</Text>
          <Text textTransform="capitalize">{name}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
