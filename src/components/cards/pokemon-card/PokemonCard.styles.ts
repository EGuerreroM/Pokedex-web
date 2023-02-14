import { styled } from '@/config/stitches.config';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '4px',
  backgroundColor: '$loContrast',
  boxShadow: '0px 1px 13px rgba(0,0,0,0.1);',
});
export const CardImageContainer = styled('div', {
  position: 'relative',
  height: '160px',
  width: '100%',
});

export const CardBody = styled('div', {
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});
