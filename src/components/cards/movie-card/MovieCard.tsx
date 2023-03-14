import ENVIROMENT from '@/constants/enviroment';
import ROUTES from '@/constants/routes';
import { IPokemonMovie } from '@/interfaces/API';
import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

type PokemonCardProps = {
  movieDetail: IPokemonMovie;
  onCardClick?: (movie: IPokemonMovie) => void;
};

const MovieCard = (props: PokemonCardProps) => {
  const { movieDetail, onCardClick } = props;
  const { title } = movieDetail;
  const { poster_path } = movieDetail;

  const onClick = () => {
    if (onCardClick) {
      onCardClick(movieDetail);
    }
  };

  return (
    <Card
      maxW="xs"
      minH="23.5rem"
      onClick={onClick}
      variant="filled"
      sx={{
        transition: 'all 500ms ease-in-out',
        ':hover': {
          cursor: 'pointer',
          transform: 'translateY(-5px) scale(1.005) translateZ(0)',
        },
      }}>
      <CardBody>
        <Box minH="17.5rem">
          <Image src={ ENVIROMENT.IMAGEURL(poster_path) || ROUTES.IMAGES.PLACEHOLDER} alt={title} />
        </Box>
        <Stack
          alignItems="center">
          <Text textTransform="capitalize">{title}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
