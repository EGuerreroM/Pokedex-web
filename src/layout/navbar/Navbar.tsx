import ROUTES from '@/constants/routes';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Breadcrumb,
  BreadcrumbItem,
  Heading,
  Spacer,
  Flex,
  Text,
  useColorModeValue,
  IconButton,
  useColorMode,
  Box,
  Image,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import Logo from '../../../public/images/logo.svg';

const StyledLogo = styled(Logo)({
  width: '200px',

  height: '100px',
});

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="sticky"
      top="0"
      bgColor={useColorModeValue('whiteAlpha.50', 'darkAlpha.50')}
      zIndex="1"
      backdropFilter="blur( 8px )"
      border="1px solid rgba(255, 255, 255, 0.12)">
      <Flex padding="2.5" alignItems="center" justify="space-bewteen" maxWidth="1440px" margin="0 auto">
        <Link href={ROUTES.HOME}>
          <StyledLogo />
        </Link>
        <Spacer />

        <Breadcrumb separator={'|'}>
          <BreadcrumbItem>
            <IconButton
              variant="outline"
              aria-label="color-mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={ROUTES.POKEMONS.LIST}>
              <Text>Pokédex</Text>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={ROUTES.MOVIES.LIST}>
              <Text>Movies</Text>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box>
  );
};

export default Navbar;
