export interface PokemonRoot {
    id: number;
    name:string;
    height: number;
    weight: number;
    sprites: Sprites;
    types: Type[];
    stats: Stat[]
}
export interface Sprites {
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
    other: Other;
    // versions: Versions;
}

export interface Other {
    showdown: Showdown;
}
export interface Showdown {
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
