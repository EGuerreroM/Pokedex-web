'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/theme/theme';
import { Navbar } from '@/layout';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
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
          <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Navbar />
              {children}
            </QueryClientProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
