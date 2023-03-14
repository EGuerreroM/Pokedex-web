'use client';

import { LoadingCard, MovieCard } from '@/components';
import MovieDetail from '@/components/movie-detail/MovieDetail';
import ENDPOINTS from '@/constants/endpoints';
import TIME from '@/constants/time';
import { IPokemonMovie } from '@/interfaces/API';
import { getPokemonMovies } from '@/services';
import {
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const Movies = () => {
  const [movies, setMovies] = useState<IPokemonMovie[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState<IPokemonMovie | null>(null);

  const {
    isFetching,
    isIdle,
    isError,
    status: moviesStatus
  } = useQuery({
    queryKey: ENDPOINTS.POKEMONSMOVIES.DATA,
    queryFn: () => getPokemonMovies(),
    onSuccess: (movies) => {
      setMovies(movies.data.results);
    },
    cacheTime: TIME.ONE_DAY,
  });

  const onCardClick = (movie: IPokemonMovie) => {
    setSelectedMovie(movie);
    onOpen();
  };

  if (moviesStatus === 'loading') {
    return (
      <Grid templateColumns="repeat(3,320px)" alignItems="center" justifyContent="center" gap="1rem">
        {Array.from({ length: 9 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </Grid>
    );
  }

  if (moviesStatus === 'error') {
    return <Text>error</Text>;
  }

  return (
    <Stack alignItems="center">
      <Grid templateColumns="repeat(3,320px)" alignItems="center" justifyContent="center" gap="1rem">
        {isIdle || isFetching ? (
          Array.from({ length: 9 }).map((_, index) => <LoadingCard key={index} />)
        ) : isError || !movies ? (
          <Text>error</Text>
        ) : (
          movies.map((response) => (
            <MovieCard key={response.id} movieDetail={response} onCardClick={onCardClick}/>
          ))
        )}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <MovieDetail movieDetail={selectedMovie}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Movies;
