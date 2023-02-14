import ROUTES from '@/constants/routes';
import Image from 'next/image';
import { CardContainer } from './PokemonCard.styles';

type PokemonCardProps = {
  name: string;
  src?: string;
};

const PokemonCard = (props: PokemonCardProps) => {
  const { src, name } = props;

  return (
    <CardContainer>
      <Image src={src || ROUTES.IMAGES.PLACEHOLDER} alt={name} width={176} height={176} />
    </CardContainer>
  );
};

export default PokemonCard;
