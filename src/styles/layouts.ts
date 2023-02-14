import { styled } from '@/config/stitches.config';

const Flex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
    },
  },
});

const Grid = styled('div', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  variants: {
    layout: {
      pokemonList: {
        gridTemplateColumns: 'repeat(6, 178px)',
      },
    },
  },
});

const Layouts = {
  Flex,
  Grid,
};

export default Layouts;
