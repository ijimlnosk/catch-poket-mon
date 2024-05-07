import { useQuery } from "react-query";
import { AbilityRoot } from "../types/pokeTypes/abilityType";
import { SpritesRoot } from "../types/pokeTypes/spritesType";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { getAllPocketmon } from "../libs/axios/pokeAPI";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";

interface PokeApiProps {
    getAbilityInfo?: (pokeId: number) => Promise<AbilityRoot>;
    getPokemonSprites?: (pokeId: number) => Promise<SpritesRoot>;
    getPokemonSpecies?: (pokeId: number) => Promise<SpeciesRoot>;
    getPokemon?: (pokeId: number) => Promise<PokemonRoot>;
}

export const usePokeData = ({
    getAbilityInfo,
    getPokemonSprites,
    getPokemonSpecies,
    getPokemon,
}: PokeApiProps) => {
    return useQuery("pokeData", async () => {
        const response = await getAllPocketmon();
        const details = await Promise.all(
            response.results.map(async (poke) => {
                const match = poke.url.match(/\/pokemon\/(\d+)\//);
                if (match) {
                    const pokeId = parseInt(match[1], 10);
                    const [info, sprites, species, pokemon] = await Promise.all(
                        [
                            getAbilityInfo?.(pokeId) ?? null,
                            getPokemonSprites?.(pokeId) ?? null,
                            getPokemonSpecies?.(pokeId) ?? null,
                            getPokemon?.(pokeId) ?? null,
                        ]
                    );

                    if (!info && !sprites && !species && !pokemon) return null;
                    return { info, sprites, species, pokemon };
                }
                return null;
            })
        );
        return details.filter((details) => details !== null);
    });
};
