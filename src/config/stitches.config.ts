import { createStitches } from '@stitches/react';

export const { styled, getCssText, createTheme, globalCss, theme } = createStitches({
  theme: {
    colors: {
      hiContrast: '#393e46',
      loContrast: '#f7f7f7',
      primary: '#929aab',
      secondary: '#eeeeee',
    },
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    hiContrast: '#f7f7f7',
    loContrast: '#393e46',
  },
});

export const globalStyles = globalCss({
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  'html,body': {
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  body: {
    fontFamily: 'system-ui, sans-serif',
    color: '$hiContrast',
    backgroundColor: '$loContrast',
  },
});
