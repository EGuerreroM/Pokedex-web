import ROUTES from '@/constants/routes';
import { IPokemonDetail } from '@/interfaces/API';
import { PokemonType } from '@/types/PokemonType';
import { gradientChooser, styledPokemonNumber } from '@/utils/style';
import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

type PokemonCardProps = {
  pokemonDetail: IPokemonDetail;
  onCardClick?: (pokemon: IPokemonDetail) => void;
};

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemonDetail, onCardClick } = props;
  const { types } = pokemonDetail;
  const [firstType] = types;

  const {
    sprites: { other },
  } = pokemonDetail;
  const { name } = pokemonDetail;

  const onClick = () => {
    if (onCardClick) {
      onCardClick(pokemonDetail);
    }
  };

  const [top, mid, bottom] = gradientChooser(pokemonDetail.types[0].type.name as PokemonType);

  return (
    <Card
      maxW="xs"
      minH="23.5rem"
      onClick={onClick}
      variant="filled"
      bgGradient={`linear( to-b, ${firstType.type.name}.${top} 5%, ${firstType.type.name}.${mid} 25% , ${firstType.type.name}.${bottom}) 25%`}
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
