import { Pokemon, PokedexConvertType } from "../types/pokeTypes/pokemonData";

interface PokeDetails {
    species: {
        names: { name: string }[];
    };
    pokemon: {
        id: number;
        types: {
            type: {
                name: PokedexConvertType; 
            };
        }[];
        sprites: {
            other: {
                showdown: {
                    front_default: string;
                };
            };
        };
    };
}


export const formatType = (type: {type: {name: PokedexConvertType}}[]):PokedexConvertType[] => {
    return type.map((typeInfo) => typeInfo.type.name);
};

const convertToPokemon = (pokeDetail:PokeDetails): Pokemon => {
    return {
        data: {
            pokeId: pokeDetail.pokemon.id,
            name: pokeDetail.species.names[2].name,
            type: formatType(pokeDetail.pokemon.types),
            url: pokeDetail.pokemon.sprites.other.showdown.front_default,
            onClick: () => {},
        },
        id: pokeDetail.pokemon.id.toString(),
    };
};
export default convertToPokemon