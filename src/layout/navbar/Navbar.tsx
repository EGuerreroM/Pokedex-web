import ROUTES from '@/constants/routes';
import { Link } from '@chakra-ui/next-js';
import { Breadcrumb, BreadcrumbItem, Heading, Spacer, Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex padding="2.5" alignItems="center" justify="space-bewteen">
      <Link href={ROUTES.HOME}>
        <Heading as="h2">PokéMerch</Heading>
      </Link>
      <Spacer />
      <Breadcrumb separator={'|'}>
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
  );
};

export default Navbar;
