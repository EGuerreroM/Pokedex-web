import { styled, theme } from '@/config/stitches.config';

const Body = styled('p', {
  lineHeight: theme.lineHeights.large,
  color: theme.colors.hiContrast,
  variants: {
    size: {
      small: {
        fontSize: theme.fontSizes.small,
      },
      medium: {
        fontSize: theme.fontSizes.medium,
      },
      large: {
        fontSize: theme.fontSizes.large,
      },
    },
    weight: {
      regular: {
        fontWeight: theme.fontWeights.regular,
      },
      medium: {
        fontWeight: theme.fontWeights.medium,
      },
      semi: {
        fontWeight: theme.fontWeights.semi,
      },
    },
    color: {
      primary: {
        color: theme.colors.hiContrast,
      },
      secondary: {
        color: theme.colors.loContrast,
      },
    },
  },
});

const Typography = {
  Body,
};

export default Typography;
