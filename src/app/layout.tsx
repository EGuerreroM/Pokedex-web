'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';
import { CacheProvider } from '@chakra-ui/next-js';
import { Box, ChakraProvider, ColorModeScript, localStorageManager } from '@chakra-ui/react';

import theme from '@/theme/theme';
import { Navbar } from '@/layout';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
            <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
            <QueryClientProvider client={queryClient}>
              <Navbar />
              <Box margin={{ lg: '1.5rem', '2xl': '0 auto' }} maxWidth="1440px">
                {children}
              </Box>
            </QueryClientProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
