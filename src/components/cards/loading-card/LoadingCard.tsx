import { Card, CardBody, Skeleton, Stack } from '@chakra-ui/react';

const LoadingCard = () => {
  return (
    <Card maxW="xs" alignItems="center">
      <CardBody>
        <Skeleton height={200} width={200} margin={0} borderRadius="md" />
        <Stack alignItems="center" mt={4}>
          <Skeleton height={5} width={100} borderRadius="md" />
          <Skeleton height={5} width={100} borderRadius="md" />
        </Stack>
      </CardBody>
    </Card>
  );
};
export default LoadingCard;
