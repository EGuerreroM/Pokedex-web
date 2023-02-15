/* eslint-disable @next/next/no-img-element */
import ROUTES from '@/constants/routes';
import { IPokemonDetail } from '@/interfaces/API';
import Link from 'next/link';
import { CardBody, CardContainer, CardImage, CardImageContainer } from './PokemonCard.styles';

type PokemonCardProps = {
  pokemonDetail: IPokemonDetail;
};

const PokemonCard = (props: PokemonCardProps) => {
  const { pokemonDetail } = props;

  const {
    sprites: { other },
  } = pokemonDetail;
  const { name } = pokemonDetail;

  return (
    <Link href={ROUTES.POKEMONS.DETAIL(name)} prefetch={false}>
      <CardContainer>
        <CardImageContainer>
          <CardImage src={other['official-artwork']?.front_default || ROUTES.IMAGES.PLACEHOLDER} alt={name} />
        </CardImageContainer>
        <CardBody>
          <h3>{name}</h3>
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default PokemonCard;
