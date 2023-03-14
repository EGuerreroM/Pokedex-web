'use-client';

import ENVIROMENT from '@/constants/enviroment';
import ROUTES from '@/constants/routes';
import { IPokemonMovie } from '@/interfaces/API';
import { Box, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';

type MovieDetailProps = {
  movieDetail: IPokemonMovie | null;
};

const MovieDetail = (props: MovieDetailProps) => {
  const { movieDetail } = props;

  return (
    <Stack direction="row" height="400px">
      <Stack w="30%" marginRight="20px">
        <Box>
          <Image
            src={ENVIROMENT.IMAGEURL(movieDetail?.poster_path ? movieDetail?.poster_path : '') || ROUTES.IMAGES.PLACEHOLDER}
            alt={movieDetail?.title}
            boxSize="350px"
          />
        </Box>
      </Stack>
      <Stack w="70%">
        <Stack>
          <Heading textTransform="capitalize">{movieDetail?.title}</Heading>
        </Stack>
        <Stack gap="1rem">
          <Text>{movieDetail?.overview}</Text>

          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="teal" size="sm">
              Prime Video
            </Button>
            <Button colorScheme="teal" size="sm">
              Netflix
            </Button>
            <Button colorScheme="teal" size="sm">
              HBO Max
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MovieDetail;
