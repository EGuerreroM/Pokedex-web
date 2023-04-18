/* eslint-disable no-nested-ternary */

'use client';

import { LoadingCard, Pagination, MovieCard } from '@/components';
import MovieDetail from '@/components/movie-detail/MovieDetail';
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
  const [page, setPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState<IPokemonMovie | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const { isFetching, isIdle, isError, status } = useQuery({
    queryKey: ['moviesDetail', page],
    queryFn: () => getPokemonMovies({ page }),
    onSuccess: (response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    },
    cacheTime: TIME.ONE_DAY,
  });

  const onCardClick = (movie: IPokemonMovie) => {
    setSelectedMovie(movie);
    onOpen();
  };

  if (status === 'loading') {
    return (
      <Grid templateColumns="repeat(3,320px)" alignItems="center" justifyContent="center" gap="1rem">
        {Array.from({ length: 9 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </Grid>
    );
  }

  if (status === 'error') {
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
          movies.map((response) => <MovieCard key={response.id} movieDetail={response} onCardClick={onCardClick} />)
        )}
      </Grid>
      <Pagination totalPages={totalPages} onChange={setPage} />
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <MovieDetail movieDetail={selectedMovie} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Movies;
