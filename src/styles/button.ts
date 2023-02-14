import { styled } from '@/config/stitches.config';

const PrimaryButton = styled('button', {
  borderRadius: '4px',
  backgroundColor: '$pikachuRed',
  color: '$loContrast',
  fontWeight: '$semi',
  fontSize: '$medium',
  textTransform: 'uppercase',
  padding: '0.5rem 1rem',
  border: 0,
  width: '341px',
});

const Button = {
  Primary: PrimaryButton,
};

export default Button;
