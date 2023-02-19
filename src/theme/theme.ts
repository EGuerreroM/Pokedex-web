import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  pokemons: {
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
};

const theme = extendTheme({ config, colors });

export default theme;
