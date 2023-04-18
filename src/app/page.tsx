'use client';

import ROUTES from '@/constants/routes';
import { Link } from '@chakra-ui/next-js';
import { Box, Text, Stack, Image, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Stack gap={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={1}
          padding={4}
          minHeight="632px"
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
        <Stack direction="row" justify="space-between" position="relative">
          <Image src={ROUTES.IMAGES.CINEMA} alt="cinema" width="100%" height={800} />

          <Stack margin="auto 2rem" position="absolute" top="40%" left="25%">
            <Stack>
              <Text fontSize="4xl" fontWeight="semibold" color="white">
                Lights, Camera, Action! Explore Our Epic Movie Collection Today
              </Text>
              <Stack justifyContent="flex-end" direction="row">
                <Link href={ROUTES.MOVIES.LIST}>
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
                    SEE OUR MOVIES
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      `
    </main>
  );
}
