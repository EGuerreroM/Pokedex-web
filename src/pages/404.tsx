import ROUTES from '@/constants/routes';
import { Link } from '@chakra-ui/next-js';
import { Button, Image, Stack, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Stack alignItems="center" margin="0 auto">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Text fontSize="200px" color="pikachu">
          4
        </Text>
        <Image src={ROUTES.SVG.POKEMON} alt="pokeball" width={200} />
        <Text fontSize="200px" color="pikachu">
          4
        </Text>
      </Stack>

      <Stack justifySelf="center" alignItems="center" gap={4}>
        <Text fontSize="xl" textAlign="center">
          Oh no! It looks like the page you&apos;re looking for has been lost in the tall grass.
        </Text>

        <Link href={ROUTES.HOME}>
          <Button variant="solid" fontSize="2xl" textTransform="capitalize">
            Back Home
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NotFound;
