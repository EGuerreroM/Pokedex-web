'use client';

import { globalStyles } from '@/config/stitches.config';
import { Layouts } from '@/styles';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  globalStyles();

  const [queryClient] = useState(() => new QueryClient(queryConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <Layouts.Flex direction="column" css={{ margin: '1rem' }}>
            {children}
          </Layouts.Flex>
        </body>
      </html>
    </QueryClientProvider>
  );
}
