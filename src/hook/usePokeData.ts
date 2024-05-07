import { useQuery } from "react-query";
import { AbilityRoot } from "../types/pokeTypes/abilityType";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { getAllPocketmon } from "../libs/axios/pokeAPI";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";

interface PokeApiProps {
    getAbilityInfo?: (pokeId: number) => Promise<AbilityRoot>;
    getPokemonSpecies?: (pokeId: number) => Promise<SpeciesRoot>;
    getPokemon?: (pokeId: number) => Promise<PokemonRoot>;
}

export const usePokeData = ({
    getAbilityInfo,
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
                    const [info, species, pokemon] = await Promise.all([
                        getAbilityInfo?.(pokeId) ?? null,
                        getPokemonSpecies?.(pokeId) ?? null,
                        getPokemon?.(pokeId) ?? null,
                    ]);

                    if (!info && !species && !pokemon) return null;
                    return { info, species, pokemon };
                }
                return null;
            })
        );
        return details.filter((details) => details !== null);
    });
};
