'use client';

import ROUTES from '@/constants/routes';
import { getPokemonDetail } from '@/services';
import { Link } from '@chakra-ui/next-js';
import { Box, Text, Stack, Image, Button } from '@chakra-ui/react';
import { useQuery } from 'react-query';

export default function Home() {
  return (
    <main>
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={1}
        padding={4}
        backdropFilter="blur( 8.4px) saturate( 100% )"
        bgGradient="linear(to-r, #FF5F6D, #FFC371 )"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        borderRadius="md">
        <Stack width="40%" margin="auto 1rem">
          <Text fontSize="4xl" fontWeight="semibold" color="white">
            Unleash the Fire Within with Charizard - Your Ultimate Partner in Battle!
          </Text>
          <Link href={ROUTES.POKEMONS.LIST}>
            <Button
              padding="6"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
              backgroundColor="whiteAlpha.100"
              width={200}
              borderRadius="md"
              fontWeight="semibold"
              border={`1px solid white`}
              color="white"
              _hover={{ backgroundColor: 'whiteAlpha.300' }}>
              CATCH THEM ALL
            </Button>
          </Link>
        </Stack>
        <Box>
          <Image src={ROUTES.IMAGES.CHARIZARD} alt="Charizard" width={600} />
        </Box>
      </Stack>
    </main>
  );
}
