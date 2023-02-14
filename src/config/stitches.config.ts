import { createStitches } from '@stitches/react';

export const { styled, getCssText, createTheme, globalCss, theme } = createStitches({
  theme: {
    colors: {
      hiContrast: '#393e46',
      loContrast: '#f7f7f7',
      primary: '#929aab',
      secondary: '#eeeeee',
      pikachu: '#FDD624',
      pikachuRed: '#EE3C23',
      bug: '#92A112',
      dark: '#241A18',
      dragon: '#6554B4',
      electric: '#F7CF59',
      fairy: '#F4B1F6',
      fighting: '#80331B',
      fire: '#EF3F0D',
      flying: '#6D84DD',
      ghost: '#49488B',
      grass: '#70C034',
      ground: '#B69B50',
      ice: '#6ED2F4',
      normal: '#C4BDB4',
      poison: '#9A589B',
      psychic: '#E84C83',
      rock: '#C3AF75',
      steel: '#8E8E9D',
      water: '#4799EC',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semi: 600,
    },
    fontSizes: {
      small: '14px',
      medium: '16px',
      large: '24px',
    },
    lineHeights: {
      large: '24px',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semi: 600,
    },
    fontSizes: {
      small: '14px',
      medium: '16px',
      large: '24px',
    },
    lineHeights: {
      large: '24px',
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
    fontFamily: 'roboto, sans-serif',
    color: '$hiContrast',
    backgroundColor: '$loContrast',
  },
});
