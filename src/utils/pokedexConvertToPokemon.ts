import { PokeDetails } from "../hook/usePokedexInfinity";
import { Pokemon, PokedexConvertType } from "../types/pokeTypes/pokemonData";


const convertToPokemon = (pokeDetail: PokeDetails):Pokemon => {
    return {
        data: {
            pokeId: pokeDetail.pokemon.id,
            name: pokeDetail.species.names[2].name,
            type: pokeDetail.pokemon.types.map((typeInfo) => typeInfo.type.name as PokedexConvertType ),
            url: pokeDetail.pokemon.sprites.other.showdown.front_default,
            onClick: () => {},
        },
        id: pokeDetail.pokemon.id.toString(),
    };
};
export default convertToPokemon