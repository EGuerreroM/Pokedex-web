import ROUTES from '@/constants/routes';
import { IPokemonDetail } from '@/interfaces/API';
import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

type PokemonCardProps = {
  pokemonDetail: IPokemonDetail;
  onCardClick?: (pokemon: IPokemonDetail) => void;
};

const styledPokemonNumber = (number: number) => {
  if (number < 10) return `00${number}`;
  if (number < 100) return `0${number}`;
  return number;
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

  return (
    <Card
      maxW="xs"
      minH="23.5rem"
      onClick={onClick}
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
        <Stack alignItems="center">
          <Text>{styledPokemonNumber(pokemonDetail.id)}</Text>
          <Text textTransform="capitalize">{name}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
