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
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
});

const Layouts = {
  Flex,
  Grid,
};

export default Layouts;
