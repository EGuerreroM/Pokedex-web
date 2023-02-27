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
} from '@chakra-ui/react';

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
          <Heading as="h2">PokéMerch</Heading>
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
            <Link href={ROUTES.BERRIES.LIST}>
              <Text>Berries</Text>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box>
  );
};

export default Navbar;
