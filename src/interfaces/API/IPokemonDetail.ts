interface IPokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface IForm {
  name: string;
  url: string;
}

interface IGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
}

interface IMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: IVersionGroupDetail[];
}

interface ISprite {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  other: {
    dream_world?: {
      front_default?: string;
      front_female?: string;
    };
    home: {
      front_default?: string;
      front_female?: string;
      front_shiny?: string;
      front_shiny_female?: string;
    };
    official_artwork: {
      front_default?: string;
      front_shiny?: string;
    };
  };
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonDetail {
  abilities: IPokemonAbility[];
  base_experience: number;
  forms: IForm[];
  game_indices: IGameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: ISprite;
  stats: IStat[];
  types: IType[];
  weight: number;
}
