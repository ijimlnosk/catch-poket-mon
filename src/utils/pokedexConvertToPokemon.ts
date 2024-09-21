import { PokeDetails } from "../hook/usePokedexInfinity";
import {
    PokedexConvertType,
    PokemonData,
} from "../types/pokeTypes/pokemonData";

const convertToPokemon = (pokeDetail: PokeDetails): PokemonData => {
    return {
        poke_id: pokeDetail.pokemon.id,
        name: pokeDetail.species.names[2].name,
        type: pokeDetail.pokemon.types.map(
            (typeInfo) => typeInfo.type.name as PokedexConvertType
        ),
        url: pokeDetail.pokemon.sprites.other.showdown.front_default,
        onClick: () => {},

        id: pokeDetail.pokemon.id,
    };
};
export default convertToPokemon;
