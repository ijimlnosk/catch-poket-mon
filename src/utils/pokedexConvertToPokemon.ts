import { Pokemon } from "../types/pokeTypes/pokemonData";


export const formatType = (type) => {
    return type.map((typeInfo) => typeInfo.type.name);
};

const convertToPokemon = (pokeDetail): Pokemon => {
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
