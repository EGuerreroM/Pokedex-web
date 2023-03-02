'use client';

import { Box, Text, Heading, Stack, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Stack width="100%" height="400px" justifyContent="center" alignItems="center">
        <Image src="/images/home-banner.jpeg" alt="banner" position="absolute" />
        {/* <Heading zIndex="2">Welcome To Pokémon Merch</Heading> */}
      </Stack>
    </main>
  );
}
