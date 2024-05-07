export interface ColorRoot {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: PokemonSpecy[];
}

export interface Name {
    name: string;
    language: Language;
}

export interface Language {
    name: string;
    url: string;
}

export interface PokemonSpecy {
    name: string;
    url: string;
}
