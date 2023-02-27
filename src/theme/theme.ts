import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import colors from './theme.colors';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const theme = extendTheme({ config, colors });

export default theme;
