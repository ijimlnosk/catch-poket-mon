import { AbilityRoot } from "../../types/pokeTypes/abilityType";
import { ColorRoot } from "../../types/pokeTypes/pokeColorType";
import { PokeNamedRoot } from "../../types/pokeTypes/pokeNamedType";
import { PokemonRoot } from "../../types/pokeTypes/pokemonType";
import { SpeciesRoot } from "../../types/pokeTypes/speciesType";
import { SpritesRoot } from "../../types/pokeTypes/spritesType";

import { pocketmonInstance } from "./axiosInstance";

export const getAllPocketmon = async () => {
    const response = await pocketmonInstance.get<PokeNamedRoot>(
        "/pokemon/?limit=250&offset=20"
    );
    return response.data;
};

export const getAbilityInfo = async (poketId: number) => {
    const response = await pocketmonInstance.get<AbilityRoot>(
        `/ability/${poketId}`
    );
    return response.data;
};

export const getPokemonSprites = async (poketId: number) => {
    const response = await pocketmonInstance.get<SpritesRoot>(
        `/pokemon/${poketId}`
    );
    return response.data;
};

export const getPokemonSpecies = async (pokeId: number) => {
    const response = await pocketmonInstance.get<SpeciesRoot>(
        `/pokemon-species/${pokeId}`
    );
    return response.data;
};

export const getPokeColor = async (pokeId: number) => {
    const response = await pocketmonInstance.get<ColorRoot>(
        `pokemon-color/${pokeId}`
    );
    return response.data;
};

export const getPokemon = async (pokeId: number) => {
    const response = await pocketmonInstance.get<PokemonRoot>(
        `pokemon/${pokeId}`
    );
    return response.data;
};
